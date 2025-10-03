import { NextResponse } from 'next/server';
import { nanoid } from 'nanoid';
import { devStorage } from '@/lib/storage';

// PayPal 결제 완료 처리 API
export async function POST(request: Request) {
  try {
    const { orderID } = await request.json();

    if (!orderID) {
      return NextResponse.json({ error: 'Order ID is required' }, { status: 400 });
    }

    const isProduction = process.env.NODE_ENV === 'production';
    const clientId = isProduction
      ? process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID_LIVE
      : process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID_SANDBOX;

    const clientSecret = isProduction
      ? process.env.PAYPAL_CLIENT_SECRET_LIVE
      : process.env.PAYPAL_CLIENT_SECRET_SANDBOX;

    const baseURL = isProduction
      ? 'https://api-m.paypal.com'
      : 'https://api-m.sandbox.paypal.com';

    if (!clientId || !clientSecret) {
      console.error('[PayPal] Missing credentials for capture');
      return NextResponse.json({ error: 'PayPal credentials not configured' }, { status: 500 });
    }

    console.log(`[PayPal] Capturing order: ${orderID}`);

    // PayPal 액세스 토큰 요청
    const auth = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

    const tokenResponse = await fetch(`${baseURL}/v1/oauth2/token`, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${auth}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: 'grant_type=client_credentials',
    });

    if (!tokenResponse.ok) {
      const errorText = await tokenResponse.text();
      console.error('[PayPal] Token request failed during capture:', errorText);
      return NextResponse.json({ error: 'Failed to get PayPal access token' }, { status: 500 });
    }

    const { access_token } = await tokenResponse.json();

    // PayPal 주문 캡처 (결제 완료)
    const captureResponse = await fetch(`${baseURL}/v2/checkout/orders/${orderID}/capture`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${access_token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!captureResponse.ok) {
      const errorText = await captureResponse.text();
      console.error('[PayPal] Order capture failed:', errorText);
      return NextResponse.json({ error: 'Failed to capture PayPal order' }, { status: 500 });
    }

    const captureData = await captureResponse.json();

    // 결제 성공 확인
    if (captureData.status !== 'COMPLETED') {
      console.error('[PayPal] Payment not completed:', captureData.status);
      return NextResponse.json({ error: 'Payment not completed' }, { status: 400 });
    }

    console.log(`[PayPal] Payment completed successfully: ${orderID}`);

    // 결제 세션 ID 생성 (프리미엄 활성화용)
    const paymentSessionId = nanoid(16);

    // 결제 정보 저장 (7일 유지)
    const paymentData = {
      orderID,
      paymentSessionId,
      status: 'completed',
      amount: captureData.purchase_units[0].payments.captures[0].amount.value,
      currency: captureData.purchase_units[0].payments.captures[0].amount.currency_code,
      payerEmail: captureData.payer?.email_address,
      timestamp: new Date().toISOString(),
      captureData: captureData
    };

    // 7일간 저장 (7 * 24 * 60 * 60 = 604,800초)
    const ttlInSeconds = 604800;
    devStorage.set(`payment:${paymentSessionId}`, paymentData, ttlInSeconds);

    console.log(`[PayPal] Payment session created: ${paymentSessionId}`);

    return NextResponse.json({
      success: true,
      paymentSessionId,
      orderID,
      status: 'completed',
      message: 'Payment completed successfully'
    });

  } catch (error) {
    console.error('[PayPal] Capture order error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}