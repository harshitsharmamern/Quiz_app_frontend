import React, { useState,useEffect } from 'react'
import QuizCard from '../../HomeComponent/QuizCard'

const Qustion_add = () => {
    const [quizData, setQuizData] = useState({
        quizName: '',
        topic: '',
        questions: [{
          question: "",
          options: { op1: '', op2: '', op3: '', op4: '' },
          answer: ''
        }],
      });


      const handleeditparent=async(quizId)=>{

          try {
            const response = await fetch(`http://localhost:5000/api/auth/edit/quiz/${quizId}`);
            const data = await response.json();
            setQuizData(data); // Assuming the response contains the quiz data in the correct format
          } catch (error) {
            console.error('Error fetching quiz data:', error);
          }
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
        } else if(name==='answer'){
             //////////////////////////////answer
             setQuizData((prev) => {
                let updatedQuestions = [...prev.questions]
                updatedQuestions[questionIndex].answer = value

                return {
                    ...prev,
                    questions: updatedQuestions
                  };
              } )
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
        console.log( quizData)

        try {
          const server = 'https://quiz-app-backend-g0rh.onrender.com'

          const response = await fetch(`${server}/api/auth/add-quiz`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(quizData),
          });
    
          if (response.ok) {
            console.log('Quiz added successfully');
            window.location.reload();

            // Redirect or perform additional actions after adding the quiz
          } else {
            console.error('Failed to add quiz');
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };

      const deletequestion=(e,queindex)=>{
        setQuizData((prev) => {
            const updatedQuestions = [...prev.questions];
            updatedQuestions.splice(queindex, 1); // Remove the question at the specified index
            return { ...prev, questions: updatedQuestions }; // Update the state with the new array of questions
        });
      }
    
      return (
        <div>
          <h2>Add Quiz</h2>
          
          <form onSubmit={handlesubmit}>
            {/* Quiz Name and Topic inputs */}
            <label>
              Quiz Name:
              <input type="text" name="quizName" value={quizData.quizName}
               onChange={(e) => handleInputChange(e)} required />
            </label>
            <br />
            <label>
              Topic:
              <input type="text" name="topic" value={quizData.topic}
               onChange={(e) => handleInputChange(e)} required />
            </label>
            <hr />
    
            {/* Questions inputs */}
            {quizData.questions.map((question, index) => (
              <div key={index}>
                <label>
                  Question {index + 1}:
                  <textarea name="question" value={question.question}
                   onChange={(e) => handleInputChange(e, index)} required />
                </label>
                <br />
    
                {/* Options inputs */}
                {Object.keys(question.options).map((option, optionIndex) => (
                  <label key={optionIndex}>
                    {option.toUpperCase()}:
                    <input
                      type="text"
                      name={option}
                      value={question.options[option]}
                      onChange={(e) => handleOptionChange(e, index, option)}
                      required
                    />
                  </label>
                ))}
                <br />
    
                <label>
                  Correct Answer:
                  <input type="text" name="answer" value={question.answer} onChange={(e) => handleInputChange(e, index)} required />
                </label>
                <span>

                <button onClick={(e)=>deletequestion(e,index)}>delete</button>
                </span>
                <hr />
              </div>
            ))}
            <button type="button" onClick={addQuestion}>
              Add Question
            </button>
            <hr />
    
            {/* Submit button */}
            <button onClick={handlesubmit} type="submit">Add Quiz</button>
          </form>
          <hr />

          <Call_all_quiz handleeditparent={handleeditparent}/>
        </div>

      );
    };
  
export default Qustion_add



const Call_all_quiz=({handleeditparent})=>{
  const [quizData, setQuizData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
        try {
          const server = 'https://quiz-app-backend-g0rh.onrender.com'
                       // https://quiz-app-backend-g0rh.onrender.com
        //  const baseUrl = 'https://quiz-app-backend-g0rh.onrender.com/api';


            const response = await fetch(`${server}/api/auth/All_quiz`); // Adjust the API endpoint accordingly
            const data = await response.json();
            setQuizData(data.Quiz_data);
        } catch (error) {
            console.error('Error fetching quiz data:', error);
        }
    };

    fetchData();
}, []);
  return(<>
      <div className='All_Quiz_dashboard'>
           <div className="Quizcard_grid">
           {quizData.map((quiz,index) => (
                    <QuizCard handleeditparent={handleeditparent}admin="admin" key={quiz._id} quiz={quiz} />
                ))}
           

           </div>
       </div>
  </>)
}



