import React, { createContext, useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { baseUrl } from '../../../server_call';

const QuizContext = createContext();
export const QuizQuestionContext = ({ children }) => {
  const [prevarr, setarray] = useState([])

  useEffect(() => {
    const storedValue = localStorage.getItem('myArray');
    if (storedValue) {
      setarray(JSON.parse(storedValue));
    }
  }, []);
  const contextValue = {
    prevarr, setarray
  }

  return (
    <>
      <QuizContext.Provider value={contextValue}>
        {children}
      </QuizContext.Provider>

    </>
  )
}
export const useStateQuizAnsArray = () => useContext(QuizContext)
// export { QuizQuestionContext , QuizContext}