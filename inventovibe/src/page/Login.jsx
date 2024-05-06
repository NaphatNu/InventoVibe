
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 
import { Navigate } from "react-router-dom";
import './css/Login.css';
import { getAllItems } from '../api/crud';

function Login() {
  const [isLoggedIn, setIsLoggenIn] = useState(false);

  const [Username, setUsername] = useState('');
  const [Password, setPassword] = useState('');

  const [Userdata, setUserdata] = useState([]);

  const LoginData = {
    Username,
    Password,
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    checkLogin();

    setUsername('');
    setPassword('');
    
  }

  async function checkLogin() {
    const PasswordData = Userdata.map(item => item.Password)
    const UsernameData = Userdata.map(item => item.Email)

    for (let i = 0; i < Userdata.length; i++) {
      if(PasswordData[i] === (LoginData.Password) && UsernameData[i] === (LoginData.Username)){
        setIsLoggenIn(true)
        console.log(true)
        break
      }
    }
  }

  const fetchData = async () => {
    try {
        const response = await getAllItems('User');
        console.log(response)
        setUserdata(response);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

useEffect(() => {
    fetchData();
}, []);


  if(isLoggedIn){
    return <Navigate to="/home"/>;
  }
  else {
    return (
      <div className="container">
        <div className="body">
          <div className="logo-container">
            <img src="./logo_InventoVibe2.PNG" alt="Logo" />
          </div>
          <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
              <h2 className="login-title">Login</h2>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="email" id="username" className="form-control"
                value={Username} onChange={(e) => setUsername(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" className="form-control"
                value={Password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <button type="submit" className="btn" >Login</button>
            </form>
          </div>
          <div className="signup-link">
    <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
  </div>
        </div>
  
</div>

    );
  }


}

export default Login;
