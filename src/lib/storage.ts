import { Redis } from '@upstash/redis';

// This interface defines the common methods our storage client should have.
interface StorageClient {
  get<T>(key: string): Promise<T | null>;
  set(key: string, value: any, options?: { ex: number }): Promise<any>;
  del(key: string): Promise<any>;
}

let storageClient: StorageClient;

// Check if the Upstash Redis environment variables are set.
// These are automatically set when connecting an Upstash database on Vercel.
if (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN) {
  console.log('[Storage] Initializing Upstash Redis client for production.');
  const redis = Redis.fromEnv();
  
  storageClient = {
    get: async <T>(key: string): Promise<T | null> => {
      return redis.get<T>(key);
    },
    set: async (key: string, value: any, options?: { ex: number }): Promise<any> => {
      // Ensure value is a string for Redis.
      const stringValue = typeof value === 'string' ? value : JSON.stringify(value);
      return redis.set(key, stringValue, options);
    },
    del: async (key: string): Promise<any> => {
      return redis.del(key);
    },
  };
} else {
  console.log('[Storage] Using in-memory Map for development.');
  // Fallback to a simple in-memory map for local development if Redis is not configured.
  const devStorage = new Map<string, string>();

  storageClient = {
    get: async <T>(key: string): Promise<T | null> => {
      const value = devStorage.get(key);
      if (value) {
        // In-memory storage doesn't have TTL, but we parse just in case.
        try {
          return JSON.parse(value) as T;
        } catch {
          return value as T; // Return as is if not JSON
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
