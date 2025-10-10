/**
 * JWT Authentication Utility
 *
 * Provides token generation and verification for API authentication
 * Tokens expire after 1 hour to minimize security risk
 */

import jwt from 'jsonwebtoken';
import { serverEnv } from './env';

const JWT_EXPIRY = '1h'; // 1 hour
const TOKEN_TYPE = 'Bearer';

export interface JWTPayload {
  // Session identifier
  sessionId: string;
  // Issued at timestamp
  iat?: number;
  // Expiration timestamp
  exp?: number;
}

/**
 * Get or generate JWT secret from environment
 */
function getJWTSecret(): string {
  // In production, use a strong secret from environment variable
  // In development, use a default (this is acceptable for local dev only)
  const secret = process.env.JWT_SECRET || process.env.NEXTAUTH_SECRET;

  if (!secret && serverEnv.nodeEnv === 'production') {
    throw new Error('JWT_SECRET or NEXTAUTH_SECRET must be set in production');
  }

  // Use a development fallback (NOT for production)
  return secret || 'dev-secret-change-in-production-' + Date.now();
}

/**
 * Generate a JWT token for API authentication
 * @param sessionId - Unique session identifier
 * @returns Signed JWT token
 */
export function generateToken(sessionId: string): string {
  const payload: JWTPayload = {
    sessionId,
  };

  const secret = getJWTSecret();
  const token = jwt.sign(payload, secret, {
    expiresIn: JWT_EXPIRY,
    issuer: 'k-name-studio',
  });

  return token;
}

/**
 * Verify and decode a JWT token
 * @param token - JWT token to verify
 * @returns Decoded payload if valid, null if invalid
 */
export function verifyToken(token: string): JWTPayload | null {
  try {
    const secret = getJWTSecret();
    const decoded = jwt.verify(token, secret, {
      issuer: 'k-name-studio',
    }) as JWTPayload;

    return decoded;
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      console.warn('[JWT] Token expired:', error.message);
    } else if (error instanceof jwt.JsonWebTokenError) {
      console.warn('[JWT] Invalid token:', error.message);
    } else {
      console.error('[JWT] Token verification error:', error);
    }
    return null;
  }
}

/**
 * Extract Bearer token from Authorization header
 * @param authHeader - Authorization header value
 * @returns Token string if valid format, null otherwise
 */
export function extractBearerToken(authHeader: string | null): string | null {
  if (!authHeader) {
    return null;
  }

  const parts = authHeader.split(' ');
  if (parts.length !== 2 || parts[0] !== TOKEN_TYPE) {
    return null;
  }

  return parts[1];
}

/**
 * Generate a unique session ID
 * @returns Random session ID
 */
export function generateSessionId(): string {
  // Use crypto for secure random generation
  const timestamp = Date.now().toString(36);
  const randomPart = Math.random().toString(36).substring(2, 15);
  const randomPart2 = Math.random().toString(36).substring(2, 15);

  return `${timestamp}-${randomPart}${randomPart2}`;
}
