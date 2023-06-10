import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Datepicker = ({ value, onChange }) => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (selectedDate) => {
    setDate(selectedDate);
    onChange(selectedDate);
  };

  return (
    <div className="date">
      <h4>A foglalás napja</h4>
      <div style={{ width: "250px" }}>
        <Calendar
          value={date}
          onChange={handleDateChange}
          calendarType="ISO 8601"
        />
      </div>
    </div>
  );
};

export default Datepicker;
