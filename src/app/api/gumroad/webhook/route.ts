import { NextRequest, NextResponse } from 'next/server';
import { serverEnv } from '@/lib/env';

// Gumroad webhook handler
// This endpoint is called by Gumroad when a purchase is completed
export async function POST(request: NextRequest) {
  try {
    const body = await request.formData();

    // Extract Gumroad data
    const saleId = body.get('sale_id') as string;
    const email = body.get('email') as string;
    const productPermalink = body.get('product_permalink') as string;
    const licenseKey = body.get('license_key') as string;
    const purchaserName = body.get('purchaser_name') as string;
    const price = body.get('price') as string;
    const currency = body.get('currency') as string;

    console.log('[Gumroad Webhook] Purchase received:', {
      saleId,
      email,
      productPermalink,
      licenseKey,
      purchaserName,
      price,
      currency,
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

    // Store purchase data (you can add database logic here)
    // For now, we'll just log it and return success

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
