import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import LoginForm from './Components/LoginForm';
import FormikSignupForm from './Components/SignUpForm';
import Navbar from './Components/Navbar';
import DashBoard from './Components/Dashboard'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Route path="/signup" component={FormikSignupForm} />
      <Route exact path="/" component={DashBoard} />
      <Route path="/login" component={LoginForm} />

    </div>
  );
}

export default App;
