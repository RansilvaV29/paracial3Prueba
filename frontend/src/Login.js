// src/Login.js
import React from 'react';
import { auth } from './firebase';
import firebase from 'firebase/app';

const Login = () => {
    const handleLogin = async () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        try {
            const result = await auth.signInWithPopup(provider);
            // Maneja el resultado del login, por ejemplo, accede al usuario
            console.log(result.user);
        } catch (error) {
            console.error('Error durante el login:', error);
        }
    };

    return (
        <button onClick={handleLogin}>Login with Google</button>
    );
};

export default Login;
