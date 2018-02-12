import React, { Component } from 'react'
import './App.css'
import Login from './Login.js'

import ProductDetail from './ProductDetail.js'

class SignIn extends Component {
    constructor() {
        super();
        this.state = {
          loginPage: false,
          ProductDetailPage: false 
        };
        
      }

      submit = () => {
        var usr = this.username.value;
        var pwd = this.password.value;
        console.log("username", usr);
        console.log("password", pwd);
        this.setState({ ProductDetailPage: true })
      }
      goToLogin = () => {

        this.setState({ loginPage: true })
      }


    render() {
      if (this.state.loginPage === false && this.state.ProductDetailPage === false){
        return (
          <div id='Product'>
    <h1> Sign In Form</h1>
    <input ref={r => this.username = r} placeholder="username" name="username" />
    <input ref={r => this.password = r} placeholder="password" name="password" />
    <input ref={r => this.password = r} placeholder="re-type password" name="password" />
    <button onClick={this.submit} > submit </button>
    <button onClick={this.goToLogin} > Login </button>
  </div>
      )
      
    } else if (this.state.ProductDetailPage === true) { return <ProductDetail /> }
    else if (this.state.loginPage === true) { return <Login /> }
        
       
    }
}

export default SignIn
