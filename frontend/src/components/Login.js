// src/components/Login.js
import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { getAuth, signInWithCredential, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../firebase-config';

const Login = () => {
  const handleSuccess = async (response) => {
    const credential = GoogleAuthProvider.credential(response.credential);
    try {
      await signInWithCredential(auth, credential);
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div>
      <h2>Login with Google</h2>
      <GoogleLogin
        onSuccess={handleSuccess}
        onError={(error) => console.error('Login error:', error)}
      />
    </div>
  );
};

export default Login;
