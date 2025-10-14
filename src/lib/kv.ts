import { storageClient } from '@/lib/storage';

const LICENSE_KEY_PREFIX = 'license:';
const LICENSE_EXPIRY_SECONDS = 24 * 60 * 60; // 24 hours

export interface LicenseKeyRecord {
  licenseKey: string;
  firstUsedAt: string;
  usageCount: number;
  lastUsedAt: string;
}

export async function getLicenseKeyRecord(
  licenseKey: string
): Promise<LicenseKeyRecord | null> {
  try {
    const key = `${LICENSE_KEY_PREFIX}${licenseKey}`;
    return await storageClient.get<LicenseKeyRecord>(key);
  } catch (error) {
    console.error('[License] Error getting license key record:', error);
    return null;
  }
}

export async function storeLicenseKeyRecord(
  licenseKey: string
): Promise<LicenseKeyRecord> {
  const now = new Date().toISOString();
  const key = `${LICENSE_KEY_PREFIX}${licenseKey}`;

  try {
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

    await storageClient.set(key, record, { ex: LICENSE_EXPIRY_SECONDS });
    console.log(`[License] Stored license key record: ${licenseKey} (usage: ${record.usageCount})`);
    return record;
  } catch (error) {
    console.error('[License] Error storing license key record:', error);
    // Return a mock record in case of storage failure
    return {
      licenseKey,
      firstUsedAt: now,
      usageCount: 1,
      lastUsedAt: now,
    };
  }
}

export async function isLicenseKeyReused(licenseKey: string): Promise<boolean> {
  const record = await getLicenseKeyRecord(licenseKey);
  if (!record) {
    return false; // First time use
  }
  if (record.usageCount >= 1) {
    console.log(
      `[License] License key reuse detected: ${licenseKey} (used ${record.usageCount} times)`
    );
    return true;
  }
  return false;
}

export async function deleteLicenseKeyRecord(licenseKey: string): Promise<void> {
  try {
    const key = `${LICENSE_KEY_PREFIX}${licenseKey}`;
    await storageClient.del(key);
    console.log(`[License] Deleted license key record: ${licenseKey}`);
  } catch (error) {
    console.error('[License] Error deleting license key record:', error);
  }
}