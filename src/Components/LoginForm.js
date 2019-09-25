import React from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import {Button} from 'reactstrap';
import {Link} from "react-router-dom";


class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
        }
    }
    handleChange = (evt) => {
        evt.preventDefault()
        this.setState({
            [evt.target.name]: evt.target.value,
        })
    }
  
  Login = (e) => {
    const {username,password} = this.state
    const login = {username , password}
    console.log(login);
    e.preventDefault()
    axios.post(`https://lambda-webpt-rta-api.herokuapp.com/api/auth/login`,login)
    
    .then((res) => {localStorage.setItem('token',res.data.token)})
    .then(() => {this.props.history.push('/dashboard')})
    .catch((err) => {console.log(err)})
  }
    render() {
        const { username, password } = this.state
        const { isLoading, errorMessage } = this.props
        return (
      <div>
            <form onSubmit={this.Login}>
                {errorMessage && <p className="error">{errorMessage}</p>}
                <h5>Username</h5>
                <input type="text" name="username" placeholder="Username" value={username} onChange={this.handleChange} />
                <h5>Password</h5>
                <input type="password" name="password" placeholder="Password" value={password} onChange={this.handleChange} /><br />
                <Button type="submit">Login</Button>
                <h2>New to Receipt Tracker?</h2>
                <Link to="/signup">Register for an account</Link>
            </form>
      </div>
        )
    }
}
export default withRouter(Login); 