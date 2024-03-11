import Questions from '../Question_add/QuestionBank';
import { React, useContext, useEffect, useRef, useState } from 'react';
import { QuizContext } from '../Quizcontext/QuizContextProvider';
import Clock from '../Question_add/Clock';
import { baseUrl } from '../../../server_call';
import { useNavigate, useParams } from 'react-router-dom';
import { useStateQuizAnsArray } from './QuizQuestionContext';



import TimerContext from '../Quizcontext/TimerContext';


// useRef

const Box = ({ question_data, setarray, currentque, handlesubmit, prevarr }) => {
  const [ans_select, set_ans_select] = useState("")
  const [time, setTime] = useState(() => {
    const storedTime = JSON.parse(localStorage.getItem('timer'));
    return storedTime || { minutes: 0, seconds: 20 };
  });
  // const 
  // const {time} = useContext(TimerContext)
  console.log(time);
  const timeRef = useRef({ minutes: time.minutes, seconds: time.seconds });


  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentTime = timeRef.current;
      if (currentTime.minutes === 0 && currentTime.seconds === 0) {
        clearInterval(intervalId);
        handlesubmit();
      } else {
        const newTime = {
          minutes: currentTime.seconds === 0 ? currentTime.minutes - 1 : currentTime.minutes,
          seconds: currentTime.seconds === 0 ? 59 : currentTime.seconds - 1
        };
        timeRef.current = newTime;
        setTime(newTime);
        localStorage.setItem('timer', JSON.stringify(newTime)); // Update timer value in local storage
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [handlesubmit]);






  const handleOptionChange = (que_id, ansget, op) => {
    // console.log(e.target);
    setarray((prev) => {
      let update = [...prev]
      update[que_id] = op
      return update
    })
    // resultArray[que_id] = Questions[que_id].Answer

    set_ans_select(ansget)

  };

  return (
    <>
      {/* <Clock */}
      {/* Timer: {String(timerValue.minutes).padStart(2, '0')}:{String(timerValue.seconds).padStart(2, '0')} */}
        {/* {String(time.minutes).padStart(2, '0')}:{String(time.seconds).padStart(2, '0')} */}
        {String(time.minutes).padStart(2, '0')}:{String(time.seconds).padStart(2, '0')}

      {/* <Clock handlesubmit={handlesubmit} timeRef={timeRef}/> */}
      {/* <Clock /> */}


      <div className='EK_question_dikhana_hai' key={currentque}>
        <div className="question_name">{currentque + 1} {")        "}{question_data.question}</div>
        <div className="options_name">
          <div
            className={`option_hai
                ${ans_select == question_data.options.op1 ? "option_hai_select" : ""}
                // ${question_data.options.op1 == prevarr[currentque] ? "option_hai_select" : ""}
                ${prevarr[currentque] == 'a' ? "option_hai_select" : ""}

              `}
            id="option1"
            onClick={() => handleOptionChange(currentque, question_data.options.op1, 'a')}
          >
            {question_data.options.op1}
          </div>
          <div
            className={`option_hai 
                ${ans_select == question_data.options.op2 ? "option_hai_select" : ""}
                // ${question_data.options.op2 == prevarr[currentque] ? "option_hai_select" : ""}
                ${prevarr[currentque] == 'b' ? "option_hai_select" : ""}

              `}
            id="option2"
            onClick={() => handleOptionChange(currentque, question_data.options.op2, 'b')}
          >
            {question_data.options.op2}
          </div>
          <div
            className={`option_hai 
                ${ans_select == question_data.options.op3 ? "option_hai_select" : ""}
                // ${question_data.options.op3 == prevarr[currentque] ? "option_hai_select" : ""}
                ${prevarr[currentque] == 'c' ? "option_hai_select" : ""}

              `}
            id="option3"
            onClick={() => handleOptionChange(currentque, question_data.options.op3, 'c')}
          >
            {question_data.options.op3}
          </div>
          <div
            className={`option_hai 
                ${ans_select == question_data.options.op4 ? "option_hai_select" : ""}
                // ${question_data.options.op4 == prevarr[currentque] ? "option_hai_select" : ""}
                ${prevarr[currentque] == 'd' ? "option_hai_select" : ""}

                `}
            id="option4"
            onClick={() => handleOptionChange(currentque, question_data.options.op4, 'd')}
          >
            {question_data.options.op4}
          </div>

        </div>
      </div>

    </>
  );

}

const QuestionList = () => {
  // const [resultArray, setresultArray] =  useState([])
  // const { Questionbank_q,setQuizScore, currentque, setcurrentque } = useContext(QuizContext);
  // console.log(QuizState.score);
  const [currentque, setcurrentque] = useState(0);  //question number state

  const [Questionbank, setQuestionbank] = useState([]);

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
  useEffect(() => {
    const visitedResultPage = localStorage.getItem('visitedResultPage');
    console.log({visitedResultPage});
    if (visitedResultPage==='true') {
      console.log("inside true of visitedResultPage");
      localStorage.removeItem('visitedResultPage');
      
      Navigate('/user/home');
      // Remove the flag from local storage
    }
    fetchData();
  }, []);
  const Navigate = useNavigate()
  function handlesubmit() {
    localStorage.setItem('myArray', JSON.stringify(prevarr));

    Navigate(`/${quizid}/user-result`)
  }

  // const [prevarr, setarray] = useState([])
  // const {prevarr, setarray} = useContext(QuizQuestionContext)
  // const prearrstate = useContext(QuizQuestionContext)
  const { prevarr, setarray } = useStateQuizAnsArray()
  // console.log(prearrstate);
  console.log(prevarr);
  // console.log({quizfirstquestion : Questionbank});





  const [loading, setLoading] = useState(true); // State to manage loading status
  useEffect(() => {
    // Simulate fetching data from the server (replace with actual fetch)
    setTimeout(() => {
      // const fetchedData = /* Logic to fetch data from the server */;
      // setQuizData(fetchedData);
      setLoading(false); // Set loading to false once data is fetched
    }, 2000); // Simulated delay of 2 seconds
  }, []);
  

  // console.log("quiz list component");
  return (
    <>
      <div className="container" style={{}}>
  
      <div className=''>
        {loading ? (
          <div className=" "  style={{minHeight: "40vh"}}>
            <div className=" " style={{ justifyContent : "center", alignItems : "center"}} > Looding</div>
          </div>
        ) : (
          // <AllQuiz />

       <>
      

        {Questionbank.length > 0 &&
          (<>

            <Box
              question_data={Questionbank[currentque]}
              setarray={setarray}
              prevarr={prevarr}
              // Questionbank={Questionbank}

              // prevarr={prevarr}
              // setarray={setarray}
              currentque={currentque}
              handlesubmit={handlesubmit}
            />

          </>
          )
        }
         </>
        )}
        </div>
        <div className='is_mai_prev_next_btn_hai' >

          {currentque == 0 ? <div> prev</div> :
            <div className='is_mai_prev_next_btn_hai_prev'
              onClick={() => setcurrentque(currentque - 1)}
            >
              prev
            </div>}

          {currentque == Questionbank.length - 1 ? <div> next</div> :
            <div className='is_mai_prev_next_btn_hai_next'
              onClick={() => {
                setcurrentque(currentque + 1)
              }
              }
            >next</div>}
        </div>

      </div>
      <div onClick={handlesubmit} className='container YEh_hai_sumbit_button'>
        <h4>
          submit
        </h4>
      </div>
    </>
  )
}

export default QuestionList