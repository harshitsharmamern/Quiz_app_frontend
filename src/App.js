import './App.css';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Register from './components/user/Register';
import Signin from './components/user/Signin';



////////////////
import Home from './components/user/Home';
import DefaultComponent from './components/common/DefaultComponent';
import Quiz_layout from './components/QuizComponent/Quiz_layout';
import Qustion_add from './components/QuizComponent/Question_add/Qustion_add';
import User_profile from './components/user/User_profile';
function App() {
  return (
    <>
    
        <BrowserRouter> 

            <Routes>
   <Route exact path="/" index element={<Register />} />

   <Route exact path="/signin" index element={<Signin />} />




   <Route exact path="/user/home" index element={<Home />} />
   {/* <Route exact path="/todo" index element={<Todo />} /> */}

   {/* //////////////////////////////// */}
   <Route exact path="/Quiz/:quizid" index element={<Quiz_layout />} />
   <Route exact path="/AddQuestion" index element={<Qustion_add />} />
   <Route exact path="/user-profile" index element={<User_profile />} />




   <Route path="*" element={<DefaultComponent />} />


</Routes>
</BrowserRouter>

    </>
  );
}

export default App;
