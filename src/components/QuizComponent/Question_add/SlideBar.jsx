import React, { useContext } from 'react'
import Questions from './QuestionBank'
import { QuizContext } from '../Quizcontext/QuizContextProvider'

const SlideBar = () => {

  const { setcurrentque} = useContext(QuizContext)

  const handle_question_change=(e,id)=>{
    setcurrentque(id-1)
  }


  return (
    <>
      <div>
        <ul>
          {Questions.map((data, id) => {
            return (
              <li onClick={(e)=>handle_question_change(e,data.id)}>{data.id}</li>
            )
          })
        }
       </ul>



      </div>
    </>
  )
}

export default SlideBar