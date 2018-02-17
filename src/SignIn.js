import React, { Component } from 'react'
import './App.css'
import Login from './Login.js'
import Landing from './landing.js'

class SignIn extends Component {
  constructor() {
    super();
    this.state = {};
  }


  submit = () => {
    var usr = this.username.value;
    var pwd = this.password.value;
    var email = this.email.value;
    var phoneNumber = this.phoneNumber.value;
    fetch('/signUp', {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        username: usr,
        password: pwd,
        email: email,
        phoneNumber: phoneNumber
      })
    })
      .then(x => x.text())
      .then(x => { console.log(x)

        if (x === "success") {
          this.setState({
            submit: true,
            username: usr
            
          })
          this.props.changeLoginPageState(this.state.username)
        }
        else {
          this.setState({
            wrongPassword: true
          })
        }
      })
    }


  render() {

    return (
      <div id='loginStyle' onClick={(i) => i.stopPropagation()}>
        <h1> SIGN UP </h1>
        <div>
          <input type='type' ref={r => this.username = r} placeholder="Username" name="username" />
        </div>
        <div>
          <input type='password' ref={r => this.password = r} placeholder="Password" name="password" />
        </div>

         <div>
          <input ref={r => this.email = r} placeholder="Email" name="email" />
        </div>

         <div>
          <input maxLength="10" minLength="10"  type="number" ref={r => this.phoneNumber = r} placeholder="Phone Number" name="phoneNumber" />
        </div>


        <div>
          <button id='accountSubmit' onClick={this.submit} className="btn-outline-light accountButton" > SUBMIT </button>
        </div>
        {this.state.wrongPassword && <div id="formError"> wrong user name or password </div>}
      </div>
    )
  }
}
export default SignIn
