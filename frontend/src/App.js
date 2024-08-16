// src/App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import UserList from './components/UserList';
import CreateUser from './components/CreateUser';
import EditUser from './components/EditUser';
import GoogleLoginComponent from './components/GoogleLogin';

const clientId = 'YOUR_GOOGLE_CLIENT_ID'; // Asegúrate de reemplazar esto con tu ID de cliente real

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false); // Establece loading en false después de que se verifique el estado del usuario
    });

    return () => unsubscribe();
  }, [auth]);

  if (loading) {
    return <div>Loading...</div>; // Muestra una pantalla de carga mientras se verifica la autenticación
  }

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <Router>
        <Routes>
          <Route path="/" element={user ? <UserList /> : <Navigate to="/login" />} />
          <Route path="/create" element={user ? <CreateUser /> : <Navigate to="/login" />} />
          <Route path="/edit/:id" element={user ? <EditUser /> : <Navigate to="/login" />} />
          <Route path="/login" element={!user ? <GoogleLoginComponent /> : <Navigate to="/" />} />
        </Routes>
      </Router>
    </GoogleOAuthProvider>
  );
};

export default App;
