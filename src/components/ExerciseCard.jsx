import React from 'react';

const ExerciseCard = ({ exercise }) => {
  return (
    <div className="max-w-sm p-4 border border-gray-200 rounded-xl mb-4 shadow-xl bg-gray-900 text-white">
      <img src={exercise.gifUrl} alt={exercise.name} className=''/>
      <h3 className="text-xl font-bold mb-2 mt-2 uppercase">{exercise.name}</h3>
      <p className='text-md text-gray-400 hover:text-gray-200 hover:font-semibold'>Target &#127919; :  {exercise.target}</p>
      {exercise.secondaryMuscles && (
        <p className='text-md text-gray-400 hover:text-gray-200 hover:font-semibold'>Secondary Muscles &#128170;&#127995; :  {exercise.secondaryMuscles.join(', ')}</p>
      )}
      <p className='text-md text-gray-400 hover:text-gray-200 hover:font-semibold'>Equipment &#127947; : {exercise.equipment}</p>
    </div>
  );
};

export default ExerciseCard;