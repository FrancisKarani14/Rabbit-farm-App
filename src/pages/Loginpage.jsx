
import { useState } from 'react';
import '../App.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
function LoginPage({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (username.trim() && password) {
      onLogin(username);
    } else {
      alert('Please enter valid credentials.');
    }
  }

  return (
    <>
    <section className='login-wrapper'>


    <Navbar/>
   
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
         <label className="login-label">Username:</label>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          className='login-input'
        />
         <label className="login-label">Password:</label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className='password-input'
        />
        <button  className="btn-login"type="submit">Login</button>
      </form>
    </div>
    <Footer/>
        </section>
     </>
  );
}

export default LoginPage;
