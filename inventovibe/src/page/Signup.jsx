// Signup.js
import React from 'react';
import { Link } from 'react-router-dom'; // เรียกใช้ Link component จาก react-router-dom
import './css/Signup.css'

function SignUp() {
  return (
    <div className="body">
      <div className="container">
        <div className="signup-container">
          <form className="signup-form">
            <h2 className="signup-title">Sign Up</h2>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" className="form-control" />
            </div>
            <button type="submit" className="btn">Sign Up</button>
          </form>
        </div>
      </div>
      <div className="login-link">
        <p>Already have an account? <Link to="/">Login</Link></p>
      </div>
    </div>
  );
}

export default SignUp;
