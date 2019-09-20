import React from "react"
import {Link} from "react-router-dom";
import SignUpForm from "./SignUpForm";

const LoginForm=() => {

    return (
        <div>
            <h1>LoginForm</h1>
            <div>or</div>
            <h2>Don't have an account yet?</h2>
            <Link to="/signup">Create an account</Link>

        </div>

    )

}
export default LoginForm;
