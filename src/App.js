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
import DrawImage from './DrawImage'
import GifLogin from './GifLogin'

class App extends Component {
  constructor() {
    super();
    this.state = {
      userIsLogin: true,
      Landing: true,
      ProductDetail: false,
      displayBanner: false,
    }
  }
  componentWillMount = () => {
    fetch('/firstCookie', {
      method: "GET",
      credentials: "include"
    })
      .then(x => x.text())
      .then(x => {
       console.log("firstcokie",x)
        if (x !== "fail") {
          
          this.setState({userIsLogin: false,
                        
          })
        }})}


        logout = () => {
          fetch('/logout', {
            method: "GET",
            credentials: "include"
          })
          .then(x => x.text())
          .then(x => {
          
            if (x === "success") {
       
               document.location.reload(true);
              
            }
            
          
          })}

        

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
              addItempage: false,
              
            })
          }

          // remove Login, signIn and addItem page after submit 
          changeLoginPageState = (x) => {
            this.setState({
              loginPage: false,
              signInPage: false,
              userIsLogin: false,
              addItempage: false,
              username : x,
              GifLogin: true,
            })
            setTimeout( this.closeGif, 2700);
            console.log(this.state.username )
          }

          // Login and add items
          addItemLogin = () => {
            this.setState({
              loginPage: true,
              addItemSign: true
            })
          }
          closeGif = () => {
            this.setState({
              GifLogin: false,
              isLoggin: true 
            })
          }

          // add items on user nav bar
          addItem = () => {

            this.setState({ addItempage: true })
          }

          goToProfile = () => {

            this.setState({ Landing: false })
          }

          goToLanding = () => {
            console.log("icon clicked")
            this.setState({ Landing: true, displayBanner: true })
          }
          goToProductPage = (element) => {
            this.setState({ Landing: false, ProductDetail: element })

          }

          render() {

            return (

              <div className='App'>
                {/* non-user nav bar */}
                <div>< Nav logout={this.logout} goToLogin={this.goToLogin} goToLanding={this.goToLanding} goToProfile={this.goToProfile} goToSignIn={this.goToSignIn} addItem={this.addItem} addItemLogin={this.addItemLogin} userIsLogin={this.state.userIsLogin} Landing={this.state.Landing} /></div>

 
                {/* NOE I ADDED SOME CONDITIONALS HERE - megan */}

                {/* Landing Page / dashboard / product detail */}
                {this.state.Landing
                  ? <div> < Landing goToProductPage={this.goToProductPage} bannerState ={this.state.bannerState} /> </div>
                  : ((!this.state.Landing && !this.state.ProductDetail)
                    ? <div>< Dashboard goToProductPage={this.goToProductPage} /> </div>
                    : (!this.state.Landing && this.state.ProductDetail
                      ? <div> <ProductDetail  goToLogin={this.goToLogin} userIsLogin={this.state.userIsLogin} item={this.state.ProductDetail} /></div>
                      : null))}





                <div>
                  {/*  login */}
                  {this.state.loginPage && <div id="overlay" onClick={this.goToProduct}>    < Login changeLoginPageState={this.changeLoginPageState} loginToSignIn={this.loginToSignIn} addItemSign={this.state.addItemSign} username={this.username} />  </div>}
                  {/* sign in */}
                  {this.state.signInPage && <div id="overlay" onClick={this.goToProduct}>< SignIn changeLoginPageState={this.changeLoginPageState} /> </div>}
                  {/*login and add items*/}
                  {(this.state.addItemSign && this.state.isLoggin) && <div id="overlay" onClick={this.addItemSignInOff}><  AddItems addItemSignInOff={this.addItemSignInOff} /> </div>}
                  {/* add items */}
                  {this.state.addItempage && <div id="overlay" onClick={this.goToProduct}><  AddItems addItemSignInOff={this.addItemSignInOff} /> </div>}
                  
                  {/* gif */}
                  {this.state.GifLogin && <div id="overlay" ><  GifLogin username={this.state.username}     /> </div>}
                </div>
              </div>
            )
          }
        }

        export default App