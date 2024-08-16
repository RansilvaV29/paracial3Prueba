import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <nav>
        <ul>
          <li><Link to="/create">Create User</Link></li>
          <li><Link to="/list">List Users</Link></li>
          <li><Link to="/edit">Edit User</Link></li>
          <li><Link to="/delete">Delete User</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
