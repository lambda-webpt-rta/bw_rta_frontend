import React, {useState} from "react";
import { withFormik, Form, Field } from 'Formik';
import * as Yup from 'yup';
import axios from 'axios';


export const SignUpForm=( props ) => {
    
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
        <Form onSubmit={registerUser}>
            <label>Email
            <Field type="text" name="email" placeholder="email"  value={newUser.email} />
            </label>
            <label>Password
            <Field type="text" name="password" placeholder="password"  value={newUser.password} />
            </label>
            <label>UserName
            <Field type="text" name="username" placeholder="username" value={newUser.username} />
            </label>
            <button type="submit">Submit</button>

        </Form>
    )
};

export default withFormik({
    mapPropsToValues: (props) => {
      return {
        email: props.email || '',
        password: props.password || '',
        username: props.username || '',
      }
    },

    validationSchema: Yup.object().shape({
        username: Yup.string()
          .required("NAME is required"),
          email: Yup.string()
          .required("EMAIL is required"),
        password: Yup.string()
          .min(6, "Password must be 6 characters or longer")
          .required("Password is required")
      }),
    
      handleSubmit: (values, { setStatus }) => {
        axios.post('https://lambda-webpt-rta-api.herokuapp.com/', values)
          .then((res) => {
            setStatus(res.data)
          })
          .catch((err) => {
            console.log('Error:', err)
          })
      }
    })(SignUpForm)
    
    