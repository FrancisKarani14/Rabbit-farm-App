import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';




const Signup = () => {
     const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:3000/users', { // Replace with your real backend
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(data => {
      alert('Signup successful!');
      console.log('User signed up:', data);
    })
    .catch(err => {
      console.error('Signup error:', err);
    });
  };
 
  return (
    <>
   
    <div className="page-wrapper">
      <Navbar />
      <main className="signup-container">
        <h2>Create Account</h2>
        <form className="signup-form" onSubmit={handleSubmit}>
      <label className="form-label">Username</label>
            <input 
            type="text" 
            name="username" 
            value={formData.username} 
            onChange={handleChange} 
            required 
            className="form-input"
            />


          <label>Email</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
            
          />

          <label>Password</label>
          <input 
            type="password" 
            name="password" 
            value={formData.password} 
            onChange={handleChange} 
            required 
          />
          <br/>

          <div className="btn-group" role="group" aria-label="Basic mixed styles example">
            <button type='submit' className="btn btn-warning">Signup</button>
          
          </div>
        </form>
      </main>
      <Footer />
    </div>
   
     </>
      
  )
}

export default Signup;
