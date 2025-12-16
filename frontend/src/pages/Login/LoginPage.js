import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { login } from '../../services/authService';

function LoginPage() {
  const [Email, setEmail] = useState('');
  const [password_hash, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const result = await login(Email, password_hash);
      console.log("Logged in:", result);
      navigate('/dashboard');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password_hash}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <Link to="/register">Register here</Link>
      </p>
    </div>
  );
}

export default LoginPage
