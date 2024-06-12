import React, { useState } from 'react';
import Calendar from './components/Calendar';
import Last7Days from './components/Last7Days';
import '/home/ianmannn/Codesmith Linux/Projects/Solo Project/src/styles/App.css';

const App = () => {
  const initialHabits = [//Last 7 days initial state
    { name: 'Gym', completed: 
      [
      null, false, false, true, true, false, true, true, 
      false, false, true, false, false, false, false, 
      false, false, false, false, false, false, false, 
      false, false, false, false, false, false, false, 
      false, false
      ]
    },
    { name: 'Read For 30', completed: 
      [
      null, false, false, false, true, true, false, false, 
      false, false, false, false, false, false, false, 
      false, false, false, false, false, false, false, 
      false, false, false, false, false, false, false, 
      false, false
      ]
    },
    { name: 'Hack Hours', completed: 
      [
      null, false, false, false, true, true, false, true, 
      false, false, false, false, false, false, false, 
      false, false, false, false, false, false, false, 
      false, false, false, false, false, false, false, 
      false, false
      ]
    },
    { name: 'Cardio', completed: 
      [
      null, false, false, false, true, true, false, true, 
      false, false, false, false, false, false, false, 
      false, false, false, false, false, false, false, 
      false, false, false, false, false, false, false, 
      false, false
      ]
    },
    { name: 'Business Building', completed: 
      [
      null, false, false, false, true, true, false, true, 
      false, false, false, false, false, false, false, 
      false, false, false, false, false, false, false, 
      false, false, false, false, false, false, false, 
      false, false
      ]
    },
    { name: 'Music Practice', completed: 
      [
      null, false, false, false, true, true, false, true, 
      false, false, false, false, false, false, false, 
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

  return (
    <div className="app">
      <h1>Habit Tracker</h1>
      <Last7Days habits={habits} toggleCompletion={toggleCompletion} />
      <Calendar />
    </div>
  );
};

export default App;
