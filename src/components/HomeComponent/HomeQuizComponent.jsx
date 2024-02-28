import React, { useState, useEffect } from 'react';
import AllQuiz from './AllQuiz'
import LeaderBoard from './LeaderBoard'
import Carusel_page from './Carousel/Carusel_page';


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
  // console.log({useris : userdata});
  return (
    <>
    <a href="/AddQuestion"> Admin panel </a>
    
      <div className='quiz_home'>

      <AllQuiz />
      <LeaderBoard/>
      </div>

      <div className="footer_slider">
            <Carusel_page/>
      </div>

    </>
  )
}

export default HomeQuizComponent