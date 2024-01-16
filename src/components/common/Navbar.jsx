import React from 'react'

import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {

        const Navigate = useNavigate();

        const hangellogout =async()=>{
          localStorage.removeItem("auth-token");
          Navigate('/');
        }
        
  return (
    <>
        
        <Link to="/home" className="navbar-link" >
                Home
        </Link>
        <Link to="/" className="navbar-link" >
                serch
        </Link>
        <Link to="/" className="navbar-link" >
                profile
        </Link>
        <br />
        <button onClick={hangellogout}>logout </button>

    </>
  )
}

export default Navbar