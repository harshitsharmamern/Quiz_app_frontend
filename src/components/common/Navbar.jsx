import React, { useContext, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { UserContextProvider } from '../user/usercontext/UserContext';


const Navbar = () => {
        const [openNav, setOpenNav] = useState(false);
        const userdata = useContext(UserContextProvider)
        const Navigate = useNavigate();

        const hangellogout =async()=>{
          localStorage.removeItem("auth-token");
          Navigate('/');
        }
        
        const hadle_user_profile_btn=()=>{
          Navigate('/user-profile');
        }
       console.log({userdata});
        // console.log({user_data_nav : user_data_nav.userdata});
  return (
    <>
   
        {/* <Link to="/home" className="navbar-link" >
                Home
        </Link>
        <Link to="/" className="navbar-link" >
                serch
        </Link>
        <Link to="/" className="navbar-link" >
                profile
        </Link>
        <br />
        <button onClick={hangellogout}>logout </button> */}

<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class=" navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">test series</a></li>
            <li><a class="dropdown-item" href="#">practice</a></li>
            {/* <li><hr class="dropdown-divider"></li> */}
            <li><a class="dropdown-item" href="#">contact for live class</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <button onClick={hangellogout} className='btn btn-danger'> Logout </button>
          
        </li>
      <div className=" btn  user-profile-btn">
        <button className='btn-primary' onClick={hadle_user_profile_btn}> 
          user profile

        </button>
        <div style={{ marginTop: '10px', fontWeight: 'bold' }}>

         {userdata.userdata && userdata.userdata.fname} 
          {/* {userdata.userdata.username} */}
        </div>
      </div>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

    </>
  )
}

export default Navbar