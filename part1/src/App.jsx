// App.jsx

import React from 'react';

const Header = ({ course }) => {
  return (
    <h1>{course.name}</h1>
  );
};

const Part = ({ part }) => {
  return (
    <p>
      {part.name} - Exercises: {part.exercises}
    </p>
  );
};

const Content = ({ parts }) => {
  return (
    <div>
      <Part part={parts[0]} />
      <Part part={parts[1]} />
      <Part part={parts[2]} />
    </div>
  );
};

const Total = ({ parts }) => {
  const totalExercises = parts.reduce((sum, part) => sum + part.exercises, 0);

  return (
    <p>Total exercises: {totalExercises}</p>
  );
};

const App = () => {
  // Assuming you have a variable `course` defined with the necessary data

  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default App;
