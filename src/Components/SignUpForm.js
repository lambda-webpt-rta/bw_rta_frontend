import React, {useState,useEffect} from "react";
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

  
export const SignUpForm=( { values, errors, touched, isSubmitting,users,setUsers,status,submitForm,handleChange },props) => {
  const initialUser={email: '', password: '', username: '', }
    const [newUser, setNewUser]=useState( initialUser );
    
  useEffect(()=>{
      if(status){
        
      }
    },[status])


    return (
        <Form >
            
            
            <label>Username</label>
            <Field type="username" name="username" placeholder="username"  />
            <label>Email</label>
        {initialUser.email && initialUser.email && <p>{initialUser.email}</p>}
            <Field type="email" name="email" placeholder="email"    />
            <label>Password</label>
            {initialUser.password && initialUser.password && <p>{initialUser.password}</p>}
            <Field type="password" name="password" placeholder="password"   />
           
            <button type="submit" disabled={isSubmitting} >Register</button>

        </Form>
    );
}


    const FormikSignupForm = withFormik({
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

    handleSubmit(values,{ resetForm, setErrors, setSubmitting,setStatus,submitForm },emails) {
      if (emails&&emails.includes(`${values.email}`)) {
        setErrors({ email: "That email is already taken" });
      } else {
        axios.post("https://reqres.in/api/register", values)
          .then(res => {
            console.log(res,",`${res.data}`",`${res.data}`); // Data was created successfully and logs to console
            resetForm();
            setSubmitting(false);
            submitForm(false)
            setStatus(res.data)
            
          })
          .catch(err => {
            console.log(err); // There was an error creating the data and logs to console
            setSubmitting(false);
          });
        }
    }
})(SignUpForm);

export default FormikSignupForm; 
    
    