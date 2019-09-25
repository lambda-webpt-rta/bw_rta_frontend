import React from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
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
      <div class="jumbotron">
      <h3>Sign in </h3>
            <form class="form-inline" onSubmit={this.Login}>
                {errorMessage && <p className="error">{errorMessage}</p>}
                
                <input className="form__input" type="text" name="username" placeholder="Username" value={username} onChange={this.handleChange} />
                <br /> <br />
                <input className="form__input"  type="password" name="password" placeholder="Password" value={password} onChange={this.handleChange} /><br />
                <button class="btn btn-success" type="submit">Login</button>
            </form>
      </div>
        )
    }
}
export default withRouter(Login);