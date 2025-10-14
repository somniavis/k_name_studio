import { Redis } from '@upstash/redis';
import { NextRequest, NextResponse } from 'next/server';
import { devStorage } from '@/lib/storage';

const redis = Redis.fromEnv();

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    const key = `share:${id}`;

    // Check if Redis is available (production)
    const hasRedisConfig = process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN;

    let data;
    if (hasRedisConfig) {
      // Use Upstash Redis in production
      console.log(`[Share API GET] Fetching from Redis with key: ${key}`);
      data = await redis.get(key);
    } else {
      // Use development storage
      console.log(`[Share API GET] Fetching from development storage with key: ${key}`);
      data = devStorage.get(key);
    }

    if (!data) {
      return NextResponse.json({ error: 'Shared data not found or expired' }, { status: 404 });
    }

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error('[Share API GET] Failed to retrieve share data:', error);
    return NextResponse.json({ error: 'Failed to retrieve data' }, { status: 500 });
  }
}
