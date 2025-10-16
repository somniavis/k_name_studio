import { Redis } from '@upstash/redis';

// This interface defines the common methods our storage client should have.
interface StorageClient {
  get<T>(key: string): Promise<T | null>;
  set(key: string, value: any, options?: { ex: number }): Promise<any>;
  del(key: string): Promise<any>;
}

// Use globalThis to persist the storage across hot reloads in development
declare global {
  var devStorage: Map<string, string> | undefined;
  var storageInitialized: boolean | undefined;
}

let storageClient: StorageClient;

// Check if the Upstash Redis environment variables are set.
// These should be manually set in Vercel dashboard for production.
if (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN) {
  if (!globalThis.storageInitialized) {
    console.log('[Storage] Initializing Upstash Redis client from environment variables.');
    globalThis.storageInitialized = true;
  }
  const redis = Redis.fromEnv();

  storageClient = {
    get: async <T>(key: string): Promise<T | null> => {
      const value = await redis.get<string>(key);
      if (value) {
        try {
          return JSON.parse(value) as T;
        } catch {
          return value as T;
        }
      }
      return null;
    },
    set: async (key: string, value: any, options?: { ex: number }): Promise<any> => {
      const stringValue = typeof value === 'string' ? value : JSON.stringify(value);
      return redis.set(key, stringValue, options);
    },
    del: async (key: string): Promise<any> => {
      return redis.del(key);
    },
  };
} else {
  // Fallback to a simple in-memory map for local development if Redis is not configured.
  // Use globalThis to persist across hot reloads
  if (!globalThis.devStorage) {
    console.log('[Storage] Initializing in-memory Map for development.');
    globalThis.devStorage = new Map<string, string>();
  }
  const devStorage = globalThis.devStorage;

  storageClient = {
    get: async <T>(key: string): Promise<T | null> => {
      const value = devStorage.get(key);
      if (value) {
        try {
          return JSON.parse(value) as T;
        } catch {
          return value as T;
        }
      }
      return null;
    },
    set: async (key: string, value: any, options?: { ex: number }): Promise<any> => {
      const stringValue = typeof value === 'string' ? value : JSON.stringify(value);
      devStorage.set(key, stringValue);
      return 'OK';
    },
    del: async (key: string): Promise<any> => {
      devStorage.delete(key);
      return 1;
    },
  };
}

export { storageClient };
