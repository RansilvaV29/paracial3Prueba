// middlewares/authMiddleware.js
const authenticateUser = (req, res, next) => {
    const { email, password } = req.body;

    // Credenciales fijas para prueba
    const validEmail = 'carlos@example.com';
    const validPassword = 'admin';

    // Comparar credenciales
    if (email === validEmail && password === validPassword) {
        req.user = { email }; // Guardar información del usuario si es necesario
        next(); // Continuar a la siguiente función en la cadena
    } else {
        // Responder con error si las credenciales son incorrectas
        res.status(401).json({ message: 'Invalid credentials' });
    }
};

module.exports = authenticateUser;
