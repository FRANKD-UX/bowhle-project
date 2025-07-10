import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

import API from '../../utils/api';
import { jwtDecode } from 'jwt-decode';
import { GoogleLogin } from '@react-oauth/google';

function Signup() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    altEmail: '',
    address: '',
    userType: 'client'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    if (step < 3) {
      setStep(prev => prev + 1);
    } else {
      // final submission
      navigate(formData.userType === 'client' ? '/client-dashboard' : '/employee-dashboard');
    }
  };

  // 🔐 Google Sign-Up handler
  const handleGoogleSignup = async (credentialResponse) => {
    try {
      const { credential } = credentialResponse;
      const decoded = jwtDecode(credential);

      const res = await API.post("auth/google/", {
        email: decoded.email,
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
        alert("Unknown role from Google sign-up");
      }
    } catch (err) {
      console.error("Google sign-up failed", err);
      alert("Google Sign-Up failed.");
    }
  };

  const stepTitles = ['Basic Details', 'Contact Details', 'Verification'];

  return (
    <div className="signup-wrapper">
      <div className="signup-left">
        <h3>Hello, Friend!</h3>
        <p>Enter your personal details<br />and start journey with us</p>
        <small>Already a client or employee? <span onClick={() => navigate('/login')}>Sign In</span></small>
      </div>

      <div className="signup-right">
        <p className="login-redirect">Already a client or employee? <span onClick={() => navigate('/login')}>Sign In</span></p>
        <h3>Sign Up</h3>

        {/* Google Sign-Up */}
        <div style={{ marginBottom: '1.5rem' }}>
          <GoogleLogin
            onSuccess={handleGoogleSignup}
            onError={() => alert("Google Sign Up Failed")}
          />
        </div>

        <div className="step-indicator">
          {stepTitles.map((label, index) => (
            <div key={index} className={`step ${step === index + 1 ? 'active' : ''}`}>
              <div className="circle">{index + 1}</div>
              <span>{label}</span>
            </div>
          ))}
        </div>

        <form className="signup-form">
          {step === 1 && (
            <>
              <input name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} />
              <input name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} />
            </>
          )}
          {step === 2 && (
            <>
              <input name="phone" placeholder="We Can Call You" value={formData.phone} onChange={handleChange} />
              <input name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} />
              <input name="altEmail" placeholder="Alternative Email" value={formData.altEmail} onChange={handleChange} />
            </>
          )}
          {step === 3 && (
            <>
              <input name="address" placeholder="Business Address" value={formData.address} onChange={handleChange} />
              <select name="userType" value={formData.userType} onChange={handleChange}>
                <option value="client">I'm a Client</option>
                <option value="employee">I'm an Employee</option>
              </select>
            </>
          )}
        </form>

        <button className="next-button" onClick={handleNext}>Continue</button>
      </div>
    </div>
  );
}

export default Signup;
