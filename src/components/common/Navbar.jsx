import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {
        MDBContainer,
        MDBNavbar,
        MDBNavbarBrand,
        MDBNavbarToggler,
        MDBNavbarNav,
        MDBNavbarItem,
        MDBNavbarLink,
        MDBCollapse
      } from 'mdb-react-ui-kit';

const Navbar = () => {
        const [openNav, setOpenNav] = useState(false);

        const Navigate = useNavigate();

        const hangellogout =async()=>{
          localStorage.removeItem("auth-token");
          Navigate('/');
        }
        
        const hadle_user_profile_btn=()=>{
          Navigate('/user-profile');
        }
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
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
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
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
      <div className="user-profile-btn">
        <button onClick={hadle_user_profile_btn}> 
          user profile
        </button>
      </div>
    </div>
  </div>
</nav>

    </>
  )
}

export default Navbar