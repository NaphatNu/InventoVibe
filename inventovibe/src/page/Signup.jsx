import React from 'react';
import { Link } from 'react-router-dom'; // นำเข้าคอมโพเนนต์ Link จาก react-router-dom
import './css/signup.css'; // นำเข้าไฟล์ CSS

function SignUp() {
  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form className="signup-form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" className="form-control" placeholder="Enter your username" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" className="form-control" placeholder="Enter your email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" className="form-control" placeholder="Enter your password" />
        </div>
        <div className="form-group">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input type="password" id="confirm-password" name="confirm-password" className="form-control" placeholder="Confirm your password" />
        </div>
        <button type="submit" className="btn">Sign Up</button>
      </form>
      <p>Already have an account? <Link to="/login">Login</Link></p> {/* เพิ่มลิงค์ไปหน้า login */}
    </div>
  );
}

export default SignUp;
