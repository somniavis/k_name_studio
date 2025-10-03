import { kv } from '@vercel/kv';
import { NextResponse } from 'next/server';
import { devStorage } from '@/lib/storage';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    console.log(`[Share API GET] Retrieving data for ID: ${id}`);

    if (!id) {
      return NextResponse.json({ error: 'ID is required' }, { status: 400 });
    }

    const key = `share:${id}`;

    // Check if KV is available (production)
    const hasKVConfig = process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN;

    console.log(`[Share API GET] Environment check - hasKVConfig: ${hasKVConfig}`);
    console.log(`[Share API GET] NODE_ENV: ${process.env.NODE_ENV}`);

    if (hasKVConfig) {
      // Use Vercel KV in production
      console.log(`[Share API GET] Using Vercel KV for key: ${key}`);
      const data = await kv.get(key);
      console.log(`[Share API GET] KV result:`, data ? 'Found data' : 'No data');

      if (!data) {
        return NextResponse.json({ error: 'Data not found or expired' }, { status: 404 });
      }
      // The data is stored as a JSON string, so we parse it before sending.
      return NextResponse.json(JSON.parse(data as string), { status: 200 });
    } else {
      // Use development storage
      console.log(`[Share API GET] Using development storage for key: ${key}`);
      const data = devStorage.get(key);
      console.log(`[Share API GET] DevStorage result:`, data ? 'Found data' : 'No data');

      if (!data) {
        console.log(`[Share API GET] No data found for key: ${key}`);
        return NextResponse.json({ error: 'Data not found or expired' }, { status: 404 });
      }

      console.log(`[Share API GET] Successfully retrieved data for key: ${key}`);
      return NextResponse.json(data, { status: 200 });
    }
  } catch (error) {
    console.error('[Share API GET] Failed to retrieve share data:', error);
    return NextResponse.json({ error: 'Failed to retrieve data' }, { status: 500 });
  }
}
