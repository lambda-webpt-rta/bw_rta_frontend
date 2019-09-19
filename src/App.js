import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import LoginForm from './LoginForm.js';
import SignUpForm from './SignUpForm';
import NavBar from './NavBar';
import DashBoard from './Dashboard'


function App() {
  return (
    <div className="App">
      <NavBar />
      <Route path="/signup" component={SignUpForm} />
      <Route exact path="/" component={DashBoard} />
    </div>
  );
}

export default App;
