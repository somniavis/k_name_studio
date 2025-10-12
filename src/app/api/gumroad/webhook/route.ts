import { NextRequest, NextResponse } from 'next/server';
import { serverEnv } from '@/lib/env';
import {
  verifyGumroadSignature,
  extractSignature,
} from '@/lib/webhookSignature';

// Gumroad webhook handler
// This endpoint is called by Gumroad when a purchase is completed
// Implements webhook signature verification for security
export async function POST(request: NextRequest) {
  try {
    // Get raw body for signature verification
    const rawBody = await request.text();

    // 🔒 Security Check: Verify webhook signature (if webhook secret is configured)
    const { gumroadWebhookSecret } = serverEnv;
    if (gumroadWebhookSecret) {
      const signature = extractSignature(request.headers);
      const isValid = verifyGumroadSignature(rawBody, signature, gumroadWebhookSecret);

      if (!isValid) {
        console.error('[Gumroad Webhook] Invalid signature - possible spoofing attempt');
        return NextResponse.json(
          { error: 'Invalid webhook signature' },
          { status: 401 }
        );
      }

      console.log('[Gumroad Webhook] ✅ Signature verified');
    } else {
      console.warn('[Gumroad Webhook] ⚠️ Webhook secret not configured - signature verification skipped');
    }

    // Parse form data from raw body
    const formData = new URLSearchParams(rawBody);

    // Extract Gumroad data
    const saleId = formData.get('sale_id') as string;
    const email = formData.get('email') as string;
    const productPermalink = formData.get('product_permalink') as string;
    const licenseKey = formData.get('license_key') as string;
    const purchaserName = formData.get('purchaser_name') as string;
    const price = formData.get('price') as string;
    const currency = formData.get('currency') as string;

    // Extract custom field - session_id
    const sessionId = formData.get('session_id') as string;

    console.log('[Gumroad Webhook] Purchase received:', {
      saleId,
      email,
      productPermalink,
      licenseKey,
      purchaserName,
      price,
      currency,
      sessionId,
    });

    // Verify it's for the correct product using server-only env
    const { gumroadProductPermalink } = serverEnv;
    if (productPermalink !== gumroadProductPermalink) {
      console.error('[Gumroad Webhook] Invalid product:', productPermalink);
      return NextResponse.json(
        { error: 'Invalid product' },
        { status: 400 }
      );
    }

    // Update payment session if session_id is provided
    if (sessionId) {
      try {
        const updateResponse = await fetch(
          `${request.nextUrl.origin}/api/payment/session`,
          {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              sessionId,
              status: 'completed',
              licenseKey,
            }),
          }
        );

        if (updateResponse.ok) {
          console.log('[Gumroad Webhook] ✅ Payment session updated:', sessionId);
        } else {
          console.warn('[Gumroad Webhook] ⚠️ Failed to update payment session:', sessionId);
        }
      } catch (error) {
        console.error('[Gumroad Webhook] Error updating payment session:', error);
      }
    } else {
      console.warn('[Gumroad Webhook] ⚠️ No session_id provided in webhook data');
    }

    // Return success to Gumroad
    return NextResponse.json(
      {
        success: true,
        saleId,
        licenseKey,
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('[Gumroad Webhook] Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
