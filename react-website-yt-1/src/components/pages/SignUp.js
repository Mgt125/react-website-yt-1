import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './AuthForm.css';

function SignUp() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include', // <-- needed for cookies/session
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (res.ok) {
        alert("Signup successful!");
        navigate('/booking'); // redirect after signup
      } else {
        alert(data.error || 'Signup failed');
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    }
  };

  return (
    <div className='auth-container'>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input type="text" name="first_name" value={form.first_name} onChange={handleChange} required />
        </label>

        <label>
          Last Name:
          <input type="text" name="last_name" value={form.last_name} onChange={handleChange} required />
        </label>

        <label>
          Email:
          <input type="email" name="email" value={form.email} onChange={handleChange} required />
        </label>

        <label>
          Password:
          <input type="password" name="password" value={form.password} onChange={handleChange} required />
        </label>

        <button type="submit">Create Account</button>
      </form>

      <p className="auth-footer-text">
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}

export default SignUp;
