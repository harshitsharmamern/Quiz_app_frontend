import React from 'react';

const QuizCard = ({handleeditparent, admin, quiz }) => {

    const handledelete = async(id) => {
        console.log(`delete ${id}`);
        const server = 'https://quiz-app-backend-g0rh.onrender.com'

        const url = `${server}/api/auth/delete/quiz/${id}`
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
                            <button onClick={()=>handleedit(quiz._id)}
                                className='mr-2'>edit
                            </button>

                        </div>

                    </div>

                </> : (
                    <div className="card" style={{ width: '18rem' }}>
                        <div className="card-body">
                            <h5 className="card-title">{quiz.quizName}</h5>
                            <h6 className="card-subtitle mb-2 text-body-secondary">syllabus</h6>
                            <p className="card-text">
                                {quiz.topic}
                                <span>No. of questions: {quiz.questions.length}</span>
                            </p>
                            <a href={`/Quiz/${quiz._id}`} className="card-link">Give Quiz</a>
                            <a href="#" className="card-link">Practice</a>
                        </div>
                    </div>
                )
            }
        </>
    );
};

export default QuizCard;
