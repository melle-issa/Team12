import React, { useState } from 'react';
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import logo from './assets/logo.png';
import './LoginForm.css';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/map');
    } catch (error) {
      console.error('Error signing in:', error.message);
    }
  };

  const handleSignUp = () => {
    navigate('/signup');
  };

  return (
    <div className="login-container">
      <h1>CampusSafe</h1>
      <img id="logo" src={logo} alt="Logo" />

      <form>
        <label htmlFor="email">Email:</label>
        <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <label htmlFor="password">Password:</label>
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        
        <button onClick={handleLogin} type="button">Login</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button onClick={handleSignUp} type="button">Sign Up</button>
      </form>
    </div>
  );
};

export default LoginForm;
