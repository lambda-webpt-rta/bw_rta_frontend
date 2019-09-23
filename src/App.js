import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import LoginForm from './Components/LoginForm';
import FormikSignupForm from './Components/SignUpForm';
import Navbar from './Components/Navbar';
import DashBoard from './Components/Dashboard';
import UploadForm from './Components/UploadForm';
import Faqs from './Components/Faqs';

function App() {
  return (
    <div className="App">
      {/* <img src = './images/receipt.png' /> */}
      <Navbar />
      <Route path="/signup" component={FormikSignupForm} />
      <Route exact path="/" component={DashBoard} />
      <Route path="/login" component={LoginForm} />
      <Route path="/upload" component={UploadForm} />
      <Faqs />
    </div>
  );
}

export default App;
