import React, { Component } from 'react'
import './App.css'

class Nav extends Component {
  constructor () {
    super()
    this.state = {
      itemsInCart: 0
    }
  }

  render () {
    return (
      <div id="Product" className='navWrapper'>
        <div className='login-div'>
          <div className='cart'> Cart {this.state.itemsInCart}</div>
          <button onClick={this.props.goToLogin}>Log in</button>
          <button onClick={this.props.goToSignIn}>Sign up</button>
          <button onClick={this.props.goToAddItems}>AddItems</button>
        </div>
        {/* <h1 onClick={this.props.goToLanding} className='header' >MAIN NAV BAR</h1> */}
      </div>
    )
  }
}

export default Nav
