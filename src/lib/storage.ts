// Shared storage module for development
// In production, this will be replaced by Vercel KV

interface StoredData {
  data: unknown;
  expiry: number;
}

// Use global variable to persist across serverless function calls
declare global {
  var devStorageInstance: Map<string, StoredData> | undefined;
}

class DevStorage {
  private storage: Map<string, StoredData>;

  constructor() {
    // Use global storage to persist across function calls
    if (!global.devStorageInstance) {
      global.devStorageInstance = new Map<string, StoredData>();
      console.log('[DevStorage] Creating new global storage instance');
    }
    this.storage = global.devStorageInstance;
    this.cleanup();
  }

  set(key: string, data: unknown, ttlSeconds: number): void {
    const expiryTime = Date.now() + (ttlSeconds * 1000);
    this.storage.set(key, { data, expiry: expiryTime });
    console.log(`[DevStorage] Stored data for key: ${key}, expires at: ${new Date(expiryTime)}, current storage size: ${this.storage.size}`);
    this.cleanup();
  }

  get(key: string): unknown | null {
    console.log(`[DevStorage] Retrieving key: ${key}, current storage size: ${this.storage.size}, keys: ${Array.from(this.storage.keys()).join(', ')}`);
    const stored = this.storage.get(key);
    if (!stored) {
      console.log(`[DevStorage] Key ${key} not found in storage`);
      return null;
    }
    if (stored.expiry < Date.now()) {
      console.log(`[DevStorage] Key ${key} expired at ${new Date(stored.expiry)}`);
      this.storage.delete(key);
      return null;
    }
    console.log(`[DevStorage] Successfully retrieved data for key: ${key}`);
    return stored.data;
  }

  private cleanup(): void {
    for (const [key, value] of this.storage.entries()) {
      if (value.expiry < Date.now()) {
        this.storage.delete(key);
        console.log(`[DevStorage] Cleaned up expired key: ${key}`);
      }
    }
  }
}

// Create a singleton instance
export const devStorage = new DevStorage();