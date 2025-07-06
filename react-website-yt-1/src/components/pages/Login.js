import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './AuthForm.css';

function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    if (res.ok) {
      localStorage.setItem('token', data.access_token);
      alert("Login successful!");
      navigate('/booking');
    } else {
      alert(data.error || 'Login failed.');
    }
  };

  return (
    <div className='auth-container'>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" name="email" value={form.email} onChange={handleChange} required />
        </label>

        <label>
          Password:
          <input type="password" name="password" value={form.password} onChange={handleChange} required />
        </label>

        <button type="submit">Login</button>
      </form>

      {/* Link to signup */}
      <p className="auth-footer-text">
        Don't have an account? <Link to="/sign-up">Sign Up</Link>
      </p>
    </div>
  );
}

export default Login;
