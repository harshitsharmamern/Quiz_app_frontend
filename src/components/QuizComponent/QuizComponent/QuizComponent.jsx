import { React, useContext, useState,useEffect } from 'react';
import { QuizContext } from '../Quizcontext/QuizContextProvider';

//////////////questionabnk
// import Questions from '../Question_add/QuestionBank';


import '../css/Quiz_layout.css'
import QuestionList from './QuestionList';
import Clock from '../Question_add/Clock';
import {  useNavigate, useParams } from 'react-router-dom';
import { useStateQuizAnsArray } from './QuizQuestionContext';

function QuizStartButton() {

  const { Questionbank ,onequizdetail } = useContext(QuizContext);
  // const Question = Questionbank_q

  console.log({Questionbank,componenet : "startbutton"});
  const {quizid} = useParams()
  const Navigate = useNavigate()
  const handelStart = () => {
    // localStorage.setItem('quiz_start_btn_state',true)

    // startQuizAction(true) /Quiz/:quizid/start
    Navigate(`/Quiz/${quizid}/start`)
  }
  return (
    <>
      <div style={styles.container}>
      <div style={styles.detailsContainer}>
        <div style={styles.topic}>Topic: {onequizdetail.topic}</div>
        <div style={styles.syllabus}>Syllabus: {onequizdetail.syllabus}</div>
      </div>
      <div style={styles.buttonContainer}>
        <p style={styles.instructions}>Please review the quiz details below before starting the quiz:</p>
        <button style={styles.startButton} onClick={handelStart}>Start Quiz</button>
      </div>
    </div>
    </>
  )
}
const QuizComponent = () => {
  ///QuestionBank -> quiz context mai fetch request run ho rahi hai /auth/{quizid}/question useefect main
  //waha se question bank aaraha hai
  const { Questionbank_q ,onequizdetail } = useContext(QuizContext);
  ////
  // const [currentque, setcurrentque] = useState(0);  //question number state
  
  // const [prevarr, setarray] = useState([])
  const { setarray } = useStateQuizAnsArray();
  useEffect(() => {
    // Clear the prevarr state when the component mounts
    setarray([]);
  }, []);
  
  // var startquizi = localStorage.getItem('quiz_start_btn_state')
  // var resultshowi = localStorage.getItem('quiz_start_btn_state').resultshow

  // startquiz : false , resultshow : false
  const [startQuiz,setStartQuiz] = useState(false)
  const [resultshow, setresultshow] = useState(false)
  // const [score, setscore] = useState(0)
  // const score=0;
  const Question = Questionbank_q
  // console.log(prevarr);
  const handlesubmit = () => {
    localStorage.setItem('quiz_start_btn_state',{resultshow : true})
    setresultshow(true)
  }
  
  
  return (
    <>
<QuizStartButton  />

      {/* {resultshow ? (
        <Showresult Questionbank_q={Questionbank_q} prevarr={prevarr} setresultshow={setresultshow} 
        setStartQuiz={setStartQuiz}/>
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
      )} */}
    </>
  );
};



// import '../css/Quiz_layout.css'

function Showresult({Questionbank_q,prevarr,setresultshow,setStartQuiz}) {
  
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
  
  const Navigate = useNavigate()
  
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
    <div>
      {/* retake this test
      <button onClick={
        ()=>{
            setresultshow(false)
            setStartQuiz(false)
        }
      }> click here </button> */}

      <br />
      go back to home page 
      <button onClick={()=>{
        Navigate('/user/home')
      }}> go back</button>
    </div>
    </>
  )
}


export default QuizComponent;

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
  },
  detailsContainer: {
    marginBottom: '20px',
    textAlign: 'center',
  },
  topic: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  syllabus: {
    fontSize: '16px',
    marginBottom: '20px',
  },
  buttonContainer: {
    textAlign: 'center',
  },
  instructions: {
    marginBottom: '10px',
  },
  startButton: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    outline: 'none',
  },
};
