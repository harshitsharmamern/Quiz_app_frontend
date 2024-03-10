import React, { useEffect, useState } from 'react'
import { baseUrl } from '../../../server_call'
import { useParams } from 'react-router-dom';

const QuizStart = () => {
    const [currentque, setcurrentque] = useState(0);  //question number state
    const [Questionbank,setQuestionbank] = useState([]);
    
    
    const {quizid} = useParams()
    const fetchData = async () => {
      try {
        const response = await fetch(`${baseUrl}/api/auth/quiz/${quizid}/questions`);
        const  res = await response.json();
        console.log({res});
        const question = await res.questions.questions
        setQuestionbank(question);
        
      } catch (error) {
        console.error('Error fetching quiz questions:', error);
      }
    };
    useEffect(() => {
      // setcurrentque(0)
      fetchData();
    }, []);
    function handlesubmit(){

    }
// console.log({Questionbank});
  return (
    <>
    {Questionbank &&
     (<> <Box question_data={Questionbank[currentque]}/> 

     <button>ascasas</button>
      </>)
}
            <div onClick={handlesubmit} className='YEh_hai_sumbit_button'>
                <h4>
                  submitascs
                </h4>
              </div>
       </>
  )
}

const Box =({question_data})=>{

    return (<>
         question : {question_data.question}
    </>)
}

export default QuizStart