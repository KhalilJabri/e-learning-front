import React, { useState } from "react";
import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, addMonths, subMonths } from "date-fns";
import "./Calendar.css"

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const renderHeader = () => {
    return (
      <div className="header">
        <button onClick={() => setCurrentDate(subMonths(currentDate, 1))}>&lt;</button>
        <input
          type="month"
          value={format(currentDate, "yyyy-MM")}
          onChange={(e) => setCurrentDate(new Date(e.target.value))}
        />
        <button onClick={() => setCurrentDate(addMonths(currentDate, 1))}>&gt;</button>
      </div>
    );
  };

  const renderDays = () => {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return (
      <div className="days-row">
        {days.map((day, index) => (
          <div className="day-name" key={index}>
            {day}
          </div>
        ))}
      </div>
    );
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentDate);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const rows = [];
    let days = [];
    let day = startDate;

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        days.push(
          <div
            className={`cell ${day.getMonth() !== currentDate.getMonth() ? "disabled" : ""}`}
            key={day}
          >
            <span>{format(day, "d")}</span>
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className="row" key={day}>
          {days}
        </div>
      );
      days = [];
    }

    return <div className="cells">{rows}</div>;
  };

  return (
    <div className="calendar">
      {renderHeader()}
      {renderDays()}
      {renderCells()}
    </div>
  );
};

export default Calendar;
