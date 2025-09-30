// Shared storage module for development
// In production, this will be replaced by Vercel KV

interface StoredData {
  data: unknown;
  expiry: number;
}

class DevStorage {
  private storage = new Map<string, StoredData>();

  set(key: string, data: unknown, ttlSeconds: number): void {
    const expiryTime = Date.now() + (ttlSeconds * 1000);
    this.storage.set(key, { data, expiry: expiryTime });
    this.cleanup();
  }

  get(key: string): unknown | null {
    const stored = this.storage.get(key);
    if (!stored || stored.expiry < Date.now()) {
      if (stored) {
        this.storage.delete(key);
      }
      return null;
    }
    return stored.data;
  }

  private cleanup(): void {
    for (const [key, value] of this.storage.entries()) {
      if (value.expiry < Date.now()) {
        this.storage.delete(key);
      }
    }
  }
}

// Create a singleton instance
export const devStorage = new DevStorage();