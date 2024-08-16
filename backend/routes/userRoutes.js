// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController'); // Asegúrate de que esta ruta es correcta
const authenticateUser = require('../middlewares/authMiddleware'); // Asegúrate de que esta ruta es correcta

// Ruta para login
router.post('/login', authenticateUser, (req, res) => {
    // Aquí puedes devolver una respuesta de éxito si la autenticación fue correcta
    res.status(200).json({ message: 'Login successful', user: req.user });
});

// Otras rutas
router.get('/', UserController.getUsers);
router.get('/:id', UserController.getUserById);
router.post('/', UserController.createUser);
router.put('/:id', UserController.updateUser);
router.delete('/:id', UserController.deleteUser);

module.exports = router;
