import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signin = () => {
  const Navigate = useNavigate();

  const [userdetails, setuserdetails] = useState({
    username: '',
    password: '',
  });

  const handlechange = (e) => {
    setuserdetails({
      ...userdetails,
      [e.target.name]: e.target.value,
    });
  };

  const server = 'http://localhost:5000/api';
  const baseUrl = process.env.REACT_APP_BASE_URL;

  const handlesubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${baseUrl}/user/signin`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          //   'auth-token': localStorage.getItem('token'),
        },
        body: JSON.stringify({
          username: userdetails.username,
          password: userdetails.password,
        }),
      });

      console.log(response);

      const result = await response.json();
      console.log(result);

      if (result.status) {
        console.log('singnin success');
        localStorage.setItem('auth-token', result.auth_token);
        toast.success('Signin successful!',{
        autoClose: 1000,
        
        style: {
          background: 'green', // Set the background color to red
          color: 'white', // Set the text color to white
        },
        pauseOnHover: false,
        draggable: true,
      });

        Navigate('/user/home');
      }else{
        // toast('Signin unsuccessful!');
      toast.warn(result.msg,{
        autoClose: 2000,
        pauseOnHover: false,
      });
      }
    } catch (error) {
      console.log({ error });
      // toast('Signin unsuccessful!');
      
    }
  };

  return (
    <>
      unsername :
      <input
        type="text"
        name="username"
        onChange={handlechange}
        value={userdetails.username}
      />
      password :{' '}
      <input
        type="text"
        name="password"
        onChange={handlechange}
        value={userdetails.password}
      />

      <input type="button" onClick={handlesubmit} value="login" />

      <ToastContainer />
    </>
  );
};

export default Signin;
