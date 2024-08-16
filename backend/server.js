const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes'); // Nueva ruta para autenticación
const cors = require('cors');
const mongoose = require('mongoose');

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use('/users', userRoutes);
app.use('/auth', authRoutes); // Ruta para autenticación

// Conexión a MongoDB
mongoose.connect('mongodb://localhost:27017/yourdbname');

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
