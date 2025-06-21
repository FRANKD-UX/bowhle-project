import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import Loader from '../common/Loader';

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
        <h2>Bowhle</h2>
        <h3>Welcome Back</h3>
        <p>Sign in to continue your creative journey ✨</p>
        <ul>
          <li>Track your projects</li>
          <li>Upload designs or download submissions</li>
          <li>Stay updated in real-time</li>
        </ul>
      </div>

      <div className="login-right">
        <form className="login-form" onSubmit={handleLogin}>
          <h2>Sign In</h2>
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <select value={userType} onChange={(e) => setUserType(e.target.value)} required>
            <option value="client">I'm a Client</option>
            <option value="employee">I'm an Employee</option>
          </select>

          <button type="submit">Login</button>

          <p className="signup-hint">Need an account? <span>Signup coming soon</span></p>
        </form>
      </div>
    </div>
  );
}

export default Login;
