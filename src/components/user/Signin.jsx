import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import {baseUrl} from '../../server_call'
import 'react-toastify/dist/ReactToastify.css';
import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon
}
  from 'mdb-react-ui-kit';
  import './user.css'

  
  const Signin = () => {
    // console.log(baseUrl);
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
  // const baseUrl = 'http://localhost:5000/api';

  // const baseUrl = 'https://quiz-app-backend-g0rh.onrender.com/api';

  // const baseUrl = process.env.REACT_APP_BASE_URL;
  // const baseUrl = 'http://localhost:5000'
  const handlesubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch(`${baseUrl}/api/user/signin`, {
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
        toast.success('Signin successful!', {
          autoClose: 1000,

          style: {
            background: 'green', // Set the background color to red
            color: 'white', // Set the text color to white
          },
          pauseOnHover: false,
          draggable: true,
        });

        Navigate('/user/home');
      } else {
        // toast('Signin unsuccessful!');
        console.log("kuch gadbad");
        toast.warn(result.msg, {
          autoClose: 2000,
          pauseOnHover: false,
        });
      }
    } catch (error) {
      // console.log(error);

      console.log({ error });
      // toast('Signin unsuccessful!');

    }
  };

  return (
    <>

      {/* <MDBContainer className="p-3 mx-15 my-5 d-flex flex-column w-50"> */}
      <div className="register-container">
        <div className="top-heading">
        <h1 >Login</h1>
          </div>
        <MDBInput
          type="text"
          name="username"
          onChange={handlechange}
          value={userdetails.username}
          wrapperClass='mb-4' label='Username' id='form1' />


        <MDBInput
          type="text"
          name="password"
          onChange={handlechange}
          value={userdetails.password}
          wrapperClass='mb-4' label='Password' id='form2' />

        <div className="d-flex justify-content-between mx-3 mb-4">
          <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
          <a href="!#">Forgot password?</a>
        </div>

        <MDBBtn onClick={handlesubmit} className="mb-4">Sign in</MDBBtn>

        <div className="text-center">
          <p>Not a member? <a href="/">Register</a></p>
          <p>or sign up with:</p>

          <div className='d-flex justify-content-between mx-auto' style={{ width: '40%' }}>
            <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
              <MDBIcon fab icon='facebook-f' size="sm" />
            </MDBBtn>

            <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
              <MDBIcon fab icon='twitter' size="sm" />
            </MDBBtn>

            <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
              <MDBIcon fab icon='google' size="sm" />
            </MDBBtn>

            <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
              <MDBIcon fab icon='github' size="sm" />
            </MDBBtn>

          </div>
        </div>
       </div>
      {/* </MDBContainer> */}
      <ToastContainer/>
    </>
  );
};

export default Signin;
