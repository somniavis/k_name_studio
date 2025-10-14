/**
 * Vercel KV Utility for License Key Management
 *
 * Prevents license key reuse by storing used keys in Vercel KV
 * Keys expire after 24 hours to allow legitimate re-verification
 */

import { Redis } from '@upstash/redis';

const LICENSE_KEY_PREFIX = 'license:';
const LICENSE_EXPIRY_SECONDS = 24 * 60 * 60; // 24 hours

// Lazy load Redis only when needed and configured
let redis: Redis | null = null;
function getRedisClient() {
  if (redis === null && process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN) {
    try {
      redis = Redis.fromEnv();
    } catch (error) {
      console.error('[Redis] Failed to initialize Redis client:', error);
    }
  }
  return redis;
}

export interface LicenseKeyRecord {
  licenseKey: string;
  firstUsedAt: string;
  usageCount: number;
  lastUsedAt: string;
}

/**
 * Check if a license key has been used before
 * @param licenseKey - The license key to check
 * @returns LicenseKeyRecord if exists, null otherwise
 */
export async function getLicenseKeyRecord(
  licenseKey: string
): Promise<LicenseKeyRecord | null> {
  const redis = getRedisClient();
  if (!redis) {
    // Redis not configured, return null (allow the request)
    return null;
  }

  try {
    const key = `${LICENSE_KEY_PREFIX}${licenseKey}`;
    const record = await redis.get<LicenseKeyRecord>(key);
    return record;
  } catch (error) {
    console.error('[KV] Error getting license key record:', error);
    // If KV is not configured, return null (allow the request)
    return null;
  }
}

/**
 * Store or update a license key record
 * @param licenseKey - The license key to store
 * @returns Updated LicenseKeyRecord
 */
export async function storeLicenseKeyRecord(
  licenseKey: string
): Promise<LicenseKeyRecord> {
  const redis = getRedisClient();
  const now = new Date().toISOString();

  if (!redis) {
    // Redis not configured, return a mock record
    return {
      licenseKey,
      firstUsedAt: now,
      usageCount: 1,
      lastUsedAt: now,
    };
  }

  try {
    const key = `${LICENSE_KEY_PREFIX}${licenseKey}`;

    // Get existing record if any
    const existingRecord = await getLicenseKeyRecord(licenseKey);

    const record: LicenseKeyRecord = existingRecord
      ? {
          ...existingRecord,
          usageCount: existingRecord.usageCount + 1,
          lastUsedAt: now,
        }
      : {
          licenseKey,
          firstUsedAt: now,
          usageCount: 1,
          lastUsedAt: now,
        };

    // Store with expiration
    await redis.set(key, record, { ex: LICENSE_EXPIRY_SECONDS });

    console.log(`[Redis] Stored license key record: ${licenseKey} (usage: ${record.usageCount})`);
    return record;
  } catch (error) {
    console.error('[KV] Error storing license key record:', error);
    // If KV is not configured, return a mock record
    return {
      licenseKey,
      firstUsedAt: now,
      usageCount: 1,
      lastUsedAt: now,
    };
  }
}

/**
 * Check if a license key is being reused (within 24 hours)
 * @param licenseKey - The license key to check
 * @returns true if reused, false otherwise
 */
export async function isLicenseKeyReused(licenseKey: string): Promise<boolean> {
  const record = await getLicenseKeyRecord(licenseKey);

  if (!record) {
    return false; // First time use
  }

  // If used more than once, it's a reuse
  if (record.usageCount >= 1) {
    console.log(
      `[KV] License key reuse detected: ${licenseKey} (used ${record.usageCount} times)`
    );
    return true;
  }

  return false;
}

/**
 * Delete a license key record (for testing purposes)
 * @param licenseKey - The license key to delete
 */
export async function deleteLicenseKeyRecord(licenseKey: string): Promise<void> {
  const redis = getRedisClient();
  if (!redis) {
    console.warn('[Redis] Redis not configured, cannot delete license key record');
    return;
  }

  try {
    const key = `${LICENSE_KEY_PREFIX}${licenseKey}`;
    await redis.del(key);
    console.log(`[Redis] Deleted license key record: ${licenseKey}`);
  } catch (error) {
    console.error('[Redis] Error deleting license key record:', error);
  }
}
