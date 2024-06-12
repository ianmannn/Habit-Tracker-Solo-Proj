import React from 'react';
import '/home/ianmannn/Codesmith Linux/Projects/Solo Project/src/styles/Last7Days.css';

const Last7Days = ({ habits, toggleCompletion }) => {
  // Labels for the last 7 days (from 24 to 30)
  const days = Array.from({ length: 7 }, (_, i) => `June ${5 + i}`);

  // Indices for the last 7 days
  const last7DaysIndices = Array.from({ length: 7 }, (_, i) => 5 + i);

  // Function to determine the box class based on completion status
  const getBoxClass = (completed) => {
    return completed ? 'cell box completed' : 'cell box not-completed';
  };

  return (
    <div className="last-7-days">
      <h2>Last 7 Days</h2>
      <div className="grid">
        <div className="header">
          <div className="cell empty"></div>
          {days.map((day, index) => (
            <div key={index} className="cell day-header">{day}</div>
          ))}
        </div>
        {habits.map((habit, habitIndex) => (
          <div key={habitIndex} className="row">
            <div className="cell habit-name">{habit.name}</div>
            {last7DaysIndices.map((dayIndex) => (
              <div
                key={dayIndex}
                className={getBoxClass(habit.completed[dayIndex])}
                onClick={() => toggleCompletion(habitIndex, dayIndex)}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Last7Days;
