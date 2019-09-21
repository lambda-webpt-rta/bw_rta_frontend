import React from "react"
import {Link} from 'react-router-dom';
import Dashboard from './Dashboard';
import {Nav}from 'reactstrap'


const NavBar=() => {

   return (
      <Nav>
         <h1>
            <Link to="/">🏠</Link>
            NavBar
           </h1>
      </Nav>


   )
}
export default NavBar;