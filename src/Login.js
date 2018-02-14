import React, { Component } from 'react'
import './App.css'
import SignIn from './SignIn.js'
import Landing from './landing.js'

class Login extends Component {
  constructor() {
    super();
    this.state = {

      submit: false,
      wrongPassword: false,
     

    };
  }

  submit = () => {
    var usr = this.username.value;
    var pwd = this.password.value;
    console.log("username :", usr);
    console.log("password :", pwd);
    console.log("submit")


    fetch('/login', {
      method: "POST",
      body: JSON.stringify({
        username: usr,
        password: pwd
      })
    })
      .then(x => x.text())
      .then(x => {
        console.log(x)
        if (x === "success") {
          this.setState({
            submit: true,
          })
          this.props.changeLoginPageState()


        }
        else {
          this.setState({
            wrongPassword: true,

          })
          console.log("Login faill !!!")
        }
      })

  }
  goToSing = () => {
    this.props.loginToSignIn()
  }
  



  render() {
console.log("go to sing",this.state.goToSingUp)
   

  return (
    <div id='loginStyle' onClick={(i) => i.stopPropagation()}>
      <h1> LOGIN </h1>
      <div>
        <input ref={r => this.username = r} placeholder="username" name="username" />
      </div>
      <div>
        <input ref={r => this.password = r} placeholder="password" name="password" />
      </div>
      <button onClick={this.submit} > SUBMIT </button>
      <button onClick={this.goToSing} > go To Sing Up </button>
      {this.state.wrongPassword && <div> login fail</div>}

    </div>
  );

   





  }





}

export default Login
