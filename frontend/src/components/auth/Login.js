import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import Loader from '../common/Loader';
import API from '../../../utils/api';
import jwt_decode from 'jwt-decode';
import { GoogleLogin } from '@react-oauth/google';


function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('client');
  const [loading, setLoading] = useState(false);

  // 🔐 Normal login (email + password)
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await API.post("auth/login/", { email, password });
      const token = res.data.access;
      localStorage.setItem("token", token);

      const userRes = await API.get("auth/user/");
      const user = userRes.data;
      localStorage.setItem("user", JSON.stringify(user));

      if (user.role === 'client') {
        navigate('/client-dashboard');
      } else if (user.role === 'employee') {
        navigate('/employee-dashboard');
      } else {
        alert("Unknown user role.");
      }
    } catch (err) {
      console.error(err);
      alert("Login failed. Check credentials or verify email.");
    } finally {
      setLoading(false);
    }
  };

  // 🔐 Google Login logic
  const handleGoogleLogin = async (credentialResponse) => {
    setLoading(true);
    try {
      const { credential } = credentialResponse;
      const decoded = jwt_decode(credential);

      const res = await API.post("auth/google/", {
        email: decoded.email
      });

      const token = res.data.access;
      localStorage.setItem("token", token);

      const userRes = await API.get("auth/user/");
      const user = userRes.data;
      localStorage.setItem("user", JSON.stringify(user));

      if (user.role === 'client') {
        navigate('/client-dashboard');
      } else if (user.role === 'employee') {
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

          {/* 🔐 Google Sign-In Button */}
          <GoogleLogin
            onSuccess={handleGoogleLogin}
            onError={() => alert("Google Sign In Failed")}
          />

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

          <select value={userType} onChange={(e) => setUserType(e.target.value)} required>
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
