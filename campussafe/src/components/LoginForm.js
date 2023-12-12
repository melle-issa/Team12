import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';

const LoginForm = () => {
    const navigate = useNavigate();


  const handleLogin = () => {
    // Add your login logic here
    
    navigate('/map');
  };

  return (
    <div className="login-container">
      <h1>CampuSafe</h1>
      <img id="logo" src="../assets/logo.png" alt="Logo" />

      <form>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" required />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />

        <button onClick={handleLogin} type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;