import React, { createContext, useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';




import { QuizContextProvider } from './Quizcontext/QuizContextProvider'
import SlideBar from './Question_add/SlideBar'
import QuizComponent from './QuizComponent/QuizComponent'
// import QuizComponent from './QuizComponent/QuizComponent'

//////////////////////
import './css/Quiz_layout.css'

const Quiz_layout = () => {

  
  return (
    <>
      <QuizContextProvider>
        
        <div className="Quiz_layout_component">
          <QuizComponent  />
          
        </div>
      </QuizContextProvider>
    </>
  )
}

export default Quiz_layout