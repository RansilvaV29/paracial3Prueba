const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Configuración de JWT
const JWT_SECRET = 'your_jwt_secret_key'; // Reemplaza con una clave secreta fuerte

// Ruta para el inicio de sesión
exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        // Buscar al usuario por email
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ error: 'User not found' });

        // Verificar la contraseña
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ error: 'Invalid credentials' });

        // Crear un token JWT
        const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });

        // Enviar respuesta con el token
        res.json({ token });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};
