// src/components/GoogleLoginComponent.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, provider, signInWithPopup } from '../firebase'; // Asegúrate de que la ruta sea correcta



const GoogleLoginComponent = () => {
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            console.log('Login successful:', result);
            navigate('/'); // Redirige a la página principal después del inicio de sesión
        } catch (error) {
            console.error('Login error:', error);
        }
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Login with Google</h2>
            <button onClick={handleLogin} style={styles.button}>
                Login with Google
            </button>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center',
    },
    heading: {
        marginBottom: '20px',
    },
    button: {
        padding: '10px 20px',
        fontSize: '16px',
        cursor: 'pointer',
        border: 'none',
        borderRadius: '5px',
        backgroundColor: '#4285F4',
        color: '#fff',
    },
};

export default GoogleLoginComponent;
