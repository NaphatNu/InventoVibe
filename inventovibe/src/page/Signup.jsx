// Signup.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // เรียกใช้ Link component จาก react-router-dom
import './css/Signup.css'
import { createItem } from '../api/crud';

function SignUp() {

  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Tel, setTel] = useState('');
  const [Password, setPassword] = useState('');

  const userData = {
    Name,
    Email,
    Tel,
    Password,
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('ส่งข้อมูลไปยัง API:', userData);
    const res = createItem('User',userData);
    console.log('submit : ', res);

    setName('');
    setEmail('');
    setTel('');
    setPassword('');
    
    if (isFormValid()) {
      window.location.href = '/'; 
    } else {
      alert('Form is empty!');
    }
    
  }

  const isFormValid = () => {
    // Check if any form field is empty
    for (const key in userData) {
      if (!userData[key]) {
        return false;
      }
    }
    return true;
  };

  return (
    <div className="body">
      <div className="signup-container">
      <div className="signup-logo-container">
            <img src="./logo_InventoVibe2.PNG" alt="Logo" />
          </div>
        <div className="signup-signup-container">
          <form className="signup-form" onSubmit={handleSubmit}>
            
            <h2 className="signup-title">Sign Up</h2>
            <div className="signup-form-group">
              <label htmlFor="username" className='signup-label'>Name</label>
              <input type="text" id="Name" className="signup-form-control" 
              value={Name} onChange={(e) => setName(e.target.value)} />

            </div>
            <div className="signup-form-group">
              <label htmlFor="email" className='signup-label'>Email</label>
              <input type="email" id="email" className="signup-form-control"
              value={Email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="signup-form-group">
              <label htmlFor="tel" className='signup-label'>Tel.</label>
              <input type="tel" id="phone" name="phone" pattern="[0-9]{10}" className="signup-form-control"
              value={Tel} onChange={(e) => setTel(e.target.value)} />
            </div>
            <div className="signup-form-group">
              <label htmlFor="password" className='signup-label'>Password</label>
              <input type="password" id="password" className="signup-form-control"
              value={Password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit" className="signup-btn">Sign Up</button>
          </form>
        </div>
      </div>
      <div className="signup-login-link">
        <p>Already have an account? <Link to="/">Login</Link></p>
      </div>
    </div>
  );
}

export default SignUp;
