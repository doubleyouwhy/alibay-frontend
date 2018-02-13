import React, { Component } from 'react'
import './App.css'
import ProductDetail from './ProductDetail.js'
import SignIn from './SignIn.js'
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
  render () {
    return (
      <div className='App'>
        < Nav goToLogin = {this.goToLogin} 
              goToSignIn = {this.goToSignIn}
         />            
        < Landing/>
      </div>
    )
  }
}

export default App
