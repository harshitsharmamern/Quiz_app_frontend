import React from 'react';
import { baseUrl } from '../../server_call';
import '../QuizComponent/css/QuizCard.css'

const QuizCard = ({ handleeditparent, admin, quiz }) => {

    // baseUrl
    const handledelete = async (id) => {
        console.log(`delete ${id}`);
        // const server = 'https://quiz-app-backend-g0rh.onrender.com'

        const url = `${baseUrl}/api/auth/delete/quiz/${id}`
        // const response = await fetch('http://localhost:5000/api/auth/All_quiz'); // Adjust the API endpoint accordingly

        const res = await fetch(`${url}`, {
            method: 'DELETE'
        })
        const resdata = await res.json()
        window.location.reload();

        console.log(resdata);
    }
    const handleedit = (id) => {
        handleeditparent(id); // Call handleeditparent function with the quiz ID
    }    // const handleeditparent=async(id)=>{

    //     const url = `http://localhost:5000/api/auth/edit/quiz/${id}`
    //     const response = await fetch(url); // Adjust the API endpoint accordingly
    //     const data = await response.json();
    //     console.log(data);
    //     // console.log(data.data);
    // }
    function handleendterquiz() {
        // localStorage.setItem('quiz_start_btn_state',  false );
        // quiz_start_btn_state
    }
    return (
        <>
            {
                admin === "admin" ? <>
                    <div className="card-body border-box-hover">

                        <h5 className="card-title">{quiz.quizName}</h5>
                        <h6 className="card-subtitle mb-2 text-body-secondary">syllabus</h6>
                        <p className="card-text">
                            {quiz.topic}
                            <span>No. of questions: {quiz.questions.length}</span>
                        </p>
                        <div className="button_ko_wrap_krna_hai mt-3 ">


                            <button
                                onClick={() => handledelete(quiz._id)}

                                className='btn btn-outline-primary mr-2'>delete
                            </button>
                            <button onClick={() => handleedit(quiz._id)}
                                className='mr-2'>edit
                            </button>

                        </div>

                    </div>

                </> : (

                    <>

                        <div className="user_Quiz_card " style={{ width: '18rem' }}>
                            <div className="card-body">
                                <h5 className="card-title">{quiz.quizName}</h5>
                                <div className="syllabus-define">
                                    {/* <h6 className=""> */}
                                    syllabus :
                                    {/* </h6> */}

                                    <div className="card-text">
                                        {quiz.topic}
                                    </div>
                                </div>
                                <span>No. of questions: <span style={{ color: "red" }}>{quiz.questions.length}  </span> </span>
                                <br />
                                <div className="card-btn">

                                <button className='first-btn'>
                                    <a href={`/Quiz/${quiz._id}`} onClick={handleendterquiz} className="card-link">Give Quiz</a>

                                </button >

                                <button className='second-btn'>

                                    <a href="#" className="card-link">Practice</a>
                                </button>
                                </div>
                            </div>
                        </div>
                    </>
                )
            }
        </>
    );
};

export default QuizCard;
