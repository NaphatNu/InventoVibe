import { NavLink } from "react-router-dom";
import './css/Navigation.css'
import img from "../assets/logo_InventoVibe.png"

function Navigation() {
    return (
        <div className="navigation-container">
            <NavLink to="/home" className="Logo-container"><img className="Logo-img" src={img} alt="" /></NavLink>
            <div className="navbar">
                <NavLink to="/History" className="button">History</NavLink>
                <NavLink to="/Edit" className="button">Edit</NavLink>
                <NavLink to="/Permission" className="button">Permission</NavLink>
            </div>
        </div>
    );
}

export default Navigation;