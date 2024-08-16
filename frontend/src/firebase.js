// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'; // Importa módulos necesarios

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCYauws8OO2BoiJV_EeX8XofEkwjTuPvOo",
  authDomain: "prueba-d2d03.firebaseapp.com",
  projectId: "prueba-d2d03",
  storageBucket: "prueba-d2d03.appspot.com",
  messagingSenderId: "367296465427",
  appId: "1:367296465427:web:46ffaea50217c90bd28de6",
  measurementId: "G-X8V1WSXNDF"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Obtén la instancia de autenticación
const auth = getAuth(app);

// Exporta los módulos necesarios
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };
