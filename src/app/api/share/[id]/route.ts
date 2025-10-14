import { NextRequest, NextResponse } from 'next/server';
import { storageClient } from '@/lib/storage';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    const key = `share:${id}`;

    const data = await storageClient.get(key);

    if (!data) {
      return NextResponse.json({ error: 'Shared data not found or expired' }, { status: 404 });
    }

    console.log(`[Share API GET] Successfully retrieved share data for key: ${key}`);
    return NextResponse.json(data, { status: 200 });
    
  } catch (error) {
    console.error('[Share API GET] Failed to retrieve share data:', error);
    return NextResponse.json({ error: 'Failed to retrieve data' }, { status: 500 });
  }
}
