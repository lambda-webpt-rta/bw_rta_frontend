import React, {useState, useEffect} from "react";
import {withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import {Button,Label} from 'reactstrap';
import LoginForm from './LoginForm';
import {axiosWithAuth} from './../auth/axiosWithAuth';


const UploadForm=( {values, errors, touched, isSubmitting, status, }, props ) => {
  const initialUser={email: '', password: '', username: '', }
  const [newUser, setNewUser]=useState( initialUser );




  return (
    <Form >
            <select
        name="email"
        value={values.color}
      >
        <option value="" label="Select a category" />
        <option value="Food and Dining" label="Food and Dining" />
        <option value="Transportation" label="Transportation" />
        <option value="Household" label="Household" />
        <option value="Personal Care" label="Personal Care" />
        <option value="Travel" label="Travel" />
        <option value="Fitness" label="Fitness" />
        <option value="Entertainment" label="Entertainment" />
        <option value="Education" label="Education" />
        <option value="Pets" label="Pets" />
        <option value="Clothes" label="Clothes" />
        <option value="Gifts" label="Gifts" />
        <option value="Other/Misc" label="Other/Misc" />
      </select>

      <Label>Date
        <div>{touched.username&&errors.username&&<p>{errors.username}</p>}
          <Field type="date" name="username" placeholder="Date" /></div>
      </Label>
      <label>Amount
        <div>{touched.password&&errors.password&&<p>{errors.password}</p>}
          <Field type="number" name="password" placeholder="Amount" /></div>
      </label>

      <div><Button type="submit" disabled={isSubmitting} >Submit</Button></div>

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
      .required( "date is required" ),
    email: Yup.string()
      .required( "category is required" ),
  } ),

  handleSubmit( values, {resetForm, setErrors, setSubmitting, setStatus, submitForm}, emails ) {
    if( emails&&emails.includes( `${values.email}` ) ) {
      setErrors( {email: "That email is already taken"} );
    } else {
      axiosWithAuth().post( "https://reqres.in/api/register", values )
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
} )( UploadForm );

export default FormikSignupForm;


    
    