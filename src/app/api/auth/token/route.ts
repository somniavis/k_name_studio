import { NextResponse } from 'next/server';
import { generateToken, generateSessionId } from '@/lib/jwt';

/**
 * POST /api/auth/token
 *
 * Issues a JWT token for API authentication
 * This endpoint is public and generates a new session token
 */
export async function POST() {
  try {
    // Generate a unique session ID
    const sessionId = generateSessionId();

    // Generate JWT token
    const token = generateToken(sessionId);

    console.log('[Auth] Issued new token for session:', sessionId);

    return NextResponse.json({
      token,
      expiresIn: '1h',
      tokenType: 'Bearer',
    });
  } catch (error) {
    console.error('[Auth] Error issuing token:', error);
    return NextResponse.json(
      { error: 'Failed to issue token' },
      { status: 500 }
    );
  }
}
