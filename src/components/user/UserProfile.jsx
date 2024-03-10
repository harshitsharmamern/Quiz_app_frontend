import React, { useContext, useEffect, useState } from 'react'
import { UserContextProvider } from './usercontext/UserContext'
import { baseUrl } from '../../server_call'
import { Navigate } from 'react-router-dom'

const UserProfile = () => {
    // useState useEffect Navigate
    const [userdata,setuserdata] =  useState()

    useEffect(() => {
        console.log( {token : localStorage.getItem("auth-toke")} )
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
     
     
         loginfun()
       }, [])

  return (
    <>
        name : {userdata && userdata.fname}
    </>
  )
}

export default UserProfile