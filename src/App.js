import React, { useState } from 'react';
import Calendar from './components/Calendar';
import Last7Days from './components/Last7Days';
import CurrentDayHabits from './components/CurrentDayHabits';
import MotivQuote from './components/MotivQuote'
import '/home/ianmannn/Codesmith Linux/Projects/Solo Project/src/styles/App.css';

const url = 'https://zenquotes.io/api/random';


const App = () => {
  const initialHabits = [//June 30 days initial state
    { name: 'Gym', completed: 
      [
      null, false, false, true, true, false, true, true, 
      false, true, true, true, false, false, false, 
      false, false, false, false, false, false, false, 
      false, false, false, false, false, false, false, 
      false, false
      ]
    },
    { name: 'Read For 30 Minutes', completed: 
      [
      null, false, true, true, true, false, false, true, 
      true, true, true, false, true, false, false, 
      false, false, false, false, false, false, false, 
      false, false, false, false, false, false, false, 
      false, false
      ]
    },
    { name: 'No Sugar', completed: 
      [
      null, false, true, true, true, true, true, true, 
      true, true, true, true, true, false, false, 
      false, false, false, false, false, false, false, 
      false, false, false, false, false, false, false, 
      false, false
      ]
    },
    { name: 'Cardio', completed: 
      [
      null, false, true, false, false, false, true, false, 
      false, true, false, false, false, false, false, 
      false, false, false, false, false, false, false, 
      false, false, false, false, false, false, false, 
      false, false
      ]
    },
    { name: 'Business Building', completed: 
      [
      null, false, true, false, true, false, true, true, 
      false, true, false, true, true, false, false, 
      false, false, false, false, false, false, false, 
      false, false, false, false, false, false, false, 
      false, false
      ]
    },
    { name: 'Music Practice', completed: 
      [
      null, false, false, false, false, false, false, false, 
      true, false, false, false, false, false, false, 
      false, false, false, false, false, false, false, 
      false, false, false, false, false, false, false, 
      false, false
      ]
    },
  
  ];

  const [habits, setHabits] = useState(initialHabits);

  const toggleCompletion = (habitIndex, dayIndex) => {
    const newHabits = habits.map((habit, index) => {
      if (index === habitIndex) { //check if at the correct index
        const newCompleted = habit.completed.slice(); //copy the the array 
        newCompleted[dayIndex] = !newCompleted[dayIndex]; //change it to opposite boolean
        return { ...habit, completed: newCompleted };
      }
      console.log(habit);
      return habit;
    });
    setHabits(newHabits); 
  };

  const addHabit = ()

  return (
    <div className="app">
      <h1 classname = "app-h1">Habit Tracker✔</h1>
      <MotivQuote feedUrl = {url}/>
      <CurrentDayHabits habits = {habits} toggleCompletion={toggleCompletion}/>
      <Last7Days habits = {habits} toggleCompletion={toggleCompletion} />
      <Calendar habits = {habits}/>
    </div>
  );
};

export default App;
