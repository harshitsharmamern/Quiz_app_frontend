import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const Register = () => {
  const Navigate = useNavigate();
  
  const [userdetails,setuserdetails] = useState({
    fname:"",  
    username:"",
    password:""
    })
     const handlechange=(e)=>{
       
       setuserdetails({
         ...userdetails,
         [e.target.name] : e.target.value
        })
      }
      const server = 'http://localhost:5000/api';
      const baseUrl = process.env.REACT_APP_BASE_URL;


    const handlesubmit=async(e)=>{
         
        e.preventDefault()
        
        try {
            const response = await fetch(
              `${baseUrl}/user/signup`,
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  //   "auth-token": localStorage.getItem("token"),
                },
                body:JSON.stringify({
                  fname:userdetails.fname,
                   username : userdetails.username,
                   password : userdetails.password
                })
            });

            console.log(response);
            
            const result = await response.json();
            console.log(result);

            if(result.status){
                console.log("singnin success");
                localStorage.setItem("auth-token", result.auth_token)
                toast.success('Signup successful!');

                Navigate("/user/signin")


            }else{
              toast.warn("not all");
            }
                 } catch(error){
                  toast.warn("error");
                console.log({error, msg : "err in catch"});
           }
    }
  return (
    <>
     signup

     name : <input type="text"
     name='fname'
     onChange={handlechange}
     value={userdetails.fname}
     />

     username : <input type="text"
     name='username'
     onChange={handlechange}
     value={userdetails.username}
     />

     password : <input type="text" 
     name='password'
     onChange={handlechange}
     value={userdetails.password}
     />
      
      <input type="submit" onClick={handlesubmit} value="submit" />
    
    <br />

    <a href="/signin">signin</a>
    </>
  )
}

export default Register