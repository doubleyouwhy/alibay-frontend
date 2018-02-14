import React, { Component } from 'react'
import './App.css'
import ProductDetail from './ProductDetail.js'
import SignIn from './SignIn.js'
import Login from './Login.js'
import Landing from './landing.js'
import Search from './search.js'
import AddItems from './addItems.js'
import Dashboard from './dashboard.js';
import Nav from './nav.js'

class App extends Component {
  constructor(){
    super();
    this.state ={}
  }

  goToDashboard=()=>{
    this.setState({Dashboard: true})
  }

    goToLogin =()=>{
        console.log('user wants to sign up - take me to sign up page')
        this.setState({loginPage: true})
    }
    goToSignIn =()=>{
        console.log('user wants to sign up - take me to sign up page')
        this.setState({signInPage: true})
    }

  render () {
    return (
      <div className='App'>
          < Nav goToLogin = {this.goToLogin} 
                goToSignIn = {this.goToSignIn}
          />            
          < Landing/>
          <div>
              {this.state.loginPage && <div id="overlay" onClick={this.goToProduct}>< Login />  </div>}
              {this.state.signInPage && <div id="overlay" onClick={this.goToProduct}>< SignIn /> </div> }
          </div>
      </div>
    )


export default App
