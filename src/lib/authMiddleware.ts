/**
 * JWT Authentication Middleware
 *
 * Verifies JWT tokens in API requests
 * Returns 401 Unauthorized if token is missing or invalid
 */

import { NextRequest, NextResponse } from 'next/server';
import { verifyToken, extractBearerToken } from './jwt';

export interface AuthenticatedRequest extends NextRequest {
  sessionId?: string;
}

/**
 * Middleware to verify JWT authentication
 * @param request - Incoming request
 * @returns NextResponse with 401 if unauthorized, null if authorized
 */
export function requireAuth(request: NextRequest): NextResponse | null {
  // Extract Authorization header
  const authHeader = request.headers.get('Authorization');
  const token = extractBearerToken(authHeader);

  if (!token) {
    console.warn('[Auth] Missing authorization token');
    return NextResponse.json(
      { error: 'Unauthorized', message: 'Missing authentication token' },
      { status: 401 }
    );
  }

  // Verify token
  const payload = verifyToken(token);

  if (!payload) {
    console.warn('[Auth] Invalid or expired token');
    return NextResponse.json(
      { error: 'Unauthorized', message: 'Invalid or expired token' },
      { status: 401 }
    );
  }

  // Token is valid, attach session ID to request
  // Note: We can't directly modify NextRequest, so we'll return null to indicate success
  // The calling route will need to verify the token again to get the sessionId
  console.log('[Auth] Request authorized for session:', payload.sessionId);

  return null; // null means authorized
}

/**
 * Get session ID from authenticated request
 * @param request - Incoming request
 * @returns Session ID if authenticated, null otherwise
 */
export function getSessionId(request: NextRequest): string | null {
  const authHeader = request.headers.get('Authorization');
  const token = extractBearerToken(authHeader);

  if (!token) {
    return null;
  }

  const payload = verifyToken(token);
  return payload?.sessionId || null;
}
