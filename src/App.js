import React, { Component } from 'react'
import './App.css'
import ProductDetail from './ProductDetail.js'
import SignIn from './SignIn.js'
import Login from './Login.js'
import Landing from './landing.js'
import AddItems from './addItems.js'
import Dashboard from './dashboard.js'
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
      addItempage: false,
      Dashboard: false,

    })
  }
  goToDashboard = () => {
    this.setState({ Dashboard: true })
  }
  goToLogin = () => {
    this.setState({ loginPage: true })
  }
  goToSignIn = () => {
    this.setState({
      signInPage: true
    })
  }
  loginToSignIn = () => {
    this.setState({
      signInPage: true,
      loginPage: false

    })

  }

  addItemSignInOff = () => {
    this.setState({
      addItemSign: false,
      addItempage: false
    })
  }


  changeLoginPageState = () => {
    this.setState({
      loginPage: false,
      signInPage: false,
      navBarOff: false,
      addItempage: false,
      isLoggin: true,
    })
  }



  addItemLogin = () => {
    this.setState({
      loginPage: true,
      addItemSign: true
    })
  }
  addItem = () => {

    this.setState({ addItempage: true })
  }

  render() {
    console.log("item sign", this.addItemSign)
    return (

      <div className='App'>

        {this.state.navBarOff && <div>< Nav goToLogin={this.goToLogin}
          goToSignIn={this.goToSignIn} addItemLogin={this.addItemLogin}
        /></div>}

        {(!this.state.navBarOff && this.state.isLoggin) && <div>< UserNav addItem={this.addItem}



        /></div>}

        < Dashboard />
       
        < Landing />
        <div>
          {this.state.loginPage && <div id="overlay" onClick={this.goToProduct}>    < Login changeLoginPageState={this.changeLoginPageState} loginToSignIn={this.loginToSignIn} />       </div>}
          {this.state.signInPage && <div id="overlay" onClick={this.goToProduct}>< SignIn changeLoginPageState={this.changeLoginPageState} /> </div>}

          {(this.state.addItemSign && this.state.isLoggin) && <div id="overlay" onClick={this.addItemSignInOff}><  AddItems addItemSignInOff={this.addItemSignInOff} /> </div>}


          {this.state.addItempage && <div id="overlay" onClick={this.goToProduct}><  AddItems addItemSignInOff={this.addItemSignInOff} /> </div>}
        </div>
      </div>
    )
  }
}

export default App