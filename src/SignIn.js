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
   
    console.log("username", usr);
    console.log("password", pwd);
    console.log("submit")

    fetch('/signUp', {
      method: "POST",
      body: JSON.stringify({
        username: usr,
        password: pwd
      })
    })
      .then(x => x.text())
      .then(x => {
        console.log(x)
      //   if (x === "success") {
      //     this.setState({
      //       submit: true,
      //     })
      //     this.props.changeLoginPageState()


      //   }
      //   else {
      //     this.setState({
      //       wrongPassword: true,

      //     })
      //     console.log("Login faill !!!")
      //   }
       })

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
          {/* <div>
            <input ref={r => this.confirmPassword = r} placeholder="re-type password" name="password" />
          </div> */}
          <div>
            <button onClick={this.submit} > SUBMIT </button>
          </div>
    
        </div>
      )

    }
    


  
}

export default SignIn
