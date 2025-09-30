import { kv } from '@vercel/kv';
import { NextResponse } from 'next/server';
import { nanoid } from 'nanoid';
import { devStorage } from '@/lib/storage';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Basic validation
    if (!data || !data.userData || !data.freeNames) {
      return NextResponse.json({ error: 'Invalid data provided' }, { status: 400 });
    }

    const id = nanoid(10); // Generate a 10-character unique ID
    const key = `share:${id}`;

    // 15 days in seconds: 15 * 24 * 60 * 60 = 1,296,000
    const ttlInSeconds = 1296000;

    // Check if KV is available (production)
    const hasKVConfig = process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN;

    if (hasKVConfig) {
      // Use Vercel KV in production
      await kv.set(key, JSON.stringify(data), { ex: ttlInSeconds });
    } else {
      // Use in-memory storage for development
      console.log('Using development storage (in-memory)');
      devStorage.set(key, data, ttlInSeconds);
    }

    return NextResponse.json({ id: id }, { status: 200 });
  } catch (error) {
    console.error('Failed to save share data:', error);
    return NextResponse.json({ error: 'Failed to save data' }, { status: 500 });
  }
}
