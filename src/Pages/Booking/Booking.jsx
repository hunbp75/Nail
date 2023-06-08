import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./booking.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Booking = ({ onClose }) => {
  const [name, setName] = useState("");
  const [Phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const onChange = (dates) => {
    const [start] = dates;
    setStartDate(start);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setPhone(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const serviceID = "service_ekznuj3";
    const templateID = "template_20v9c8g";
    const userID = "LSjKBSH-oftzuVitp";

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
          Kérjük töltse ki az adataival és munkatársunk hamarosan felkeresi
          egyeztetés céljából telefonon
        </p>
        <label>
          Az Ön keresztneve:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <br />
        <label>
          Telefonszáma:
          <input type="text" value={Phone} onChange={handleEmailChange} />
        </label>
        <br />
        <label>
          Kérjük adja meg az időpontot, amikor szeretné igénybe venni a
          szolgáltatást
          <textarea value={message} onChange={handleMessageChange} />
        </label>
        <br />
        <label>
          Dátum:
          <br />
          <DatePicker
            selected={startDate}
            onChange={onChange}
            startDate={startDate}
            selectsRange
            inline
            showTimeSelect
            dateFormat="Pp"
          />
        </label>

        <div className="booking_button" id="submitButton">
          <button type="submit" id="submit">
            Foglalás küldése
          </button>
        </div>
      </form>
    </div>
  );
};

export default Booking;
