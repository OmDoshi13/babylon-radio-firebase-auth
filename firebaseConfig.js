// firebaseConfig.js
import { initializeApp, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCefT9WwTkFW4VKbIw0yFQsOumqawRf7yQ",
    authDomain: "babylon-radio-nextjs.firebaseapp.com",
    projectId: "babylon-radio-nextjs",
    storageBucket: "babylon-radio-nextjs.firebasestorage.app",
    messagingSenderId: "438881504835",
    appId: "1:438881504835:web:f22b2efbd01b42d0ed4ef6",
    measurementId: "G-FSP4DFL4XM"
};

// Initialize once (SSR/hot-reload safe) using try/catch
let app;
try {
    app = getApp();
} catch {
    app = initializeApp(firebaseConfig);
}

export const auth = getAuth(app);
export { app };