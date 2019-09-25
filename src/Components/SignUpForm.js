import React, {useState, useEffect} from "react";
import {withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import {Button,Label} from 'reactstrap';
import {Link} from "react-router-dom";
import {axiosWithAuth} from './../auth/axiosWithAuth';

const SignUpForm=( {values, errors, touched, isSubmitting, status, }, props ) => {
  const initialUser={email: '', password: '', username: '', }
  const [newUser, setNewUser]=useState( initialUser );

  return (
    <Form >
        <h5>Username</h5>
        <div>{touched.username&&errors.username&&<p>{errors.username}</p>}
          <Field type="username" name="username" placeholder="username" /></div>
          <h5>Email</h5>
        <div>{touched.email&&errors.email&&<p>{errors.email}</p>}
          <Field type="email" name="email" placeholder="email" /></div>
          <h5>Password</h5>
        <div>{touched.password&&errors.password&&<p>{errors.password}</p>}
          <Field type="password" name="password" placeholder="password" /></div>
        <br/>
      <div><Button type="submit" disabled={isSubmitting} >Register</Button></div>
      <h2>Already have an account?</h2>
                <Link to="/login">Login</Link>

    </Form>
  );
}
const FormikSignupForm=withFormik( {
  mapPropsToValues: ( props ) => {
    return {
      email: props.email||'',
      password: props.password||'',
      username: props.username||'',
    }
    console.log(props)
  },

  validationSchema: Yup.object().shape( {
    username: Yup.string()
      .required( "NAME is required" ),
    email: Yup.string()
      .required( "EMAIL is required" ),
    password: Yup.string()
      .min( 6, "Password must be 6 characters or longer" )
      .required( "Password is required" )
  } ),

  handleSubmit( values, {resetForm, setErrors, setSubmitting, setStatus, submitForm}, emails ) {
    if( emails&&emails.includes( `${values.email}` ) ) {
      setErrors( {email: "That email is already taken"} );
    } else{
      axiosWithAuth.post( "https://lambda-webpt-rta-api.herokuapp.com/api/auth/register", values )
        .then( res => {
          console.log( res, ",`${res.data}`", `${res.data}` ); 
           localStorage.setItem("token",res.data.user.token||res.data.token);
          resetForm();
          setSubmitting( false );
          submitForm( false )
          setStatus( res.data )

        } )
        .catch( err => {
          console.error( err ); 
          setSubmitting( false );
        } );
    }
  }
} )( SignUpForm );

export default FormikSignupForm;

