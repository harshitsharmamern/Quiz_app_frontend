import React, { useState, useEffect, useContext } from 'react';
import './Dashboard.css'
import QuizCard from './QuizCard'
import { baseUrl } from '../../server_call';
import { UserContext, UserContextProvider } from '../user/usercontext/UserContext';
const AllQuiz = () => {
  // const [quizData, setQuizData] = useState([]);
  const {quizData} = useContext(UserContextProvider)
    //  const {quizData} = UserContext(UserContextProvider)
//   useEffect(() => {
//     const fetchData = async () => {
//         try {
//           // baseUrl
//           // const server = 'https://quiz-app-backend-g0rh.onrender.com'
//             const response = await fetch(`${baseUrl}/api/auth/All_quiz`); // Adjust the API endpoint accordingly
//             const data = await response.json();
//             setQuizData(data.Quiz_data);
//         } catch (error) {
//             console.error('Error fetching quiz data:', error);
//         }
//     };

//     fetchData();
// }, []);

console.log({quizData});
  return (
    <>
       <div className='All_Quiz_dashboard'>
           <div className="Quizcard_grid">
           { quizData.map((quiz,index) => (
                    <QuizCard key={quiz._id} quiz={quiz} />
                ))}
           

           </div>
       </div>
    </>
  )
}

export default AllQuiz