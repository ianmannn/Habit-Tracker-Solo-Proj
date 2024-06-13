import React from 'react';
import '/home/ianmannn/Codesmith Linux/Projects/Solo Project/src/styles/Calendar.css';

const daysInMonth = 30; // For June

const Calendar = ({habits}) => {
  const habitNum = 6;
  const currentDay = 13;

  const days = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]; // array for days in the month of june

  const getHabitCount = (day) => {
      let count = 0;
      
      habits.forEach((habit) => { //loop through the habits on a given day to find the count of met habits
        if (habit.completed[day] === true) {
            console.log(habit.completed[0])
            console.log(habit);
            count += 1;
        }
    });
    console.log(count);
    return count; 
  };

  const setCalColor = (count, day) => { //set color based on number of habits met

    if (day > currentDay) {
      return 'calendar-day-grey';
    }

    if (count <= 2) {
      return 'calendar-day-red';
    }

    if (count > 2 && count <= 4) {
      return 'calendar-day-yellow';
    }

    if (count > 4) {
      return 'calendar-day-green';
    }
  }
  return (
    <div className="cal-header">
        <h1> JUNE 2024</h1>
        <div className="calendar">
        {days.map(day => ( //loop through the days array and make a cell for it
            <div key={day} className={setCalColor(getHabitCount(day), day)}>
              <div className = "calender-day-header">June {day}</div>
                <div className = "calender-day-progress">{getHabitCount(day)} / {habitNum}</div>
            </div>
        ))}
        </div>
    </div>
  );
};

export default Calendar;

