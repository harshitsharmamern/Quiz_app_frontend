import React, {createContext, useState,useEffect } from 'react'

import { useNavigate } from 'react-router-dom';
import {baseUrl} from "../../../server_call"
const UserContextProvider =  createContext();

const UserContext = ({children}) => {
    const [userdata,setuserdata] =  useState()

    const Navigate = useNavigate()
    // const baseUrl = 'https://quiz-app-backend-g0rh.onrender.com/api';

    // const baseUrl = process.env.REACT_APP_BASE_URL;
    // const baseUrl = 'https://quiz-app-backend-g0rh.onrender.com'


    const [quizData, setQuizData] = useState([]);
    // useEffect(() => {
      const fetchData = async () => {
          try {
            // baseUrl
            // const server = 'https://quiz-app-backend-g0rh.onrender.com'
              const response = await fetch(`${baseUrl}/api/auth/All_quiz`); // Adjust the API endpoint accordingly
              const data = await response.json();
              setQuizData(data.Quiz_data);
          } catch (error) {
              console.error('Error fetching quiz data:', error);
          }
      };
      const loginfun = async () => {
        const server = `${baseUrl}/api/user/home`;
  
        const response = await fetch(
          server,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "auth-token": localStorage.getItem("auth-token"),
            },
          }
        );
        console.log("you enter in home", response);
  
        const result = await response.json();
        console.log({result : result});
        if (result.status) {
          console.log("result status is comming");
          console.log({userdata : result.home_data});
          setuserdata( result.home_data)
        } else {
          console.log("you are not allowed to this page until you login");
          Navigate("/")
        }
      }
  useEffect(() => {
  //  console.log( {token : localStorage.getItem("auth-toke")} )


  fetchData();
    loginfun()

  }, [] )

    // fetchData();
// }, []);
  console.log({userdata : userdata, quizdata : quizData});
  const contextValue = {
    userdata,quizData
  };
  return (
    <>
    <UserContextProvider.Provider value={contextValue}>
    {children}
    </UserContextProvider.Provider>
    </>
  )
}

export  {UserContextProvider,UserContext}