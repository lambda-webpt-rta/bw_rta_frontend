import React, { Component } from 'react'
import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup';
import axios from 'axios'
import './index.css'

class LoginForm extends Component {
    
  handleSubmit = (values,
     {resetForm, setErrors, setSubmitting, setStatus, submitForm}, emails, 
    actions) => {
        actions.setSubmitting(true)
        const { history } = this.props
    if( emails&&emails.includes( `${values.email}` ) ) {
        setErrors( {email: "That email is already taken"} );
      } else{
        axios.post( "https://lambda-webpt-rta-api.herokuapp.com/api/auth/register", values )
          .then( res => {
            console.log( res, ",`${res.data}`", `${res.data}` ); 
            localStorage.setItem("token",res.data.user.token||res.data.token);
            console.log(values)
            console.log(actions)
            resetForm();
            setSubmitting( false );
            submitForm( false );
            setStatus( res.data );
            window.alert(`successfully registered ${values.newUser.username} with password ${values.newUser.password}`)
            history.push('/dashboard')
            
          } )
        
          .catch( err => {
            console.error( err ); 
            setSubmitting( false );
          } );
      }
    }
    
    render() {
    return (
      <div>
        <h1>Admin</h1>
        <Formik
        const initialUser={email: '', password: '', username: '', }
        const [newUser, setNewUser]=useState( initialUser );
      
      

        
        onSubmit={this.handleSubmit}
        
        render={x => (
            <div className='login-form'>
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
            </div>
          )}
                    
        />
      </div>
    )
  }
}

export default SignUpForm