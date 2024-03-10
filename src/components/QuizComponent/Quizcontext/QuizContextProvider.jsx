import React, { createContext, useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { baseUrl } from '../../../server_call';

// Create a context
const QuizContext = createContext();

// Create a context provider component
const QuizContextProvider = ({ children }) => {
  const [Questionbank,setQuestionbank] = useState([]);

  const { quizid } = useParams();
 
const [onequizdetail,setonequizdetails] = useState({
  topic : "",
  syllabus : ""
})
  useEffect(() => {
    // Define an asynchronous function inside the useEffect
    const fetchData = async () => {
      try {
        // const baseUrl = 'https://quiz-app-backend-g0rh.onrender.com/api';
// baseUrl
        const response = await fetch(`${baseUrl}/api/auth/quiz/${quizid}/questions`);
        const  res = await response.json();
        // console.log({res});
        setQuestionbank(res.questions.questions);
        // settopic(res.questions.quizName)
        setonequizdetails({
          topic : res.questions.quizName ,
          syllabus : res.questions.topic
        })
        // console.log('Questions for quiz:', questions);
        // Handle the questions as needed
      } catch (error) {
        console.error('Error fetching quiz questions:', error);
      }
    };

    // Immediately invoke the async function
    fetchData();
  }, []);







  const [currentque, setcurrentque] = useState(0);  //question number state
  const [startQuiz,setStartQuiz] = useState(false) //quiz start state
  
  // const [currentque_slidebar,  set_currentque_slidebar] = useState(currentque)
  const [QuizScore, setQuizScore] = useState(0);
  // console.log(QuizScore);
  // const updateScore = (newScore) => {
  //   setQuizState((prevState) => ({
  //     ...prevState,
  //     score: newScore,
  //   }));
  // };
  console.log({Questionbank,onequizdetail});
  const Questionbank_q = Questionbank
  console.log({Questionbank_q, component : "quizprovider"})
  const contextValue = {
    onequizdetail,
    Questionbank,
    Questionbank_q,
    QuizScore, setQuizScore,
    currentque, setcurrentque,
    startQuiz,setStartQuiz
  };

  // console.log(Questionbank.questions);
  // Provide the context value to the children components
  return (
    <QuizContext.Provider value={contextValue}>
      
      {children}
    </QuizContext.Provider>
  );
};

// Create a custom hook to easily access the context in functional components
// const useQuizContext = () => {
//   const context = useContext(QuizContext);
//   if (!context) {
//     throw new Error('useQuizContext must be used within a QuizContextProvider');
//   }
//   return context;
// };

export { QuizContextProvider ,QuizContext};