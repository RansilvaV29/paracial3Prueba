const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,  // Asegúrate de que este campo esté marcado como requerido
    },
});

module.exports = mongoose.model('User', UserSchema);
