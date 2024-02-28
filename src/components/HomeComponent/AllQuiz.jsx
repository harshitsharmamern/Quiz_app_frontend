import React, { useState, useEffect } from 'react';
import './Dashboard.css'
import QuizCard from './QuizCard'
const AllQuiz = () => {
  const [quizData, setQuizData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
        try {
          const server = 'https://quiz-app-backend-g0rh.onrender.com'
            const response = await fetch(`${server}/api/auth/All_quiz`); // Adjust the API endpoint accordingly
            const data = await response.json();
            setQuizData(data.Quiz_data);
        } catch (error) {
            console.error('Error fetching quiz data:', error);
        }
    };

    fetchData();
}, []);

console.log(quizData);
  return (
    <>
       <div className='All_Quiz_dashboard'>
           <div className="Quizcard_grid">
           {quizData.map((quiz,index) => (
                    <QuizCard key={quiz._id} quiz={quiz} />
                ))}
           

           </div>
       </div>
    </>
  )
}

export default AllQuiz