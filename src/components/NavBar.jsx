import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";

const NavBar = () => {
  return (
    <nav className="navBar">
      <NavLink to="/" exact>
        Kezdőlap
      </NavLink>
      <NavLink to="/About">Rólunk</NavLink>
      <NavLink to="/Product">Szolgáltatások / Árak</NavLink>
      <NavLink to="/Gallery">Galéria</NavLink>
      <NavLink to="/ContactUs">Elérhetőségek</NavLink>
    </nav>
  );
};

const NavLink = ({ to, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link to={to} className={isActive ? "navButton active" : "navButton"}>
      {children}
    </Link>
  );
};

export default NavBar;
