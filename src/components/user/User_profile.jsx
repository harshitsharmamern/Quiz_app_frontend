import React, {useContext, useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import  {UserContextProvider}  from './usercontext/UserContext';

const User_profile = () => {
    // const [ userdata,setuserdata] = useState()
    // const baseUrl = process.env.REACT_APP_BASE_URL;
    // const Navigate = useNavigate()
    
    // const loginfun = async () => {
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
    //       setuserdata(result.home_data)
    //     } else {
    //       console.log("you are not allowed to this page until you login");
    //       Navigate("/")
    //     }
    //   }
  
  
    //   loginfun()
    // console.log(userdata);
    // <UserContextProvider/>
    const {userdata}  = useContext(UserContextProvider)
  return (
    <>
    <div className="container">
        <button><p>edit</p></button><br />
        <div>

        name : <label htmlFor=""> <input type="text" value={userdata}/> </label>
        </div>
        {/* <div>

        username : <label htmlFor=""> <input type="text" value={userdata.username} /> </label>
        </div>

        <div>

        password :  <label htmlFor=""> <input type="password" value={userdata.password} /> </label>
        </div> */}

    </div>

    </>
  )
}

export default User_profile