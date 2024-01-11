// src/LoginForm.js
import React, { useState } from 'react';
import { useUser } from './UserContext';
import './LoginForm.css';

const LoginForm = () => {
  const { login } = useUser();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (username.trim() === '' || password.trim() === '') {
      setError('Invalid form');
      return;
    }

    // You might want to add authentication logic here (e.g., API call, etc.)
    // For simplicity, let's assume a successful login with the form inputs
    const user = { name: username, accounts: [{ id: 1, name: 'Savings', balance: 1000 }] };
    login(user);
    setError('');
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form className="login-form">
          <label>
            Username:
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </label>
          <label>
            Password:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <button type="button" onClick={handleLogin}>
            Login
          </button>
          <div className="error-message-container">
            {error && <p className="error-message">{error}</p>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
