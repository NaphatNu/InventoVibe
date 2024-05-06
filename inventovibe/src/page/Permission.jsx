import React, { useState } from 'react';
import './css/Permission.css'; // import CSS file
import Navigation from '../components/Navigation';

function PermissionForm({ username }) {
  const [role, setRole] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Username: ${username}, Role: ${role}`);
  };

  return (
    <>
    <Navigation/>
    <div className="permission-container"> {/* Add class for container */}
      <h2 className="permission-title">Permission</h2>
      <form className="permission-form" onSubmit={handleSubmit}>
        <label className="permission-label" htmlFor="username">ชื่อผู้ใช้:</label>
        <span>{username}</span>

        <label className="permission-label" htmlFor="role"></label>
        <select
          className="permission-select" // Add class for select element
          id="role"
          value={role}
          onChange={(event) => setRole(event.target.value)}
          required
        >
          <option value="">กรุณาเลือกบทบาท</option>
          <option value="Admin">Admin</option>
          <option value="User">User</option>
        </select><br /><br />

        <label className="permission-label" htmlFor="username">ชื่อผู้ใช้:</label>
        <span>{username}</span>

        <label className="permission-label" htmlFor="role"></label>
        <select
          className="permission-select" // Add class for select element
          id="role"
          value={role}
          onChange={(event) => setRole(event.target.value)}
          required
        >
          <option value="">กรุณาเลือกบทบาท</option>
          <option value="Admin">Admin</option>
          <option value="User">User</option>
        </select><br /><br />

        <label className="permission-label" htmlFor="username">ชื่อผู้ใช้:</label>
        <span>{username}</span>

        <label className="permission-label" htmlFor="role"></label>
        <select
          className="permission-select" // Add class for select element
          id="role"
          value={role}
          onChange={(event) => setRole(event.target.value)}
          required
        >
          <option value="">กรุณาเลือกบทบาท</option>
          <option value="Admin">Admin</option>
          <option value="User">User</option>
        </select><br /><br />

        <label className="permission-label" htmlFor="username">ชื่อผู้ใช้:</label>
        <span>{username}</span>

        <label className="permission-label" htmlFor="role"></label>
        <select
          className="permission-select" // Add class for select element
          id="role"
          value={role}
          onChange={(event) => setRole(event.target.value)}
          required
        >
          <option value="">กรุณาเลือกบทบาท</option>
          <option value="Admin">Admin</option>
          <option value="User">User</option>
        </select><br /><br />
        

        

        
      </form>
      <input className="permission-submit" type="submit" value="ยืนยัน" />
    </div>
    </>
  );
}

export default PermissionForm;
