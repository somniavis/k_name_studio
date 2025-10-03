import { NextResponse } from 'next/server';

// PayPal 주문 생성 API
export async function POST(request: Request) {
  try {
    const { amount = '2.99', currency = 'USD' } = await request.json();

    // PayPal 환경 설정 - PAYPAL_ENVIRONMENT로 강제 제어 가능
    const paypalEnv = process.env.PAYPAL_ENVIRONMENT || (process.env.NODE_ENV === 'production' ? 'live' : 'sandbox');
    const isPayPalLive = paypalEnv === 'live';

    const clientId = isPayPalLive
      ? process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID_LIVE
      : process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID_SANDBOX;

    const clientSecret = isPayPalLive
      ? process.env.PAYPAL_CLIENT_SECRET_LIVE
      : process.env.PAYPAL_CLIENT_SECRET_SANDBOX;

    const baseURL = isPayPalLive
      ? 'https://api-m.paypal.com'
      : 'https://api-m.sandbox.paypal.com';

    if (!clientId || !clientSecret) {
      console.error('[PayPal] Missing credentials:', {
        hasClientId: !!clientId,
        hasClientSecret: !!clientSecret,
        paypalEnv,
        isPayPalLive
      });
      return NextResponse.json({ error: 'PayPal credentials not configured' }, { status: 500 });
    }

    console.log(`[PayPal] Creating order - Environment: ${isPayPalLive ? 'Live' : 'Sandbox'}`);
    console.log(`[PayPal] Request data:`, { amount, currency, baseURL });

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
      console.error('[PayPal] Token request failed:', {
        status: tokenResponse.status,
        statusText: tokenResponse.statusText,
        error: errorText,
        environment: isPayPalLive ? 'Live' : 'Sandbox',
        baseURL
      });
      return NextResponse.json({
        error: 'Failed to get PayPal access token',
        details: `Status: ${tokenResponse.status}, Environment: ${isPayPalLive ? 'Live' : 'Sandbox'}`
      }, { status: 500 });
    }

    const { access_token } = await tokenResponse.json();

    // PayPal 주문 생성
    const order = {
      intent: 'CAPTURE',
      purchase_units: [
        {
          amount: {
            currency_code: currency,
            value: amount,
          },
          description: 'Korean Name Studio - Premium Package',
        },
      ],
      application_context: {
        return_url: `https://k-name-studio.vercel.app/api/payment/success`,
        cancel_url: `https://k-name-studio.vercel.app/api/payment/cancel`,
        brand_name: 'Korean Name Studio',
        user_action: 'PAY_NOW',
      },
    };

    console.log(`[PayPal] Sending order request:`, JSON.stringify(order, null, 2));

    const orderResponse = await fetch(`${baseURL}/v2/checkout/orders`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${access_token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(order),
    });

    if (!orderResponse.ok) {
      const errorText = await orderResponse.text();
      console.error('[PayPal] Order creation failed:', {
        status: orderResponse.status,
        statusText: orderResponse.statusText,
        error: errorText,
        environment: isPayPalLive ? 'Live' : 'Sandbox',
        baseURL
      });
      return NextResponse.json({
        error: 'Failed to create PayPal order',
        details: `Status: ${orderResponse.status}, Environment: ${isPayPalLive ? 'Live' : 'Sandbox'}`
      }, { status: 500 });
    }

    const orderData = await orderResponse.json();
    console.log(`[PayPal] Order created successfully: ${orderData.id}`);

    return NextResponse.json({
      orderID: orderData.id,
      amount,
      currency
    });

  } catch (error) {
    console.error('[PayPal] Create order error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}