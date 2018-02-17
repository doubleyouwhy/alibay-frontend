import React, { Component } from 'react'
import './App.css'

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
          this.props.changeLoginPageState(this.state.username)
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
          <input type ='text' ref={r => this.username = r}  placeholder="Username" name="username" />
        </div>
        <div>
          <input type ='password' ref={r => this.password = r} placeholder="Password" name="password" />
        </div>

        <button onClick={this.submit} className="accountButton" > LOG IN </button>
        <button onClick={this.goToSing} className="accountButton" > SIGN UP </button>
        {this.state.wrongPassword && <div id="formError"> wrong user name or password </div>}
       
      </div>

    );
  }
}

export default Login
