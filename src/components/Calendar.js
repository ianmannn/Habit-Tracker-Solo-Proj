import React from 'react';
import '/home/ianmannn/Codesmith Linux/Projects/Solo Project/src/styles/Calendar.css';

const daysInMonth = 30; // For June

const Calendar = () => {
  const days = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]; // array for days in the month of june

  return (
    <div className="cal-header">
        <h1> JUNE </h1>
        <div className="calendar">
        {days.map(day => ( //loop through the days array and make a cell for it
            <div key={day} className="calendar-day">
            {day}
            </div>
        ))}
        </div>
    </div>
  );
};

export default Calendar;

