import { NextRequest, NextResponse } from 'next/server';
import { nanoid } from 'nanoid';

// In-memory storage for payment sessions (in production, use Redis/Database)
const paymentSessions = new Map<string, {
  sessionId: string;
  status: 'pending' | 'completed' | 'failed';
  licenseKey?: string;
  createdAt: number;
}>();

// Clean up old sessions (older than 1 hour)
setInterval(() => {
  const oneHourAgo = Date.now() - 60 * 60 * 1000;
  for (const [sessionId, session] of paymentSessions.entries()) {
    if (session.createdAt < oneHourAgo) {
      paymentSessions.delete(sessionId);
    }
  }
}, 5 * 60 * 1000); // Clean every 5 minutes

/**
 * POST /api/payment/session
 * Create a new payment session
 */
export async function POST(request: NextRequest) {
  try {
    const sessionId = nanoid(32);

    paymentSessions.set(sessionId, {
      sessionId,
      status: 'pending',
      createdAt: Date.now(),
    });

    console.log('[Payment Session] Created session:', sessionId);

    return NextResponse.json({
      sessionId,
      status: 'pending',
    });

  } catch (error) {
    console.error('[Payment Session] Error creating session:', error);
    return NextResponse.json(
      { error: 'Failed to create payment session' },
      { status: 500 }
    );
  }
}

/**
 * GET /api/payment/session?sessionId=xxx
 * Check payment session status
 */
export async function GET(request: NextRequest) {
  try {
    const sessionId = request.nextUrl.searchParams.get('sessionId');

    if (!sessionId) {
      return NextResponse.json(
        { error: 'Session ID is required' },
        { status: 400 }
      );
    }

    const session = paymentSessions.get(sessionId);

    if (!session) {
      return NextResponse.json(
        { error: 'Session not found' },
        { status: 404 }
      );
    }

    console.log('[Payment Session] Status check:', sessionId, session.status);

    return NextResponse.json({
      sessionId: session.sessionId,
      status: session.status,
      licenseKey: session.licenseKey,
    });

  } catch (error) {
    console.error('[Payment Session] Error checking session:', error);
    return NextResponse.json(
      { error: 'Failed to check payment session' },
      { status: 500 }
    );
  }
}

/**
 * PUT /api/payment/session
 * Update payment session status (called by webhook)
 */
export async function PUT(request: NextRequest) {
  try {
    const { sessionId, status, licenseKey } = await request.json();

    if (!sessionId) {
      return NextResponse.json(
        { error: 'Session ID is required' },
        { status: 400 }
      );
    }

    const session = paymentSessions.get(sessionId);

    if (!session) {
      return NextResponse.json(
        { error: 'Session not found' },
        { status: 404 }
      );
    }

    // Update session
    paymentSessions.set(sessionId, {
      ...session,
      status,
      licenseKey,
    });

    console.log('[Payment Session] Updated session:', sessionId, status);

    return NextResponse.json({
      success: true,
      sessionId,
      status,
    });

  } catch (error) {
    console.error('[Payment Session] Error updating session:', error);
    return NextResponse.json(
      { error: 'Failed to update payment session' },
      { status: 500 }
    );
  }
}

// Export the sessions map for webhook access
export { paymentSessions };
