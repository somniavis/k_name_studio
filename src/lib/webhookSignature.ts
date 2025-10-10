/**
 * Webhook Signature Verification Utility
 *
 * Verifies webhook signatures from Gumroad using HMAC-SHA256
 * Prevents webhook spoofing and ensures authenticity
 */

import crypto from 'crypto';

/**
 * Verify Gumroad webhook signature
 *
 * Gumroad sends webhooks with signature in the format:
 * - Header: X-Gumroad-Signature
 * - Algorithm: HMAC-SHA256
 * - Secret: Your webhook secret from Gumroad settings
 *
 * @param payload - Raw webhook payload (string or FormData)
 * @param signature - Signature from X-Gumroad-Signature header
 * @param secret - Webhook secret from Gumroad settings
 * @returns true if signature is valid, false otherwise
 */
export function verifyGumroadSignature(
  payload: string,
  signature: string | null,
  secret: string
): boolean {
  if (!signature) {
    console.warn('[Webhook] Missing signature');
    return false;
  }

  if (!secret) {
    console.error('[Webhook] Webhook secret not configured');
    return false;
  }

  try {
    // Create HMAC-SHA256 hash of the payload
    const hmac = crypto.createHmac('sha256', secret);
    hmac.update(payload);
    const expectedSignature = hmac.digest('hex');

    // Compare signatures using timing-safe comparison
    const isValid = crypto.timingSafeEqual(
      Buffer.from(signature),
      Buffer.from(expectedSignature)
    );

    if (!isValid) {
      console.warn('[Webhook] Invalid signature');
    }

    return isValid;
  } catch (error) {
    console.error('[Webhook] Signature verification error:', error);
    return false;
  }
}

/**
 * Convert FormData to string for signature verification
 * Gumroad sends form-encoded data, we need to reconstruct the exact payload
 *
 * @param formData - FormData from request
 * @returns String representation of form data
 */
export function formDataToString(formData: FormData): string {
  const params = new URLSearchParams();

  // Sort keys alphabetically for consistent signature
  const entries = Array.from(formData.entries()).sort((a, b) =>
    a[0].localeCompare(b[0])
  );

  for (const [key, value] of entries) {
    params.append(key, value.toString());
  }

  return params.toString();
}

/**
 * Extract signature from request headers
 *
 * @param request - NextRequest object
 * @returns Signature string or null
 */
export function extractSignature(headers: Headers): string | null {
  // Gumroad uses X-Gumroad-Signature header
  return headers.get('x-gumroad-signature') ||
         headers.get('X-Gumroad-Signature');
}
