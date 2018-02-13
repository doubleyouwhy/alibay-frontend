import React, { Component } from 'react'
import './App.css'
import SignIn from './SignIn.js'
import Landing from './landing.js'

class Login extends Component {
  constructor() {
    super();
    this.state = {
      signInpage: false
    
    };
  }
  goToSignIn = () => {

    this.setState({ signInpage: true })
  }

  submit = () => {
    var usr = this.username.value;
    var pwd = this.password.value;
    console.log("username :", usr);
    console.log("password :", pwd);
    console.log("submit")
    
  }


  render() {
    if (this.state.signInpage === false  ) {
      return (
        <div id='loginStyle'>
          <h1> LOGIN </h1>
          <div>
            <input ref={r => this.username = r} placeholder="username" name="username" />
          </div>
          <div>
            <input ref={r => this.password = r} placeholder="password" name="password" />
          </div>
          <button onClick={this.submit} > SUBMIT </button>
          <button onClick={this.goToSignIn} > SIGN IN </button>
        </div>
      );
    }
    else if (this.state.signInpage === true) { return <SignIn /> }
 


  }
}

export default Login
