// Shared storage module for development and production fallback
// In production with KV, this will be replaced by Vercel KV
import fs from 'fs';
import path from 'path';

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
  private storageDir: string;

  constructor() {
    // Use /tmp directory for Vercel serverless functions
    this.storageDir = process.env.NODE_ENV === 'production'
      ? '/tmp/k-name-storage'
      : path.join(process.cwd(), '.next/storage');

    // Ensure storage directory exists
    this.ensureStorageDir();

    // Use global storage to persist across function calls
    if (!global.devStorageInstance) {
      global.devStorageInstance = new Map<string, StoredData>();
      console.log('[DevStorage] Creating new global storage instance');
      this.loadFromDisk();
    }
    this.storage = global.devStorageInstance;
    this.cleanup();
  }

  private ensureStorageDir(): void {
    try {
      if (!fs.existsSync(this.storageDir)) {
        fs.mkdirSync(this.storageDir, { recursive: true });
      }
    } catch (error) {
      console.log('[DevStorage] Failed to create storage directory:', error);
    }
  }

  private getFilePath(key: string): string {
    const safeKey = key.replace(/[^a-zA-Z0-9_-]/g, '_');
    return path.join(this.storageDir, `${safeKey}.json`);
  }

  private loadFromDisk(): void {
    try {
      if (!fs.existsSync(this.storageDir)) return;

      const files = fs.readdirSync(this.storageDir);
      for (const file of files) {
        if (file.endsWith('.json')) {
          try {
            const filePath = path.join(this.storageDir, file);
            const content = fs.readFileSync(filePath, 'utf8');
            const storedData: StoredData = JSON.parse(content);
            const key = file.replace('.json', '').replace(/_/g, ':');
            this.storage.set(key, storedData);
          } catch (error) {
            console.log(`[DevStorage] Failed to load ${file}:`, error);
          }
        }
      }
      console.log(`[DevStorage] Loaded ${this.storage.size} items from disk`);
    } catch (error) {
      console.log('[DevStorage] Failed to load from disk:', error);
    }
  }

  private saveToDisk(key: string, data: StoredData): void {
    try {
      const filePath = this.getFilePath(key);
      fs.writeFileSync(filePath, JSON.stringify(data));
    } catch (error) {
      console.log(`[DevStorage] Failed to save ${key} to disk:`, error);
    }
  }

  private deleteFromDisk(key: string): void {
    try {
      const filePath = this.getFilePath(key);
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    } catch (error) {
      console.log(`[DevStorage] Failed to delete ${key} from disk:`, error);
    }
  }

  set(key: string, data: unknown, ttlSeconds: number): void {
    const expiryTime = Date.now() + (ttlSeconds * 1000);
    const storedData = { data, expiry: expiryTime };

    // Save to memory
    this.storage.set(key, storedData);

    // Save to disk for persistence across serverless functions
    this.saveToDisk(key, storedData);

    console.log(`[DevStorage] Stored data for key: ${key}, expires at: ${new Date(expiryTime)}, current storage size: ${this.storage.size}`);
    this.cleanup();
  }

  get(key: string): unknown | null {
    console.log(`[DevStorage] Retrieving key: ${key}, current storage size: ${this.storage.size}, keys: ${Array.from(this.storage.keys()).join(', ')}`);

    // Try memory first
    let stored = this.storage.get(key);

    // If not in memory, try loading from disk
    if (!stored) {
      try {
        const filePath = this.getFilePath(key);
        if (fs.existsSync(filePath)) {
          const content = fs.readFileSync(filePath, 'utf8');
          stored = JSON.parse(content);
          if (stored) {
            this.storage.set(key, stored);
            console.log(`[DevStorage] Loaded key ${key} from disk`);
          }
        }
      } catch (error) {
        console.log(`[DevStorage] Failed to load ${key} from disk:`, error);
      }
    }

    if (!stored) {
      console.log(`[DevStorage] Key ${key} not found in storage or disk`);
      return null;
    }

    if (stored.expiry < Date.now()) {
      console.log(`[DevStorage] Key ${key} expired at ${new Date(stored.expiry)}`);
      this.storage.delete(key);
      this.deleteFromDisk(key);
      return null;
    }

    console.log(`[DevStorage] Successfully retrieved data for key: ${key}`);
    return stored.data;
  }

  private cleanup(): void {
    for (const [key, value] of this.storage.entries()) {
      if (value.expiry < Date.now()) {
        this.storage.delete(key);
        this.deleteFromDisk(key);
        console.log(`[DevStorage] Cleaned up expired key: ${key}`);
      }
    }
  }
}

// Create a singleton instance
export const devStorage = new DevStorage();