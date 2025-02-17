import React, { useState } from 'react';
import './PatientsChart.css';

const PatientsChart = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const renderDays = () => {
    const days = [];
    const startDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1);
    const endDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0);

    // Fill days from previous month
    for (let i = startDate.getDay(); i > 0; i--) {
      days.push(<div className="PatientsChart-day empty" key={`empty-prev-${i}`}></div>);
    }

    // Fill current month days
    for (let day = 1; day <= endDate.getDate(); day++) {
      const currentDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), day);
      const isSelected = currentDate.toDateString() === selectedDate.toDateString();
      days.push(
        <div
          className={`PatientsChart-day ${isSelected ? 'selected' : ''}`}
          key={day}
          onClick={() => handleDateClick(currentDate)}
        >
          {day}
        </div>
      );
    }

    // Fill days for next month
    const remainingDays = 42 - days.length;
    for (let i = 0; i < remainingDays; i++) {
      days.push(<div className="PatientsChart-day empty" key={`empty-next-${i}`}></div>);
    }

    return days;
  };

  const handleMonthChange = (direction) => {
    setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() + direction, 1));
  };

  return (
    <div className="PatientsChart-container">
      <div className="PatientsChart-header">
        <button onClick={() => handleMonthChange(-1)}>&lt;</button>
        <span>
          {selectedDate.toLocaleString('default', { month: 'long' })}, {selectedDate.getFullYear()}
        </span>
        <button onClick={() => handleMonthChange(1)}>&gt;</button>
      </div>
      <div className="PatientsChart-body">
        <div className="PatientsChart-week-days">
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thu</div>
          <div>Fri</div>
          <div>Sat</div>
          <div>Sun</div>
        </div>
        <div className="PatientsChart-days">
          {renderDays()}
        </div>
      </div>
    </div>
  );
};

export default PatientsChart;
