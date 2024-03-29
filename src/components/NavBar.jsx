import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Booking from "../Pages/Booking/Booking";
import "./navbar.css";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo_1 from "../Pages/ContactUs/logo/logo_1.jpg";
import logo_2 from "../Pages/ContactUs/logo/logo_2.jpg";

const NavBar = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <nav className="navBar responsive-nav">
      <div className="navBar-content">
        <div className="logoContainer">
          <img id="logo_red" src={logo_2} alt=""></img>
          <img id="logo_red" src={logo_1} alt=""></img>
        </div>
        <div className="navButtonContainer">
          <NavLink to="/" exact>
            Kezdőlap
          </NavLink>
          <NavLink to="/About">Rólunk</NavLink>
          <NavLink to="/Store">A Szalon</NavLink>
          <NavLink to="/Product">Szolgáltatások / Árak</NavLink>
          <NavLink to="/Gallery">Galéria</NavLink>
          <NavLink to="/ContactUs">Elérhetőségek</NavLink>
        </div>
        <div className="booking">
          <button className="navButton" onClick={openPopup}>
            Időpont foglalás
          </button>
        </div>
        <div className="socialIcons">
          <a
            href="https://www.facebook.com/profile.php?id=100093624560974&mibextid=ZbWKwL"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            href="https://instagram.com/lakk.szepsegszalon?igshid=MzNlNGNkZWQ4Mg=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
        {isPopupOpen && (
          <div className="popupOverlay">
            <div className="popupContent">
              <div className="bookingContainer">
                <Booking onClose={closePopup} />
              </div>
            </div>
          </div>
        )}
      </div>
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
