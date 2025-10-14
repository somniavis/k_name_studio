import { NextRequest, NextResponse } from 'next/server';
import { nanoid } from 'nanoid';
import { Redis } from '@upstash/redis';

// Initialize Redis from environment variables
const redis = Redis.fromEnv();

// Define the session data structure
interface PaymentSession {
  sessionId: string;
  status: 'pending' | 'completed' | 'failed';
  licenseKey?: string;
  createdAt: number;
}

/**
 * POST /api/payment/session
 * Create a new payment session
 */
export async function POST(request: NextRequest) {
  try {
    const sessionId = nanoid(32);
    const session: PaymentSession = {
      sessionId,
      status: 'pending',
      createdAt: Date.now(),
    };

    await redis.set(sessionId, JSON.stringify(session), { ex: 3600 }); // 1-hour expiry

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

    const session = await redis.get<PaymentSession>(sessionId);

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

    const session = await redis.get<PaymentSession>(sessionId);

    if (!session) {
      return NextResponse.json(
        { error: 'Session not found' },
        { status: 404 }
      );
    }

    // Update session
    const updatedSession: PaymentSession = {
      ...session,
      status,
      licenseKey,
    };

    await redis.set(sessionId, JSON.stringify(updatedSession), { ex: 3600 }); // Persist with expiry

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