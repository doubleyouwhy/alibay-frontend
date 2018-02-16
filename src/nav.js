import React, { Component } from 'react'
import './App.css'

class Nav extends Component {
  constructor() {
    super()
    this.state = {
      itemsInCart: 0
    }
  }
  // componentWillReceiveProps(nextProps) {
  //   this.setState({ userIsLogin: nextProps.userIsLogin })
  // }
  render() {

    return (
   
      <div id="NavBar" >
        <div className='navLogo'>
        <img src="https://media1.giphy.com/media/3o7TKJMBbHCbCZ1fwY/200w.gif" onClick={this.props.goToLanding}></img>
        </div>
          <div className='login-div'>
       
          {(this.props.userIsLogin) && <button onClick={this.props.goToLogin} >Log in</button>}
          {(this.props.userIsLogin) && <button onClick={this.props.goToSignIn} >Sign up</button>}
          {(this.props.userIsLogin) && <button onClick={this.props.addItemLogin}>ADD ITEM</button>}
          {(!this.props.userIsLogin) && <button onClick={this.props.addItem}>ADD ITEM</button>}
          {(!this.props.userIsLogin && this.props.Landing) && <button onClick={this.props.goToProfile}>My Profile</button>}
         
         {/* A FAIRE */}
          {(!this.props.userIsLogin) && <button onClick={this.props.logout}>logout</button>}
         
          {(!this.props.userIsLogin) && <div className='cart'> Cart {this.state.itemsInCart}</div>}
          </div>
        </div>

    )
  }
}

export default Nav
