import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./contactus.css";

const ContactUs = () => {
  return (
    <div className="contactus_main">
      <h1>LAKK Szépségszalon</h1>
      <h3>Monza Hungary Kft.</h3>
      <h3>2000, Szentendre Stromfeld utca 1/a</h3>
      <h3>
        <FontAwesomeIcon icon={faEnvelope} /> lakkszepsegszalon@gmail.com
      </h3>
      <h3>
        <FontAwesomeIcon icon={faPhone} /> +36 20 474-9390
      </h3>
      <h3>
        <FontAwesomeIcon icon={faPhone} /> +36 20 599-2525
      </h3>
    </div>
  );
};

export default ContactUs;
