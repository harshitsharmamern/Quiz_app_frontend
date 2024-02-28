import { React, useContext, useState,useEffect } from 'react';
import { QuizContext } from '../Quizcontext/QuizContextProvider';

//////////////questionabnk
// import Questions from '../Question_add/QuestionBank';


import '../css/Quiz_layout.css'
import QuestionList from './QuestionList';
import Clock from '../Question_add/Clock';

function QuizStartButton({ startQuizAction }) {


  const handelstart = () => {
    startQuizAction(true)
  }
  return (
    <>

      <button onClick={handelstart}>start</button>
    </>
  )
}
const QuizComponent = () => {

  const { Questionbank_q,startQuiz, setStartQuiz } = useContext(QuizContext);
  const [prevarr, setarray] = useState([])
  const [resultshow, setresultshow] = useState(false)
  // const [score, setscore] = useState(0)
  // const score=0;
  const Question = Questionbank_q
// console.log({ Question});
  console.log(prevarr);
  const handlesubmit = () => {
   
    setresultshow(true)
  }

  return (
    <>
      {resultshow ? (
        <Showresult Questionbank_q={Questionbank_q} prevarr={prevarr} />
      ) : (
        !startQuiz ? (
          <QuizStartButton startQuizAction={setStartQuiz} />
        ) : (
          <>
            <div className="container" style={{}}>
              <QuestionList prevarr={prevarr} setarray={setarray}
                handlesubmit={handlesubmit}
              />
              <div onClick={handlesubmit} className='YEh_hai_sumbit_button'>
                <h4>
                  submit
                </h4>
              </div>
            </div>
          </>
        )
      )}
    </>
  );
};



// import '../css/Quiz_layout.css'
function Showresult({Questionbank_q,prevarr}) {

  const [score, setScore] = useState(0);
  const optionsMap = {
    'a': 'op1',
    'b': 'op2',
    'c': 'op3',
    'd': 'op4'
  };
  // Calculate score and update state
  useEffect(() => {
    // Calculate score and update state once after the component mounts
    let newScore = 0;
    for (let i = 0; i < Questionbank_q.length; i++) {
      if (Questionbank_q[i].answer === prevarr[i]) {
        newScore += 1;
      }
    }

    setScore(newScore);
  }, [Questionbank_q, prevarr]);


  return (
    <>
      {/* result aapka yeh hai : {score} */}
      <div>
      <h2>Quiz Result</h2>
      <p>Score: {score}</p>

      <table className="result-table">
        <thead>
          <tr>
            <th>Question Number</th>
            <th>Question</th>
            <th>User Answer</th>
            <th>Correct Answer</th>
          </tr>
        </thead>
        <tbody>
          {Questionbank_q.map((question, index) => (
            <tr key={index} className={prevarr[index] === question.answer ? 'correct' : 'incorrect'}>
              <td>{index + 1}</td>
              <td>{question.question}</td>
              <td>{question.options[optionsMap[prevarr[index]]]}</td>
              <td>{question.options[optionsMap[question.answer]]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    
    </div>
    </>
  )
}

export default QuizComponent;