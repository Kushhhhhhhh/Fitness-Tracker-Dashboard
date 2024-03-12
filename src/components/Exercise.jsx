import React, { useState, useEffect } from 'react'
import axios from 'axios';
import ExerciseList from './ExerciseList.jsx';

const LeftArrowIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="h-5 w-5"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
        />
    </svg>
);

const RightArrowIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="h-5 w-5"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
        />
    </svg>
);

const Exercise = () => {

    const options = {
        method: 'GET',
        url: 'https://exercisedb.p.rapidapi.com/exercises',
        params: { limit: '100' },
        headers: {
            'X-RapidAPI-Key': '118371d6a9msh2c16012bc5f7d2bp11c7c8jsn99e262dcb364',
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
    };

    const fetchData = async () => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await axios.request(options);
            setExercises(response.data);
        } catch (error) {
            console.error(error);
            setError(error.message || 'An error occurred while fetching exercises.');
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const [exercises, setExercises] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;

    const indexOfFirstExercise = (currentPage - 1) * itemsPerPage;
    const indexOfLastExercise = indexOfFirstExercise + itemsPerPage - 1;
    const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise + 1);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(exercises.length / itemsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <div className="w-full max-w-5xl mx-auto">
            {isLoading ? (
                <p className="text-center p-4 text-violet-800 font-semibold">Loading exercises...</p>
            ) : error ? (
                <p className="text-center p-4 text-red-500">{error}</p>
            ) : (
                <>
                <h2 className="text-4xl lg:text-6xl font-bold mb-4 text-center bg-gradient-to-l from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text mt-4">Exercises</h2>
                    <ExerciseList exercises={currentExercises} />

                    <div className="flex justify-center mt-4">
                        <ul className="inline-flex items-center p-0 rounded-md shadow-sm">
                            <li
                                className={`px-3 py-2 text-gray-700 font-medium hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${currentPage === 1 ? 'bg-blue-100 text-blue-700' : ''
                                    }`}
                                onClick={() => paginate(currentPage - 1)}
                            >
                                <LeftArrowIcon />
                            </li>

                            {pageNumbers.map((pageNumber) => (
                                <li
                                    key={pageNumber}
                                    className={`px-3 py-2 text-gray-700 font-medium hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${currentPage === pageNumber ? 'bg-blue-100 text-blue-700' : ''
                                        }`}
                                    onClick={() => paginate(pageNumber)}
                                >
                                    {pageNumber}
                                </li>
                            ))}

                            <li
                                className={`px-3 py-2 text-gray-700 font-medium hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${currentPage === pageNumbers.length ? 'bg-blue-100 text-blue-700' : ''
                                    }`}
                                onClick={() => paginate(currentPage + 1)}
                            >
                                <RightArrowIcon />
                            </li>
                        </ul>
                    </div>
                </>
            )}
        </div>
    )
}

export default Exercise