import React from 'react';
import {Route} from 'react-router-dom';
import LoginForm from './LoginForm.js';
import SignUpForm from './SignUpForm';
import Navbar from './Navbar';




function Dashboard() {
  return (
    < div>
      <LoginForm />
    </div>
  );
}
export default Dashboard;