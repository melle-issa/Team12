import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from "../firebase";
import { useNavigate, Link } from 'react-router-dom';
import React, { useState } from 'react';
import './SignUp.css';

export const SignUp = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password).then(cred => {
        return db.collection('users').doc(cred.user.uid).set({
          email,
          userName: username,
          isAdmin: false,
        })
      });

      navigate('/');
    } catch (error) {
      setError('Error signing up: ' + error.message);
    }
  };

  return (
    <div className="signup-container">
      <h1>CampusSafe</h1>
      <h2>Sign Up</h2>
      <form>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <input type="password" placeholder="Confirm Password" value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        
        <button onClick={handleSignUp}>Sign Up</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <p>Already have an account? <Link to="/">Login</Link></p>
      </form>
    </div>
  );
};

export default SignUp;
