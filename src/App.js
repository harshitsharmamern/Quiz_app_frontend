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
function App() {
  return (
    <>
        <BrowserRouter> 

            <Routes>
   <Route exact path="/" index element={<Register />} />

   <Route exact path="/signin" index element={<Signin />} />




   <Route exact path="/user/home" index element={<Home />} />
   <Route path="*" element={<DefaultComponent />} />


</Routes>
</BrowserRouter>

    </>
  );
}

export default App;
