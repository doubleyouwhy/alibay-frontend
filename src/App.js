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
      navBarOff: true,
      Landing: true
    }
  }


///// clicking outside remove login / sing in / user additem page  
  goToProduct = () => {
    this.setState({
      loginPage: false,
      signInPage: false,
      addItempage: false,
      addItemSign: false
    })
  }
  
  
  
  
  goToLogin = () => {
    this.setState({ loginPage: true })
  }


  goToSignIn = () => {
    this.setState({
      signInPage: true
    })
  }

  // get you from login to sign in
  loginToSignIn = () => {
    this.setState({
      signInPage: true,
      loginPage: false

    })

  }
// remove (addItem after login) page after submit or clicking outside off the box
  addItemSignInOff = () => {
    this.setState({
      addItemSign: false,
      addItempage: false
    })
  }

// remove Login, signIn and addItem page after submit 
  changeLoginPageState = () => {
    this.setState({
      loginPage: false,
      signInPage: false,
      navBarOff: false,
      addItempage: false,
      isLoggin: true,
    })
  }


 // Login and add items

  addItemLogin = () => {
    this.setState({
      loginPage: true,
      addItemSign: true
    })
  }
 
 // add items on user nav bar
  addItem = () => {

    this.setState({ addItempage: true })
  }

  goToProfile = () => {

    this.setState({ Landing: false })
  }

  render() {
    
    return (

      <div className='App'>

        {/* non-user nav bar */}
        {this.state.navBarOff && <div>< Nav goToLogin={this.goToLogin} 
          goToSignIn={this.goToSignIn} addItemLogin={this.addItemLogin} /></div>}
         {/* user nav bar */}
        {(!this.state.navBarOff && this.state.isLoggin) && <div>< UserNav addItem={this.addItem} goToProfile={this.goToProfile} /></div>} 


       {/* Landing Page */}
       {(this.state.Landing) && <div> < Landing /> </div>}
       {/* dashboard Page */}
       {(!this.state.Landing) && <div> < Login /> </div>}

       
        <div>
           {/*  login */}
          {this.state.loginPage && <div id="overlay" onClick={this.goToProduct}>    < Login changeLoginPageState={this.changeLoginPageState} loginToSignIn={this.loginToSignIn} />       </div>}
          {/* sign in */}
          {this.state.signInPage && <div id="overlay" onClick={this.goToProduct}>< SignIn changeLoginPageState={this.changeLoginPageState} /> </div>}
          {/*login and add items*/}
          {(this.state.addItemSign && this.state.isLoggin) && <div id="overlay" onClick={this.addItemSignInOff}><  AddItems addItemSignInOff={this.addItemSignInOff} /> </div>}
          {/* add items */}
          {this.state.addItempage && <div id="overlay" onClick={this.goToProduct}><  AddItems addItemSignInOff={this.addItemSignInOff} /> </div>}
        </div>
      </div>
    )
  }
}

export default App