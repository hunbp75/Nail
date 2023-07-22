import React, { useState } from "react";
import emailjs from "emailjs-com";
import Datepicker from "./Datepicker";
import "./booking.css";

const Booking = ({ onClose }) => {
  const [name, setName] = useState("");
  const [Phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setPhone(event.target.value);
  };

  const handleDateChange = (selectedDate) => {
    setMessage(selectedDate.toDateString());
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const serviceID = "service_5t3p2q5";
    const templateID = "template_mfjo7dl";
    const userID = "tBKt421zHQsINyrmJ";

    const templateParams = {
      from_name: name,
      Phone: Phone,
      message: message,
    };

    emailjs
      .send(serviceID, templateID, templateParams, userID)
      .then((response) => {
        console.log(
          "Email sikeresen elküldve!",
          response.status,
          response.text
        );
        onClose(); // Ablak bezárása
      })
      .catch((error) => {
        console.error("Hiba történt az e-mail küldése során:", error);
      });

    setName("");
    setPhone("");
    setMessage("");
  };

  return (
    <div className="booking-popup">
      <button className="xcloseButton" id="xButton" onClick={onClose}>
        X<script src=""></script>
      </button>
      <form onSubmit={handleFormSubmit}>
        <p>
          Kérjük töltse ki az adataival és munkatársunk hamarosan felkeresi Önt
          egyeztetés céljából telefonon
        </p>
        <label>
          Az Ön keresztneve:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>

        <label>
          Telefonszáma:
          <input type="text" value={Phone} onChange={handleEmailChange} />
        </label>
        <label>
          <Datepicker value={message} onChange={handleDateChange} />
        </label>

        <br />
        <br />

        <div className="booking_button">
          <button type="submit" id="submit">
            Foglalás küldése
          </button>
        </div>
      </form>
    </div>
  );
};

export default Booking;
