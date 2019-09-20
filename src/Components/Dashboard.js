import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import LoginForm from './LoginForm.js/index.js';
import SignUpForm from './SignUpForm';
import Navbar from './Navbar';




function Dashboard() {
  return (
    <div >
   
   
     
      <LoginForm />
    </div>
  );
}
export default Dashboard;