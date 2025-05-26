// Import the functions you need from the SDKs you need
import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import {
  getReactNativePersistence,
  initializeAuth,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjPaqTqgoiBQ1q0K3VLBZ39LNCd5Deb2g",
  authDomain: "calctrack-29a90.firebaseapp.com",
  projectId: "calctrack-29a90",
  storageBucket: "calctrack-29a90.firebasestorage.app",
  messagingSenderId: "849130547059",
  appId: "1:849130547059:web:882ec0c1aeae4d8050c706",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
