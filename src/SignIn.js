import React, { Component } from 'react'
import './App.css'
import Login from './Login.js'

import Landing from './landing.js'

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      

    };

  }

  submit = () => {
    var usr = this.username.value;
    var pwd = this.password.value;
    var confirmPwd = this.confirmPassword.value;
    console.log("username", usr);
    console.log("password", pwd);
    console.log("confirm pass", confirmPwd)
    console.log("submit")

  }
  goToLogin = () => {

    this.setState({ loginPage: true })
  }


  render() {

      return (
        <div id='loginStyle' onClick={(i)=> i.stopPropagation()}>
          <h1> SIGN UP </h1>
          <div>
            <input ref={r => this.username = r} placeholder="username" name="username" />
          </div>
          <div>
            <input ref={r => this.password = r} placeholder="password" name="password" />
          </div>
          <div>
            <input ref={r => this.confirmPassword = r} placeholder="re-type password" name="password" />
          </div>
          <div>
            <button onClick={this.submit} > SUBMIT </button>
          </div>
    
        </div>
      )

    }
    


  
}

export default SignIn
