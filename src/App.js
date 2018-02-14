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
import UserNav from './UserNav.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      navBarOff: true
    }
  }

  goToProduct = () => {
    this.setState({
      loginPage: false,
      signInPage: false,
      addItempage: false
    })
  }
  goToDashboard =()=>{
    this.setState({Dashboard: true})
  }
  goToLogin = () => {
    console.log('user wants to sign up - take me to sign up page')
    this.setState({ loginPage: true })
  }
  goToSignIn = () => {
    console.log('user wants to sign up - take me to sign up page')
    this.setState({ signInPage: true })
  }

  changeLoginPageState = () => {
    this.setState({ loginPage: !this.state.loginPage,
                    navBarOff: false })
  }
  addItem = () => {
    console.log('user wants to sign up - take me to sign up page')
    this.setState({ addItempage: true })
  }

  render() {          
    return (
      <div className='App'>
      
       {this.state.navBarOff && <div>< Nav goToLogin={this.goToLogin}
          goToSignIn={this.goToSignIn}
        /></div>}

        {!this.state.navBarOff && <div>< UserNav addItem={this.addItem}
       
        /></div>}


        < Landing /> 
        <div>
          {this.state.loginPage && <div id="overlay" onClick={this.goToProduct}>    < Login  changeLoginPageState={this.changeLoginPageState} />       </div>}
          {this.state.signInPage && <div id="overlay" onClick={this.goToProduct}>< SignIn changeLoginPageState={this.changeLoginPageState} /> </div>}
          {this.state.addItempage && <div id="overlay" onClick={this.goToProduct}><  AddItems/> </div>}
        </div>
      </div>
    )
  }
}

export default App