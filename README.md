# Babylon Radio Firebase Auth App

## Setup
1. Clone repo and run `npm install`
2. Create `.env.local` file with:
```
NEXT_PUBLIC_FIREBASE_API_KEY=YOUR_API_KEY
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=YOUR_PROJECT.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=YOUR_PROJECT_ID
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=YOUR_PROJECT.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=YOUR_SENDER_ID
NEXT_PUBLIC_FIREBASE_APP_ID=YOUR_APP_ID
```
3. `npm run dev` to start app.

## Features
- Login/Register with Firebase Authentication
- Stores user's full name for greeting
- Protected `/home` route
- Logout button to sign out and return to login

## Future improvements
- UI styling with Tailwind or MUI
- Persistent session handling on server
