import { Redis } from '@upstash/redis';
import { NextResponse } from 'next/server';
import { nanoid } from 'nanoid';
import { devStorage } from '@/lib/storage';

const redis = Redis.fromEnv();

export async function POST(request: Request) {
  try {
    const data = await request.json();
    console.log('[Share API POST] Received data for sharing');

    // Enhanced validation for premium share data
    if (!data || !data.userData) {
      return NextResponse.json({ error: 'Invalid data provided' }, { status: 400 });
    }

    // Ensure we have either free names or premium names
    if (!data.freeNames && !data.premiumNames) {
      return NextResponse.json({ error: 'No names provided' }, { status: 400 });
    }

    const id = nanoid(10); // Generate a 10-character unique ID
    const key = `share:${id}`;

    // 15 days in seconds: 15 * 24 * 60 * 60 = 1,296,000
    const ttlInSeconds = 1296000;

    // Check if Redis is available (production)
    const hasRedisConfig = process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN;

    console.log(`[Share API POST] Environment check - hasRedisConfig: ${hasRedisConfig}`);
    console.log(`[Share API POST] NODE_ENV: ${process.env.NODE_ENV}`);
    console.log(`[Share API POST] Generated ID: ${id}, Key: ${key}`);

    if (hasRedisConfig) {
      // Use Upstash Redis in production
      console.log(`[Share API POST] Saving to Redis with key: ${key}`);
      await redis.set(key, JSON.stringify(data), { ex: ttlInSeconds });
      console.log(`[Share API POST] Successfully saved to Redis`);
    } else {
      // Use development storage
      console.log(`[Share API POST] Saving to development storage with key: ${key}`);
      devStorage.set(key, data, ttlInSeconds);
      console.log(`[Share API POST] Successfully saved to DevStorage`);
    }

    return NextResponse.json({ id: id }, { status: 200 });
  } catch (error) {
    console.error('[Share API POST] Failed to save share data:', error);
    return NextResponse.json({ error: 'Failed to save data' }, { status: 500 });
  }
}
