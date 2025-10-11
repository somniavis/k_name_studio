import { NextRequest, NextResponse } from 'next/server';

/**
 * Gumroad Payment Return Handler
 *
 * This endpoint handles the redirect after a successful Gumroad purchase.
 * It redirects the user back to the results page with the license key.
 *
 * Expected URL parameters:
 * - license_key: The license key from Gumroad
 * - sale_id: The sale ID from Gumroad (optional)
 */
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const licenseKey = searchParams.get('license_key');
    const saleId = searchParams.get('sale_id');

    console.log('[Gumroad Return] Payment return callback:', {
      licenseKey,
      saleId,
    });

    if (!licenseKey) {
      console.error('[Gumroad Return] No license key provided');
      // Redirect to home page if no license key
      return NextResponse.redirect(new URL('/?error=no_license', request.url));
    }

    // Redirect to results page with license key as URL parameter
    const redirectUrl = new URL('/', request.url);
    redirectUrl.searchParams.set('license_key', licenseKey);
    if (saleId) {
      redirectUrl.searchParams.set('sale_id', saleId);
    }

    console.log('[Gumroad Return] Redirecting to:', redirectUrl.toString());

    return NextResponse.redirect(redirectUrl);

  } catch (error) {
    console.error('[Gumroad Return] Error:', error);
    return NextResponse.redirect(new URL('/?error=payment_error', request.url));
  }
}
