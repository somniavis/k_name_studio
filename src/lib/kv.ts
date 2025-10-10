/**
 * Vercel KV Utility for License Key Management
 *
 * Prevents license key reuse by storing used keys in Vercel KV
 * Keys expire after 24 hours to allow legitimate re-verification
 */

const LICENSE_KEY_PREFIX = 'license:';
const LICENSE_EXPIRY_SECONDS = 24 * 60 * 60; // 24 hours

// Lazy load KV only when needed and configured
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let kvInstance: any = null;
function getKV() {
  if (kvInstance === null && process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN) {
    try {
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      const { kv } = require('@vercel/kv');
      kvInstance = kv;
    } catch {
      console.warn('[KV] @vercel/kv not available, KV features disabled');
      kvInstance = undefined;
    }
  }
  return kvInstance;
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
  const kv = getKV();
  if (!kv) {
    // KV not configured, return null (allow the request)
    return null;
  }

  try {
    const key = `${LICENSE_KEY_PREFIX}${licenseKey}`;
    const record = await kv.get(key) as LicenseKeyRecord | null;
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
  const kv = getKV();
  const now = new Date().toISOString();

  if (!kv) {
    // KV not configured, return a mock record
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
    await kv.set(key, record, { ex: LICENSE_EXPIRY_SECONDS });

    console.log(`[KV] Stored license key record: ${licenseKey} (usage: ${record.usageCount})`);
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
  const kv = getKV();
  if (!kv) {
    console.warn('[KV] KV not configured, cannot delete license key record');
    return;
  }

  try {
    const key = `${LICENSE_KEY_PREFIX}${licenseKey}`;
    await kv.del(key);
    console.log(`[KV] Deleted license key record: ${licenseKey}`);
  } catch (error) {
    console.error('[KV] Error deleting license key record:', error);
  }
}
