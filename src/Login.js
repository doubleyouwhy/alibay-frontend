import React, { Component } from 'react'
import './App.css'
import SignIn from './SignIn.js'
import Landing from './landing.js'
import GifLogin from './GifLogin.js'
class Login extends Component {
  constructor() {
    super();
    this.state = {
      submit: false,
      wrongPassword: false,
      nerverTrue:false
    };
  }

  submit = () => {
    var usr = this.username.value;
    var pwd = this.password.value;
    fetch('/login', {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        username: usr,
        password: pwd
      })
    })
      .then(x => x.text())
      .then(x => {
   
       
        if (x === "success") {
          this.setState({
            submit: true,
            username: usr
          })
          console.log("user",this.state.username)
          this.props.changeLoginPageState()
        }
        else {
          this.setState({
            wrongPassword: true,

          })
         
        }
      })

  }
  goToSing = () => {
    this.props.loginToSignIn()
  }

  render() {
   
    return (
      <div id='loginStyle' onClick={(i) => i.stopPropagation()}>
        <h1> LOGIN </h1>
        {this.props.addItemSign && <h1 className="loginBeforeAddItems" > please login first </h1>}
        <div>
          <input ref={r => this.username = r}  placeholder="username" name="username" />
        </div>
        <div>
          <input ref={r => this.password = r} placeholder="password" name="password" />
        </div>

        <button onClick={this.submit} className="btn-outline-light" > SIGN IN </button>
        <button onClick={this.goToSing} className="btn-outline-light" > SIGN UP </button>
        {this.state.wrongPassword && <div className="loginFail"> wrong user name or password </div>}
      
      </div>

      
    );
  }
}

export default Login
