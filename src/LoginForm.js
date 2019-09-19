import React from "react"
// import SignUpForm from './SignUpForm';
import {Link,Route} from "react-router-dom";
import SignUpForm from "./SignUpForm";

const LoginForm = () => {

        return ( 
        <div> 
            <h1>
           Login
            </h1>
            <Link to="/signup">sign up</Link>
            <Route path="/signup" component={SignUpForm}/>
         </div> 


        )

        } 
        export default LoginForm;