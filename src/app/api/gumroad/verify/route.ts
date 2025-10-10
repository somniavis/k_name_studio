import { NextRequest, NextResponse } from 'next/server';
import { serverEnv } from '@/lib/env';
import { isLicenseKeyReused, storeLicenseKeyRecord } from '@/lib/kv';

// Verify Gumroad license key
// This endpoint verifies if a license key is valid using Gumroad's API
// Implements license key reuse prevention using Vercel KV
export async function POST(request: NextRequest) {
  try {
    const { licenseKey } = await request.json();

    if (!licenseKey) {
      return NextResponse.json(
        { error: 'License key is required' },
        { status: 400 }
      );
    }

    console.log('[Gumroad Verify] Verifying license:', licenseKey);

    // 🔒 Security Check: Prevent license key reuse (within 24 hours)
    const isReused = await isLicenseKeyReused(licenseKey);
    if (isReused) {
      console.warn('[Gumroad Verify] License key reuse detected:', licenseKey);
      return NextResponse.json(
        {
          valid: false,
          message: 'This license key has already been used. Please contact support if you need assistance.',
        },
        { status: 403 }
      );
    }

    // Use server-only environment variables
    const { gumroadProductPermalink } = serverEnv;

    // Verify with Gumroad API
    const response = await fetch('https://api.gumroad.com/v2/licenses/verify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        product_permalink: gumroadProductPermalink,
        license_key: licenseKey,
      }),
    });

    const data = await response.json();

    console.log('[Gumroad Verify] Response:', data);

    if (data.success && data.purchase) {
      // 🔒 Store license key to prevent reuse
      await storeLicenseKeyRecord(licenseKey);

      // License is valid
      return NextResponse.json({
        valid: true,
        purchase: {
          email: data.purchase.email,
          productName: data.purchase.product_name,
          saleTimestamp: data.purchase.sale_timestamp,
        },
      });
    } else {
      // License is invalid
      return NextResponse.json({
        valid: false,
        message: data.message || 'Invalid license key',
      });
    }

  } catch (error) {
    console.error('[Gumroad Verify] Error:', error);
    return NextResponse.json(
      { error: 'Failed to verify license' },
      { status: 500 }
    );
  }
}
