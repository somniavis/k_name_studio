/**
 * API Client with JWT Authentication
 *
 * Handles token management and authenticated API requests
 */

const TOKEN_STORAGE_KEY = 'k-name-studio-token';
const TOKEN_EXPIRY_KEY = 'k-name-studio-token-expiry';

interface TokenResponse {
  token: string;
  expiresIn: string;
  tokenType: string;
}

/**
 * Get stored token from localStorage
 */
function getStoredToken(): string | null {
  if (typeof window === 'undefined') return null;

  const token = localStorage.getItem(TOKEN_STORAGE_KEY);
  const expiry = localStorage.getItem(TOKEN_EXPIRY_KEY);

  if (!token || !expiry) {
    return null;
  }

  // Check if token is expired
  const expiryTime = parseInt(expiry, 10);
  if (Date.now() > expiryTime) {
    // Token expired, clear it
    localStorage.removeItem(TOKEN_STORAGE_KEY);
    localStorage.removeItem(TOKEN_EXPIRY_KEY);
    return null;
  }

  return token;
}

/**
 * Store token in localStorage
 */
function storeToken(token: string): void {
  if (typeof window === 'undefined') return;

  // Set token to expire in 50 minutes (to be safe, since actual expiry is 1h)
  const expiryTime = Date.now() + 50 * 60 * 1000; // 50 minutes

  localStorage.setItem(TOKEN_STORAGE_KEY, token);
  localStorage.setItem(TOKEN_EXPIRY_KEY, expiryTime.toString());
}

/**
 * Get or fetch a fresh token
 */
async function getToken(): Promise<string> {
  // Try to get stored token first
  const storedToken = getStoredToken();
  if (storedToken) {
    return storedToken;
  }

  // Fetch a new token
  try {
    const response = await fetch('/api/auth/token', {
      method: 'POST',
    });

    if (!response.ok) {
      throw new Error('Failed to get authentication token');
    }

    const data: TokenResponse = await response.json();
    storeToken(data.token);

    return data.token;
  } catch (error) {
    console.error('[API Client] Error getting token:', error);
    throw error;
  }
}

/**
 * Make an authenticated API request
 */
export async function authenticatedFetch(
  url: string,
  options: RequestInit = {}
): Promise<Response> {
  const token = await getToken();

  const headers = new Headers(options.headers);
  headers.set('Authorization', `Bearer ${token}`);
  headers.set('Content-Type', 'application/json');

  return fetch(url, {
    ...options,
    headers,
  });
}

interface PurchaseData {
  email: string;
  productName: string;
  saleTimestamp: string;
}

/**
 * Verify Gumroad license with authentication
 */
export async function verifyGumroadLicense(
  licenseKey: string
): Promise<{ valid: boolean; purchase?: PurchaseData; message?: string }> {
  try {
    const response = await authenticatedFetch('/api/gumroad/verify', {
      method: 'POST',
      body: JSON.stringify({ licenseKey }),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('[API Client] Error verifying license:', error);
    throw error;
  }
}
