// import React, {useState} from "react";
// import { withFormik, Form, Field } from 'Formik';
// import * as Yup from 'yup';
// import axios from 'axios';
// import { Button } from 'reactstrap';


// export const UploadForm=( props ) => {
    
//     const initialUser={email: '', password: '', username: '', }
//     const [newUser, setNewUser]=useState( initialUser );
    
//     const handleChange=( event ) => {
//         setNewUser( {...newUser, [event.target.name]: event.target.value} );
//     }
//     const registerUser=( event ) => {
//         event.preventDefault();
//         console.log( newUser, props );
        
//     }



//     return (
//         <Form onSubmit={registerUser}>
//             <label>Email
//             <Field type="text" name="email" placeholder="email"  value={newUser.email} />
//             </label>
//             <label>Password
//             <Field type="text" name="password" placeholder="password"  value={newUser.password} />
//             </label>
//             <label>UserName
//             <Field type="text" name="username" placeholder="username" value={newUser.username} />
//             </label>
//             <Button type="submit">Submit</Button>

//         </Form>
//     )
// };

// export default withFormik({
//     mapPropsToValues: (props) => {
//       return {
//         email: props.email || '',
//         password: props.password || '',
//         username: props.username || '',
//       }
//     },

//     validationSchema: Yup.object().shape({
//         username: Yup.string()
//           .required("NAME is required"),
//           email: Yup.string()
//           .required("EMAIL is required"),
//         password: Yup.string()
//           .min(6, "Password must be 6 characters or longer")
//           .required("Password is required")
//       }),
    
//       handleSubmit: (values, { setStatus }) => {
//         axios.post('https://lambda-webpt-rta-api.herokuapp.com/', values)
//           .then((res) => {
//             setStatus(res.data)
//           })
//           .catch((err) => {
//             console.log('Error:', err)
//           })
//       }
//     })(UploadForm)

import React, {useState, useEffect} from "react";
import {withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import {Button,Label} from 'reactstrap';
import LoginForm from './LoginForm';


const UploadForm=( {values, errors, touched, isSubmitting, status, }, props ) => {
  const initialUser={email: '', password: '', username: '', }
  const [newUser, setNewUser]=useState( initialUser );




  return (
    <Form >


      <Label>Date
        <div>{touched.username&&errors.username&&<p>{errors.username}</p>}
          <Field type="username" name="username" placeholder="username" /></div>
      </Label>
      <label>Category
        <div>{touched.email&&errors.email&&<p>{errors.email}</p>}
          <Field type="email" name="email" placeholder="email" /></div>
      </label>
      <label>Amount
        <div>{touched.password&&errors.password&&<p>{errors.password}</p>}
          <Field type="password" name="password" placeholder="password" /></div>
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
      axios.post( "https://reqres.in/api/register", values )
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


    
    