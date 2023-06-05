import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Booking from "../Pages/Booking/Booking";
import "./navbar.css";

const NavBar = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <nav className="navBar">
      <div className="navButtonContainer">
        <NavLink to="/" exact>
          Kezdőlap
        </NavLink>
        <NavLink to="/About">Rólunk</NavLink>
        <NavLink to="/Product">Szolgáltatások / Árak</NavLink>
        <NavLink to="/Gallery">Galéria</NavLink>
        <NavLink to="/ContactUs">Elérhetőségek</NavLink>
      </div>
      <div className="booking">
        <button className="navButton" onClick={openPopup}>
          Időpont foglalás
        </button>
      </div>
      {isPopupOpen && (
        <div className="popupOverlay">
          <div className="popupContent">
            <button className="closeButton" onClick={closePopup}>
              ×
            </button>
            <div className="bookingContainer">
              <Booking />
            </div>
          </div>
        </div>
      )}
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
