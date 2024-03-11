import React, { useState, useEffect } from 'react';
import AllQuiz from './AllQuiz'
import LeaderBoard from './LeaderBoard'
import Carusel_page from './Carousel/Carusel_page';
import home_quiz from '../QuizComponent/css/home_quiz.css'

const HomeQuizComponent = () => {
  // const [ userdata,setuserdata] = useState()
  // useEffect(()=>{
  //     const fetchData = async () => {
  //         try {
  //             const response = await fetch('http://localhost:5000/api/auth/user-profile'); // Adjust the API endpoint accordingly
  //             const data = await response.json();
  //             setuserdata(data);
  //         } catch (error) {
  //             console.error('Error fetching quiz data:', error);
  //         }
  //     };

  //     fetchData();
  // },[])
  const [loading, setLoading] = useState(true); // State to manage loading status
  useEffect(() => {
    // Simulate fetching data from the server (replace with actual fetch)
    setTimeout(() => {
      // const fetchedData = /* Logic to fetch data from the server */;
      // setQuizData(fetchedData);
      setLoading(false); // Set loading to false once data is fetched
    }, 2000); // Simulated delay of 2 seconds
  }, []);
  // console.log({useris : userdata});
  return (
    <>
      <a href="/AddQuestion"> Admin panel </a>

      Quizes
      <div className='quiz_home'>
        {loading ? (
          <div className="loader-container " >
            <div className="loader"></div>
          </div>
        ) : (
          <AllQuiz />

        )}
        <LeaderBoard />
      </div>


      <div className="footer_slider">
        {/* <Carusel_page /> */}
      </div>

    </>
  )
}

export default HomeQuizComponent