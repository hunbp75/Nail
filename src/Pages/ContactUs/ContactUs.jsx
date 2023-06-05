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
      </h3>{" "}
      <div className="maps_container">
        <div className="street_view">
          <iframe
            title="LAKK Szépségszalon Térkép 1"
            src="https://www.google.com/maps/embed?pb=!4v1685987701162!6m8!1m7!1shr85OO6FLkIK684RbqEaaQ!2m2!1d47.65045081397253!2d19.06983827096423!3f327.09330082389926!4f-7.867088826922412!5f0.7820865974627469"
            width="400"
            height="300"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="google_map">
          <iframe
            title="LAKK Szépségszalon Térkép 2"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d415.2233714485832!2d19.069562354879633!3d47.65046874295242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1shu!2shu!4v1685986733679!5m2!1shu!2shu"
            width="400"
            height="300"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
