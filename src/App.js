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
import UserProfile from './components/user/UserProfile';
import QuestionList from './components/QuizComponent/QuizComponent/QuestionList';
import QuizStart from './components/QuizComponent/QuizComponent/QuizStart';
import QuizResult from './components/QuizComponent/QuizComponent/QuizResult';
import { QuizQuestionContext } from './components/QuizComponent/QuizComponent/QuizQuestionContext';
import { TimerProvider } from './components/QuizComponent/Quizcontext/TimerContext';
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
          <Route exact path="/AddQuestion" index element={<Qustion_add />} />
          <Route exact path="/user-profile" index element={<UserProfile />} />
        </Routes>

        <QuizQuestionContext>
          <Routes>
            <Route exact path="/Quiz/:quizid" index element={<Quiz_layout />} />
            <Route exact path="/Quiz/:quizid/start" index element={<QuestionList />} />
            <Route exact path="/:quizid/user-result" index element={<QuizResult />} />
            <Route path="*" element={<DefaultComponent />} />
          </Routes>
        </QuizQuestionContext>

      </BrowserRouter>

    </>
  );
}

export default App;
