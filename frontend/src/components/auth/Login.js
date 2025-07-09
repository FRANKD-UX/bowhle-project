import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import Loader from '../common/Loader';

// This component handles user login for both clients and employees
// It allows users to sign in with email and password, or via Google

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [userType, setUserType] = useState('client');
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    if (userType === 'employee') {
      navigate('/employee-dashboard');
    } else {
      navigate('/client-dashboard');
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="login-wrapper">
      <div className="login-left">
        <h3>Hey There Bowdie</h3>
        <p>Sign in to continue your creative journey</p>
        <ul>
          <li>Track your projects</li>
          <li>Upload designs or download submissions</li>
          <li>View your projects</li>
        </ul>
      </div>
      
      <div className="login-right">
        <form className="login-form" onSubmit={handleLogin}>
          <h2>Sign In</h2>

          <button type="button" className="google-signin-button">
            <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" 
            alt="Google Logo"
            className='google-icon'
            />
            Sign in with Google
            </button>

          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            required
          />

          <select value={userType} onChange={(e) => setUserType(e.target.value)} required>
            <option value="client">I'm a Client</option>
            <option value="employee">I'm an Employee</option>
          </select>

          <button type="submit">Login</button>

          <p className="signup-hint">Need an account? <span onClick={() => navigate('/signup')}>Signup</span></p>
        </form>
      </div>
    </div>
  );
}

export default Login;
