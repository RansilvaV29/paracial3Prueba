// src/components/UserList.js
import React, { useEffect, useState } from 'react';
import { getUsers, deleteUser } from '../services/userService';
import { Link } from 'react-router-dom';

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const data = await getUsers();
            setUsers(data);
        };
        fetchUsers();
    }, []);

    const handleDelete = async (id) => {
        await deleteUser(id);
        setUsers(users.filter(user => user._id !== id));
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

    const listStyle = {
        backgroundColor: '#ffffff',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        width: '100%',
        maxWidth: '600px',
        boxSizing: 'border-box'
    };

    const itemStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px',
        borderBottom: '1px solid #ddd'
    };

    const buttonStyle = {
        backgroundColor: '#dc3545',
        color: '#ffffff',
        border: 'none',
        borderRadius: '4px',
        padding: '5px 10px',
        cursor: 'pointer',
        fontSize: '14px',
        fontWeight: 'bold',
        marginLeft: '10px'
    };

    const linkStyle = {
        color: '#007bff',
        textDecoration: 'none',
        fontSize: '14px',
        marginLeft: '10px'
    };

    const headingStyle = {
        marginBottom: '20px',
        fontSize: '24px',
        fontWeight: 'bold',
        color: '#333'
    };

    return (
        <div style={containerStyle}>
            <div style={listStyle}>
                
                <h2 style={headingStyle}>Lista de personas</h2>
                <Link to="/create" style={linkStyle}>Crear Nuevas personas para invitaciones</Link>
                <ul style={{ listStyleType: 'none', padding: '0' }}>
                    {users.map(user => (
                        <li key={user._id} style={itemStyle}>
                            <span>{user.name} - {user.email}</span>
                            <div>
                                <button onClick={() => handleDelete(user._id)} style={buttonStyle}>Delete</button>
                                <Link to={`/edit/${user._id}`} style={linkStyle}>Edit</Link>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default UserList;
