import { kv } from '@vercel/kv';
import { NextResponse } from 'next/server';
import { devStorage } from '@/lib/storage';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    if (!id) {
      return NextResponse.json({ error: 'ID is required' }, { status: 400 });
    }

    const key = `share:${id}`;

    // Check if KV is available (production)
    const hasKVConfig = process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN;

    if (hasKVConfig) {
      // Use Vercel KV in production
      const data = await kv.get(key);
      if (!data) {
        return NextResponse.json({ error: 'Data not found or expired' }, { status: 404 });
      }
      // The data is stored as a JSON string, so we parse it before sending.
      return NextResponse.json(JSON.parse(data as string), { status: 200 });
    } else {
      // Use in-memory storage for development
      console.log('Using development storage (in-memory) for retrieval');
      const data = devStorage.get(key);

      if (!data) {
        return NextResponse.json({ error: 'Data not found or expired' }, { status: 404 });
      }

      return NextResponse.json(data, { status: 200 });
    }
  } catch (error) {
    console.error('Failed to retrieve share data:', error);
    return NextResponse.json({ error: 'Failed to retrieve data' }, { status: 500 });
  }
}
