import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './user.css'; // Import your CSS file
import { baseUrl } from '../../server_call';


const Register = () => {
  const Navigate = useNavigate();

  const [userDetails, setUserDetails] = useState({
    fname: "",
    username: "",
    password: ""
  });

  const handleChange = (e) => {
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(userDetails.username.length<3){
      return toast.warn("username must be greater than 3 " );
 
    }

    try {
      // const baseUrl = 'https://quiz-app-backend-g0rh.onrender.com/api';
      // const baseUrl = 'http://localhost:5000/api'
      // const baseUrl = process.env.REACT_APP_BASE_URL;
      const response = await fetch(`${baseUrl}/api/user/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          fname: userDetails.fname,
          username: userDetails.username,
          password: userDetails.password
        })
      });
      console.log(userDetails);
      const result = await response.json();
      console.log({ result });
      if (result.status) {
        // localStorage.setItem("auth-token", result.auth_token);
        toast.success('Signup successful!');
        Navigate("/signin");
      } else {
        toast.warn("singup err : " + result.msg + "," + "change username please" );
      }
    } catch (error) {
      toast.warn("Error occurred");
      console.log({ error, msg: "Error in catch" });
    }
  };
  
  useEffect(() => {
    // console.log( {token : localStorage.getItem("auth-toke")} )
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
      //  console.log("you enter in home", response);
 
       const result = await response.json();
       console.log({result : result});
       if (result.status) {
        Navigate('/user/home')
        //  console.log("result status is comming");
        //  console.log({userdata : result.home_data});
        //  setuserdata( result.home_data)
       } else {
         console.log("you are not allowed to this page until you login");
         Navigate("/")
       }
     }
 
 
     loginfun()
   }, [])

  return (
    <div className="register-container">
      {/* <SendMessage/> */}
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="fname"
            onChange={handleChange}
            value={userDetails.fname}
            placeholder='abhishek jain'
            required
          />
        </div>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            name="username"
            onChange={handleChange}
            value={userDetails.username}
            placeholder='Abhishek_123'
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={userDetails.password}
            required
          />
        </div>
        <input type="submit" value="Submit" />
      </form>
      <br />
      <p>Already have an account? <a href="/signin">Sign in</a></p>
      <ToastContainer />

    </div>
  );
};


// import React, { useState } from 'react';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { Twilio } from 'twilio';

// const SendMessage = () => {
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [message, setMessage] = useState('');

//   const sendSMS = async () => {
//     const accountSid = 'your_account_sid';
//     const authToken = 'your_auth_token';
//     const twilioNumber = 'your_twilio_phone_number';

//     const client = new Twilio(accountSid, authToken);

//     try {
//       await client.messages.create({
//         body: message,
//         from: twilioNumber,
//         to: phoneNumber
//       });

//       toast.success('SMS sent successfully!');
//     } catch (error) {
//       toast.error('Failed to send SMS');
//       console.error('Error sending SMS:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Send SMS</h2>
//       <div>
//         <label>Phone Number:</label>
//         <input
//           type="text"
//           value={phoneNumber}
//           onChange={(e) => setPhoneNumber(e.target.value)}
//         />
//       </div>
//       <div>
//         <label>Message:</label>
//         <textarea
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//         ></textarea>
//       </div>
//       <button onClick={sendSMS}>Send SMS</button>
//     </div>
//   );
// };

// export default SendMessage;
export default Register;
