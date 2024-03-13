import React, { useState, useEffect } from 'react'
import QuizCard from '../../HomeComponent/QuizCard'
import Quiz_Add from '../css/Quiz_Add.css'
import { baseUrl } from '../../../server_call';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import QusestionTextAdd from './QusestionTextAdd';


const Qustion_add = () => {


  const initialQuizData = {
    quizName: '',
    topic: '',
    questions: [{
      question: "",
      options: { op1: '', op2: '', op3: '', op4: '' },
      answer: ''
    }],
  };
  const [quizData, setQuizData] = useState({
    quizName: '',
    topic: '',
    questions: [{
      question: "",
      options: { op1: '', op2: '', op3: '', op4: '' },
      answer: ''
    }],
  });


  const handleeditparent = async (quizId) => {

    try{
      console.log(quizId);
      const response = await fetch(`${baseUrl}/api/auth/edit/quiz/${quizId}`);
      const data = await response.json();
      const { quizName, topic, questions } = data.data;
  
      setQuizData({
        quizName: quizName,
        topic: topic,
        questions: questions
    });
    }catch{
      toast.warn("quiz name must be greater than = 3", {
        autoClose: 2000,
        pauseOnHover: false,
      });
    }
    // console.log(data.data.quizName);
    // console.log({ data });
    // try {
    //   const response = await fetch(`${baseUrl}/api/auth/edit/quiz/${quizId}`);
    //   setQuizData(data); // Assuming the response contains the quiz data in the correct format
    // } catch (error) {
    //   console.error('Error fetching quiz data:', error);
    // }
    // };

  }

  const handleInputChange = (event, questionIndex) => {
    const { name, value } = event.target;

    if (name === 'question') {
      //   console.log(value);

      setQuizData((prev) => {
        const updatedQuestions = [...prev.questions];
        console.log(updatedQuestions[questionIndex]);
        updatedQuestions[questionIndex].question = value
        //  {
        //   ...updatedQuestions[questionIndex],
        //   question: value
        // };

        return {
          ...prev,
          questions: updatedQuestions
        };
      });
    } else if (name === 'answer') {
      //////////////////////////////answer
      setQuizData((prev) => {
        let updatedQuestions = [...prev.questions]
        updatedQuestions[questionIndex].answer = value

        return {
          ...prev,
          questions: updatedQuestions
        };
      })
    }
    else {
      setQuizData({
        ...quizData,
        [name]: value
      });
    }
  };
  //////////////////////////////////////////////////////////////////
  const addQuestion = () => {
    setQuizData((prev) => ({
      ...prev,
      questions: [
        ...prev.questions,
        { question: '', options: { op1: '', op2: '', op3: '', op4: '' }, answer: '' },
      ],
    }));
  };
  ///////////////////////////////////////////////////////////////////////
  const handleOptionChange = (e, qindex, oindex) => {
    const { name, value } = e.target;

    setQuizData((prev) => {
      const updatedQuestions = [...prev.questions];
      updatedQuestions[qindex].options[name] = value;

      return {
        ...prev,
        questions: updatedQuestions
      };
    });
  };

  const handlesubmit = async (event) => {
    event.preventDefault();
    // console.log({ quizData, q: quizData.quizName })
    if (quizData.quizName.length < 3) {
      toast.warn("quiz name must be greater than = 3", {
        autoClose: 2000,
        pauseOnHover: false,
        
      }); return 
    }
    else if (quizData.topic.length < 3) {
      toast.warn("topic name must be greater than = 3", {
        autoClose: 2000,
        pauseOnHover: false,

      })
    }
    //                      {Object.keys(question.options).map((option, optionIndex) => (
    var flag=true
    quizData.questions.forEach((q, index) => {
      if (q.question.trim().length === 0) {
        flag = false
        toast.warn(`Question ${index + 1} is empty`, {
          autoClose: 2000,
          pauseOnHover: false,
          
        });
        return
      }

      Object.keys(q.options).forEach((op, oindex) => {

        if (q.options[op].trim().length === 0) {
          flag = false
          toast.warn(`Option ${oindex + 1} of question ${index + 1} is missing`, {
            autoClose: 2000,
            pauseOnHover: false,
          }); return
        }
      });
    });

    // console.log(quizData);
    // console.log("here");
    if(flag)
    try {
      // const server = 'https://quiz-app-backend-g0rh.onrender.com'
      // baseUrl
      const response = await fetch(`${baseUrl}/api/auth/add-quiz`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(quizData),
      });
      // console.log(res);
      const res = await response.json(); // Await the parsing of response JSON
      console.log(res);
      if (res.status) {
        console.log('Quiz added successfully');
        setTimeout(()=>{

          window.location.reload();
        },1000)
        toast.success('Quiz Add successfuly!', {
          autoClose: 2000,
          
          style: {
            background: 'green', // Set the background color to red
            color: 'white', // Set the text color to white
          },
          pauseOnHover: false,
          draggable: true,
        });

        // Redirect or perform additional actions after adding the quiz
      } else {
        console.error('Failed to add quiz');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const deletequestion = (e, queindex) => {
    setQuizData((prev) => {
      const updatedQuestions = [...prev.questions];
      updatedQuestions.splice(queindex, 1); // Remove the question at the specified index
      return { ...prev, questions: updatedQuestions }; // Update the state with the new array of questions
    });
  }

  const [Add_Question_one, setAdd_Question_one] = useState(true)
  const Navigate = useNavigate()
  return (
    <>
      <div className="whole-body">
        <button onClick={() => {
          Navigate('/user/home')
        }}> 🐘 back button </button>
        <div className="first-container">


          <div className="container">

            <h2 className='Add_quiz_heading'>Add Quiz</h2>

            <button onClick={() => {
              setQuizData(initialQuizData)
            }}> clear form </button>


            <div className="button-form">

              <div className={`first-btnn  ${Add_Question_one ? 'first-btn-open' : ''}`}>
                <button
                  onClick={() => setAdd_Question_one(true)}
                >

                  form-data
                </button>
              </div>
              <div className={`second-btn ${Add_Question_one == false ? 'first-btn-open' : ''}`}>
                <button
                  onClick={() => setAdd_Question_one(false)}

                >
                  text-data
                </button>
              </div>
            </div>
            {Add_Question_one ? (<>


              <form onSubmit={handlesubmit}>

                <div className="Quiz_name">
                  <h6>
                    Quiz Name:
                  </h6>

                  <input
                    placeholder='Java'
                    type="text" name="quizName" value={quizData.quizName}
                    onChange={(e) => handleInputChange(e)} required
                    className="input-field"
                  />

                </div>
                {/* </label> */}
                {/* <br /> */}
                <div className="Quiz_name">
                  <h6>
                    Topic:
                  </h6>


                  <input
                    placeholder='Basic Java'
                    type="text" name="topic" value={quizData.topic}
                    onChange={(e) => handleInputChange(e)} required
                    className="input-field"
                  />

                </div>

                <hr />


                {/* Questions inputs */}



                <div className="Adding_quetion">



                  {quizData.questions.map((question, index) => (
                    <div className='Question_field' key={index}>

                      <div className="first-question">

                        <h6>  Question {index + 1}:  </h6>
                        <textarea className='Question_input_box' name="question" value={question.question}
                          onChange={(e) => handleInputChange(e, index)} required />
                      </div>

                      <br />

                      {/* Options inputs */}
                      <div className="option-box">

                        {Object.keys(question.options).map((option, optionIndex) => (
                          <div className="Adding_options" key={optionIndex}>

                            <div className="option-name">
                              option {optionIndex + 1} :

                            </div>

                            <input
                              className='Option_input-field'
                              type="text"
                              name={option}
                              value={question.options[option]}
                              onChange={(e) => handleOptionChange(e, index, option)}
                              required
                            />
                            {/* </label> */}
                          </div>
                        ))}
                      </div>
                      <br />

                      <div className="Answer-box">
                        <div className="choose-answer">
                          <h6>
                            Correct Answer:

                          </h6>

                          <select
                            name="answer"
                            value={question.answer}
                            onChange={(e) => handleInputChange(e, index)}
                            required
                          >
                            {/* <option value="">Select Correct Answer</option> */}
                            <option value="a">Option 1</option>
                            <option value="b">Option 2</option>
                            <option value="c">Option 3</option>
                            <option value="d">Option 4</option>
                          </select>
                        </div>




                        <span>

                          <button onClick={(e) => deletequestion(e, index)}>delete</button>
                        </span>
                      </div>

                      <hr />
                    </div>
                  ))}
                </div>
                <button type="button" onClick={addQuestion}>
                  Add Question
                </button>
                <hr />

                {/* Submit button */}
                <button onClick={handlesubmit}
                  className='Add_Quiz'
                  type="submit">Add Quiz</button>
              </form>

              <hr />
            </>)
              : (<>

                <div className="second-container">

                  <QusestionTextAdd />
                </div>

              </>)}

          </div>


        </div>


        <Call_all_quiz handleeditparent={handleeditparent} />
        <ToastContainer />

      </div>
    </>
  );
};

export default Qustion_add



const Call_all_quiz = ({ handleeditparent }) => {
  const [quizData, setQuizData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const server = 'https://quiz-app-backend-g0rh.onrender.com'
        // https://quiz-app-backend-g0rh.onrender.com
        //  const baseUrl = 'https://quiz-app-backend-g0rh.onrender.com/api';


        const response = await fetch(`${baseUrl}/api/auth/All_quiz`); // Adjust the API endpoint accordingly
        const data = await response.json();
        setQuizData(data.Quiz_data);
      } catch (error) {
        console.error('Error fetching quiz data:', error);
      }
    };

    fetchData();
  }, []);
  return (<>
    <div className='All_Quiz_dashboard'>
      <div className="Quizcard_grid">
        {quizData.map((quiz, index) => (
          <QuizCard handleeditparent={handleeditparent} admin="admin" key={quiz._id} quiz={quiz} />
        ))}


      </div>
    </div>
  </>)
}



