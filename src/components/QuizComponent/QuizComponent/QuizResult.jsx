import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { baseUrl } from '../../../server_call';
import { useStateQuizAnsArray } from './QuizQuestionContext';

const QuizResult = () => {
  //   useState useEffect useNavigate
  const [score, setScore] = useState(0);

  const [Questionbank_q, setQuestionbank] = useState([]);
  // useParams baseUrl
  const { prevarr, setarray } = useStateQuizAnsArray()
  const { quizid } = useParams()
  const fetchData = async () => {
    try {
      const response = await fetch(`${baseUrl}/api/auth/quiz/${quizid}/questions`);
      const res = await response.json();
      console.log({ res });
      const question = await res.questions.questions
      setQuestionbank(question);

    } catch (error) {
      console.error('Error fetching quiz questions:', error);
    }
  };

  // setcurrentque(0)

  useEffect(() => {

    fetchData();
     localStorage.setItem('visitedResultPage', true);
     const visitedResultPage = localStorage.getItem('visitedResultPage')
    console.log({visitedResultPage});
  }, [])


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
  // const history = useHistory();
  // useHistory


  console.log({ prevarr });
  // const Navigate = useNavigate()
  const [loading, setLoading] = useState(true); // State to manage loading status
  useEffect(() => {
    // Simulate fetching data from the server (replace with actual fetch)
    setTimeout(() => {
      // const fetchedData = /* Logic to fetch data from the server */;
      // setQuizData(fetchedData);
      setLoading(false); // Set loading to false once data is fetched
    }, 2000); // Simulated delay of 2 seconds
  }, []);
  return (
    <>

      {/* function Showresult({Questionbank_q,prevarr,setresultshow,setStartQuiz}) { */}


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

              {loading ? (
                
                <div className=" "  style={{minHeight: "40vh"}}>
                <div className=" " style={{ justifyContent : "center", alignItems : "center"}} > Looding</div>
              </div>
              ) : (

                <>


                  {Questionbank_q.length > 0 && Questionbank_q.map((question, index) => (
                    <tr key={index} className={prevarr[index] === question.answer ? 'correct' : 'incorrect'}>
                      <td>{index + 1}</td>
                      <td>{question.question}</td>
                      <td>{question.options[optionsMap[prevarr[index]]]}</td>
                      <td>{question.options[optionsMap[question.answer]]}</td>
                    </tr>
                  ))}
                </>
              )}
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
        <button onClick={() => {
          Navigate('/user/home')
        }}> go back</button>
      </div>


    </>
  )
}

export default QuizResult