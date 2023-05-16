import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API,
  authDomain: 'copycat-152ef.firebaseapp.com',
  projectId: 'copycat-152ef',
  storageBucket: 'copycat-152ef.appspot.com',
  messagingSenderId: '730865558998',
  appId: import.meta.env.VITE_FIREBASE_APPID,
  measurementId: 'G-0GYPVLEG2F',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
