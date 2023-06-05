import React, { useState } from "react";
import "./booking.css";

const Booking = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Itt hívd meg a backend szolgáltatást az e-mail küldéséhez
    // Pl. axios.post('/send-email', { name, date, time })
    console.log("Név:", name);
    console.log("Dátum:", date);
    console.log("Időpont:", time);
  };

  return (
    <div className="booking-form">
      <h1>Időpont Foglalás</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Név:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Dátum:</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={handleDateChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="time">Időpont:</label>
          <input
            type="time"
            id="time"
            value={time}
            onChange={handleTimeChange}
            required
          />
        </div>
        <div className="form-group">
          <button type="submit">Befejezés</button>
        </div>
      </form>
    </div>
  );
};

export default Booking;
