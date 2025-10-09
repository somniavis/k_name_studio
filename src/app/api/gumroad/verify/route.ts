import { NextRequest, NextResponse } from 'next/server';

// Verify Gumroad license key
// This endpoint verifies if a license key is valid using Gumroad's API
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

    // Call Gumroad License API
    const gumroadLicenseKey = process.env.GUMROAD_LICENSE_KEY;
    const productPermalink = process.env.GUMROAD_PRODUCT_PERMALINK;

    if (!gumroadLicenseKey || !productPermalink) {
      console.error('[Gumroad Verify] Missing environment variables');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Verify with Gumroad API
    const response = await fetch('https://api.gumroad.com/v2/licenses/verify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        product_permalink: productPermalink,
        license_key: licenseKey,
      }),
    });

    const data = await response.json();

    console.log('[Gumroad Verify] Response:', data);

    if (data.success && data.purchase) {
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
