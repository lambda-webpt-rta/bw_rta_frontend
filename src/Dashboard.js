import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import LoginForm from './LoginForm.js';
import SignUpForm from './SignUpForm';
import NavBar from './NavBar';




function Dashboard() {
  return (
    <div >
   
   
     
      <LoginForm />
    </div>
  );
}
export default Dashboard;