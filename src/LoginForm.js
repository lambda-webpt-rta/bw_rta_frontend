import React from "react"
import {Link} from "react-router-dom";
import SignUpForm from "./SignUpForm";

const LoginForm=() => {

    return (
        <div>
            <h1>LoginForm</h1>
            <div>or</div>
            <Link to="/signup">sign up here</Link>

        </div>

    )

}
export default LoginForm;
