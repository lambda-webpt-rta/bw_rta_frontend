import React, {useState} from "react"
import {withRouter} from 'react-router-dom'

const SignUpForm=( props ) => {
    const initialUser={email: '', password: '', username: '', }
    const [newUser, setNewUser]=useState( initialUser );
    const handleChange=( event ) => {
        setNewUser( {...newUser, [event.target.name]: event.target.value} );
    }
    const registerUser=( event ) => {
        event.preventDefault();
        console.log( newUser, props );
        
    }



    return (
        <form onSubmit={registerUser}>
            <label>Email
            <input type="text" name="email" placeholder="email" onChange={handleChange} value={newUser.email} />
            </label>
            <label>Password
            <input type="text" name="password" placeholder="password" onChange={handleChange} value={newUser.password} />
            </label>
            <label>UserName
            <input type="text" name="username" placeholder="username" onChange={handleChange} value={newUser.username} />
            </label>
            <button type="submit">Submit</button>
        </form>
    )
}
export default withRouter( SignUpForm )
