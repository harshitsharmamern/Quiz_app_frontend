import Navbar from '../common/Navbar'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';


const Home = () => {

  const Navigate = useNavigate()
  const baseUrl = process.env.REACT_APP_BASE_URL;

  useEffect(()=>{

    const loginfun=async()=>{
      const server =`${baseUrl}/api/user/home`;

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
      console.log("you enter in home",response);

          const result = await response.json();

            if(result.status){
              console.log("result status is comming");
               console.log(result.home_data );
            }else{
              console.log("you are not allowed to this page until you login");
              Navigate("/")
            }
    }


    loginfun()
  },[])
  return (<>
      <Navbar/>
     
      asc

      <br /><br />


  </>
  )
}

export default Home