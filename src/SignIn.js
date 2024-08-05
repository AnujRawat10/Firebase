// SignIn.js
import React from 'react';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth, googleProvider } from './firebase';
import './SignIn.css';

const SignIn = () => {
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      console.log(user);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <button className="signin-button" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
    </div>
  );
};

export default SignIn;
