# Babylon Radio – Firebase Auth App

A simple **Next.js** application using **Firebase Authentication** to handle user login and registration for the Babylon Radio assessment.

---

## Setup

1. **Clone the repository**  
   ```bash
   git clone https://github.com/<your-username>/babylon-radio-firebase-auth.git
   cd babylon-radio-firebase-auth

## Features
1.Login & Register with Firebase Email/Password

2.Stores full name for personalized greeting

3.Protected /home route – accessible only to logged-in users

4.Logout button to end the session and return to login

## Future Improvements
1.Add Tailwind CSS or Material UI for improved styling

2.Implement password reset functionality

3.Persist sessions with server-side route protection


## Tech Stack
1.Next.js – React framework

2.Firebase Authentication

3.React Hooks for state and effect handling


## Approach
1.Check if the email exists using fetchSignInMethodsForEmail.

2.If it exists → sign in with provided credentials.

3.If it doesn’t exist → create a new account and store the user's displayName.

4.Protect /home using Firebase's onAuthStateChanged to redirect unauthenticated users.



## Challenges Faced
1.Firebase SSR issues: Needed to ensure Firebase was initialized only on the client to avoid window is not defined errors.

2.Auth error handling: Had to distinguish between user-not-found, invalid-credential, and wrong-password for correct flow.

3.Hot reload in Next.js: Prevented multiple Firebase instances by using a singleton initialization pattern.



