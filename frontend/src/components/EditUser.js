// src/components/EditUser.js
import React, { useState, useEffect } from 'react';
import { getUserById, updateUser } from '../services/userService';
import { useParams, useNavigate } from 'react-router-dom';

const EditUser = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUser = async () => {
            const user = await getUserById(id);
            setName(user.name);
            setEmail(user.email);
            setPassword(user.password);
        };
        fetchUser();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await updateUser(id, { name, email, password });
        navigate('/');
    };

    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#f5f5f5',
        padding: '20px'
    };

    const formStyle = {
        backgroundColor: '#ffffff',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        width: '100%',
        maxWidth: '500px',
        boxSizing: 'border-box'
    };

    const inputStyle = {
        width: '100%',
        padding: '10px',
        margin: '10px 0',
        border: '1px solid #ddd',
        borderRadius: '4px'
    };

    const buttonStyle = {
        backgroundColor: '#007bff',
        color: '#ffffff',
        border: 'none',
        borderRadius: '4px',
        padding: '10px 20px',
        cursor: 'pointer',
        fontSize: '16px',
        fontWeight: 'bold'
    };

    const headingStyle = {
        marginBottom: '20px',
        fontSize: '24px',
        fontWeight: 'bold',
        color: '#333'
    };

    return (
        <div style={containerStyle}>
            <div style={formStyle}>
                <h2 style={headingStyle}>Editar Personas para invitaciones</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Nombre:</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} style={inputStyle} />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle} />
                    </div>
                    <div>
                        <label>Hobby Oculto:</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={inputStyle} />
                    </div>
                    <button type="submit" style={buttonStyle}>Update</button>
                </form>
            </div>
        </div>
    );
};

export default EditUser;
