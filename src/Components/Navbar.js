import React from "react"
import {Link} from 'react-router-dom';
import Dashboard from './Dashboard';
import {Nav}from 'reactstrap'


const NavBar=() => {

   return (
      <div>
         <h1>Receipt Upload App</h1>
            <Link to="/">Home</Link>
            <Link to="/signup">New User</Link>
            <Link to="/">Existing User Login</Link>
            <Link to="/upload">About Us</Link>
      </div>


   )
}
export default NavBar;

