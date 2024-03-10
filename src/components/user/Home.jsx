import Navbar from '../common/Navbar'
import React, { useEffect, } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AllQuiz from '../HomeComponent/AllQuiz';
import LeaderBoard from '../HomeComponent/LeaderBoard';
import HomeQuizComponent from '../HomeComponent/HomeQuizComponent';
import {UserContext} from './usercontext/UserContext';
// import User_profile from './User_profile';


const Home = () => {

  // const Navigate = useNavigate()
  // const baseUrl = process.env.REACT_APP_BASE_URL;


  // const todos = useSelector(state => state.todos);

  // useEffect(() => {

  //   const loginfun = async () => {
  //     const server = `${baseUrl}/user/home`;

  //     const response = await fetch(
  //       server,
  //       {
  //         method: "GET",
  //         headers: {
  //           "Content-Type": "application/json",
  //           "auth-token": localStorage.getItem("auth-token"),
  //         },
  //       }
  //     );
  //     console.log("you enter in home", response);

  //     const result = await response.json();
  //     console.log({result : result});
  //     if (result.status) {
  //       console.log("result status is comming");
  //       console.log({userdata : result.home_data});
  //     } else {
  //       console.log("you are not allowed to this page until you login");
  //       Navigate("/")
  //     }
  //   }


  //   loginfun()
  // }, [])
  return (<>
 
    <UserContext>


    <Navbar />
    {/* ///All quiz data show karega + leaderboard */}
    <HomeQuizComponent/>
{/* <User_profile/> */}
    </UserContext>



  </>
  )
}

export default Home