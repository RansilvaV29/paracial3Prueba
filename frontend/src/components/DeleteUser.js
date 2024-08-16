import React, { useState } from 'react';
import axios from 'axios';

const DeleteUser = () => {
  const [id, setId] = useState('');

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3000/users/${id}`);
      alert('User deleted successfully!');
      setId('');
    } catch (error) {
      console.error(error);
      alert('Error deleting user');
    }
  };

  return (
    <div>
      <h1>Delete User</h1>
      <label>
        User ID:
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      </label>
      <button onClick={handleDelete}>Eliminar</button>
    </div>
  );
};

export default DeleteUser;
