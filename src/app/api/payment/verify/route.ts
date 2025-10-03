import { NextResponse } from 'next/server';
import { devStorage } from '@/lib/storage';

// 결제 세션 검증 API
export async function POST(request: Request): Promise<NextResponse> {
  try {
    const { paymentSessionId } = await request.json();

    if (!paymentSessionId) {
      return NextResponse.json({ error: 'Payment session ID is required' }, { status: 400 });
    }

    console.log(`[Payment] Verifying payment session: ${paymentSessionId}`);

    // 결제 정보 조회
    const paymentData = devStorage.get(`payment:${paymentSessionId}`);

    if (!paymentData) {
      console.log(`[Payment] Payment session not found or expired: ${paymentSessionId}`);
      return NextResponse.json({
        valid: false,
        error: 'Payment session not found or expired'
      }, { status: 404 });
    }

    const payment = paymentData as {
      status: string;
      orderID: string;
      amount: string;
      currency: string;
      timestamp: string;
    };

    // 결제 상태 확인
    if (payment.status !== 'completed') {
      console.log(`[Payment] Payment not completed: ${payment.status}`);
      return NextResponse.json({
        valid: false,
        error: 'Payment not completed'
      }, { status: 400 });
    }

    console.log(`[Payment] Payment session verified successfully: ${paymentSessionId}`);

    return NextResponse.json({
      valid: true,
      paymentSessionId,
      orderID: payment.orderID,
      amount: payment.amount,
      currency: payment.currency,
      timestamp: payment.timestamp,
      message: 'Payment verified successfully'
    });

  } catch (error) {
    console.error('[Payment] Verify payment error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}