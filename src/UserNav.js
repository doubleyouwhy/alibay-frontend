import React, { Component } from 'react'
import './App.css'

class UserNav extends Component {
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
          <button onClick={this.props.addItem}>ADD ITEM</button>
       
         </div>
        {/* <h1 onClick={this.props.goToLanding} className='header' >MAIN NAV BAR</h1> */}
      </div>
    )
  }
}

export default UserNav 
