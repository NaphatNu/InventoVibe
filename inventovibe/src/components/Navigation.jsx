import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./css/Navigation.css";
import img from "../assets/logo_InventoVibe.png";

function Navigation() {
  const [selectedBox, setSelectedBox] = useState(
    localStorage.getItem("selectedBox") || 'home'
  );

  const handleClick = (boxId) => {
    setSelectedBox(boxId);
    localStorage.setItem("selectedBox", boxId);
  };

  useEffect(() => {
    // Add event listener to reset selected box on page unload
    const handleUnload = () => {
      localStorage.removeItem("selectedBox");
    };
    window.addEventListener("unload", handleUnload);
    return () => {
      window.removeEventListener("unload", handleUnload);
    };
  }, []);

  return (
    <div className="navigation-container">
      <NavLink
        to="/home"
        className={`Logo-container ${selectedBox === "home" ? "" : ""}`}
        onClick={() => handleClick("home")}
      >
        <img className="Logo-img" src={img} alt="" />
      </NavLink>
      <div className="navbar">
        <NavLink
          to="/home"
          className={`button ${selectedBox === "home" ? "fill-color" : ""}`}
          onClick={() => handleClick("home")}
        >
          Stockpile
        </NavLink>
        <NavLink
          to="/History"
          className={`button ${
            selectedBox === "History" ? "fill-color" : ""
          }`}
          onClick={() => handleClick("History")}
        >
          History
        </NavLink>
        <NavLink
          to="/Edit"
          className={`button ${selectedBox === "Edit" ? "fill-color" : ""}`}
          onClick={() => handleClick("Edit")}
        >
          Edit
        </NavLink>
      </div>
    </div>
  );
}

export default Navigation;
