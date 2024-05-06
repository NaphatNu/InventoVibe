import React from 'react';
import { Link } from 'react-router-dom'; // นำเข้าคอมโพเนนต์ Link จาก react-router-dom
import './login.css'; // นำเข้าไฟล์ CSS

function App() {
  return (
    <div className="App">
      <div className="logo-container">
        <img src="/public/logo_InventoVibe.PNG" alt="Logo" />
      </div>
      
      <div className="container">
        <div className="login-container">
          <form className="login-form">
            <h2 className="login-title">Login</h2>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" name="username" className="form-control" placeholder="Enter your username" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" className="form-control" placeholder="Enter your password" />
            </div>
            <button type="submit" className="btn">Login</button>
          </form>
          <p>Don't have an account? <Link to="/signup">Sign up</Link></p> {/* เพิ่มลิงค์ไปหน้า signup */}
        </div>
      </div>
    </div>
  );
}

export default App;
