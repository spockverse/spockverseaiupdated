import { createClient } from '@base44/sdk';
// import { getAccessToken } from '@base44/sdk/utils/auth-utils';

// Create a client with authentication required
export const base44 = createClient({
  appId: "692cb4f2e2a5a0701d4d867f", 
  requiresAuth: true // Ensure authentication is required for all operations
});
