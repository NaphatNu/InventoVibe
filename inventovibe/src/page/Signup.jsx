// Signup.js
import React from 'react';
import { Link } from 'react-router-dom'; // เรียกใช้ Link component จาก react-router-dom
import './css/Signup.css'

function SignUp() {
  return (
    <div className="body">
      <div className="signup-container">
      <div className="signup-logo-container">
            <img src="./logo_InventoVibe2.PNG" alt="Logo" />
          </div>
        <div className="signup-signup-container">
          <form className="signup-form">
            
            <h2 className="signup-title">Sign Up</h2>
            <div className="signup-form-group">
              <label htmlFor="username">Name</label>
              <input type="text" id="Name" className="signup-form-control" />
            </div>
            <div className="signup-form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" className="signup-form-control" />
            </div>
            <div className="signup-form-group">
              <label htmlFor="tel">Tel.</label>
              <input type="number" id="tel" className="signup-form-control" />
            </div>
            <div className="signup-form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" className="signup-form-control" />
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
