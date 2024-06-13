import React from 'react';
import '/home/ianmannn/Codesmith Linux/Projects/Solo Project/src/styles/CurrentDayHabits.css'; // Ensure this path is correct

const CurrentDayHabits = ({ habits, toggleCompletion }) => {
  const currentDate = new Date();
  const day = ['June 13'];

  const getBoxClass = (completed) => {
    return completed ? 'today-cell box completed' : 'today-cell box not-completed';
  };

  const getBoxText = (completed) => {
    return completed ? '✔' : '✖';
  }

  return (
    <div className="current-day-habits">
      <h2 className="today-header">TODAY</h2>
      <div className="today-grid">
        <div className="today-grid-header">
          <div className="today-cell empty"></div>
          <div className="today-cell y-label">{day[0]}</div>
        </div>
        {habits.map((habit, habitIndex) => (
          <div key={habitIndex} className="row">
            <div className="today-cell-habit-name">{habit.name}</div>
            <div
              className={getBoxClass(habit.completed[13])}
              onClick={() => toggleCompletion(habitIndex, 13 )}
            >{getBoxText(habit.completed[13])}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CurrentDayHabits;
