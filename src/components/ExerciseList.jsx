import React from 'react';
import ExerciseCard from './ExerciseCard.jsx'; 

const ExerciseList = ({ exercises }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
      {exercises?.length > 0 ? (
        exercises.map((exercise) => (
          <ExerciseCard key={exercise.id} className="exercise-card" exercise={exercise} />
        ))
      ) : (
        <p className="text-center text-gray-800 p-4">Loading exercises...</p> 
      )}
    </div>
  );
};

export default ExerciseList;