import React, { useState } from 'react';
import './LetsConnect.css';

function LetsConnect() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for API logic
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="lets-connect">
      <div className="connect-wrapper">
        <h1 className="connect-heading">Let’s Brew Something Beautiful Together ☕</h1>

        {!submitted ? (
          <form className="connect-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
            />
            <button type="submit">Send Message</button>
          </form>
        ) : (
          <div className="success-message">
            <h2>Thanks forreaching out ☕</h2>
            <p>We’ll be in touch faster than you can say <strong>“magic mocha.”</strong></p>
          </div>
        )}
      </div>
    </div>
  );
}

export default LetsConnect;