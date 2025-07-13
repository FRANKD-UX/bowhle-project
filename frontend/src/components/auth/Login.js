import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import Loader from '../common/Loader';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
// import API from '../../utils/api'; // keeping this for later use

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('client');
  const [loading, setLoading] = useState(false);

  // Basic login handler
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const role = userType === 'employee' ? 'employee' : 'client';
      const mockUser = {
        email,
        role,
        name: 'Demo User',
      };

      const fakeToken = 'fake-jwt-token';
      localStorage.setItem('token', fakeToken);
      localStorage.setItem('user', JSON.stringify(mockUser));

      if (role === 'client') {
        navigate('/client-dashboard');
      } else if (role === 'employee') {
        navigate('/employee-dashboard');
      } else {
        alert("Unknown user role.");
      }
    } catch (err) {
      console.error(err);
      alert("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // GOOGLE LOGIN (Active)
  const handleGoogleLogin = async (credentialResponse) => {
    setLoading(true);
    try {
      const { credential } = credentialResponse;
      const decoded = jwtDecode(credential);

      const role = decoded.email.includes('employee') ? 'employee' : 'client';

      const mockUser = {
        email: decoded.email,
        role,
        name: decoded.name || 'Google User',
      };

      const fakeToken = 'google-jwt-token';
      localStorage.setItem("token", fakeToken);
      localStorage.setItem("user", JSON.stringify(mockUser));

      if (role === 'client') {
        navigate('/client-dashboard');
      } else if (role === 'employee') {
        navigate('/employee-dashboard');
      } else {
        alert("Unknown role from Google login");
      }
    } catch (err) {
      console.error("Google login failed", err);
      alert("Google Sign-In failed.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Loader />;

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

          {/* Google Sign-In Button */}
          <GoogleLogin
            onSuccess={handleGoogleLogin}
            onError={() => alert("Google Sign In Failed")}
          />

          <div className="divider">or</div>

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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <select
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
            required
          >
            <option value="client">I'm a Client</option>
            <option value="employee">I'm an Employee</option>
          </select>

          <button type="submit">Login</button>

          <p className="signup-hint">
            Need an account? <span onClick={() => navigate('/signup')}>Signup</span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
