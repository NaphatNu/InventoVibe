
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 
import { Navigate } from "react-router-dom";
import './css/Login.css';
import SignUp from "./Signup";
import App from '../App.jsx'

function Login() {
  const [isLoggedIn, setIsLoggenIn] = useState(false);

  function checkLogin() {
    setIsLoggenIn(true);
  }

  if(isLoggedIn){
    return <Navigate to="/home"/>;
  }
  else {
    return (
      <>
      <div className="body">
        <div className="container">
          <div className="login-container">
            <div className="logo-container">
              <img src="./logo_InventoVibe.PNG" alt="Logo" />
            </div>
            <form className="login-form">
              <h2 className="login-title">Login</h2>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" className="form-control" />
              </div>
              <button type="submit" className="btn" onClick={checkLogin}>Login</button>
            </form>
          </div>
        </div>
        <div className="signup-link">
          <Link to="/signup">Sign Up</Link>
        </div>
      </div>
      </>
    );
  }


}

export default Login;
