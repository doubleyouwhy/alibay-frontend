import React, { Component } from 'react'
import './App.css'

import Landing from './landing.js'

class Login extends Component {
    constructor() {
        super();
        this.state = {
          landingPage: false 
        };
      }

      submit = () => {
        var usr = this.username.value;
        var pwd = this.password.value;
        console.log("username", usr);
        console.log("password", pwd);
        this.setState({  landingPage: true })
      }


    render() {
      if (this.state.landingPage === false){
            return (
                <div id='Product'>
          <h1> Login form</h1>
          <input ref={r => this.username = r} placeholder="username" name="username" />
          <input ref={r => this.password = r} placeholder="password" name="password" />
          <button onClick={this.submit} > submit </button>
        </div>
            );}
            else return  <Landing />
        
       
    }
}

export default Login
