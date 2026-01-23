import axios from 'axios';
import { Platform } from 'react-native';

// Automatically detect backend URL
// Expo handles the QR code connection automatically with --lan mode
// This function determines the correct backend API URL based on the runtime environment
const getBackendUrl = (): string => {
  // If explicitly set via environment variable, use that (highest priority)
  if (process.env.EXPO_PUBLIC_API_URL) {
    return process.env.EXPO_PUBLIC_API_URL;
  }

  // For emulators/simulators
  if (__DEV__) {
    // Android emulator: use special IP that maps to host's localhost
    if (Platform.OS === 'android') {
      return 'http://10.0.2.2:8000/api';
    }
    // iOS simulator: can use localhost directly
    if (Platform.OS === 'ios') {
      return 'http://localhost:8000/api';
    }
  }

  // For physical devices: 
  // When you scan the QR code, Expo automatically uses your machine's local IP
  // The backend should be accessible at the same IP address on port 8000
  // If this doesn't work automatically, set EXPO_PUBLIC_API_URL to your machine's IP
  // Example: EXPO_PUBLIC_API_URL=http://192.168.1.100:8000/api
  // You can find your IP by running: ifconfig (Mac/Linux) or ipconfig (Windows)
  
  // Default: try to use the same hostname pattern Expo would use
  // In most cases with --lan mode, if Expo can connect, backend on same IP should work
  // But we default to localhost as fallback
  return 'http://localhost:8000/api';
};

const API_URL = getBackendUrl();

export const api = axios.create({
  baseURL: API_URL,
  headers: {
     'Content-Type': 'application/json',
  },
});

// Test connection
export const testBackend = async () => {
  try {
    const response = await api.get('/');
    return response.data;
  } catch (error) {
    console.error('Backend connection failed:', error);
    return null;
  }
};