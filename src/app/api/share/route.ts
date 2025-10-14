import { NextResponse } from 'next/server';
import { nanoid } from 'nanoid';
import { storageClient } from '@/lib/storage';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    console.log('[Share API POST] Received data for sharing');

    if (!data || !data.userData || (!data.freeNames && !data.premiumNames)) {
      return NextResponse.json({ error: 'Invalid data provided' }, { status: 400 });
    }

    const id = nanoid(10);
    const key = `share:${id}`;
    const ttlInSeconds = 1296000; // 15 days

    await storageClient.set(key, data, { ex: ttlInSeconds });
    console.log(`[Share API POST] Successfully saved share data with key: ${key}`);

    return NextResponse.json({ id: id }, { status: 200 });
  } catch (error) {
    console.error('[Share API POST] Failed to save share data:', error);
    return NextResponse.json({ error: 'Failed to save data' }, { status: 500 });
  }
}