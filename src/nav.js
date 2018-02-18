import React, { Component } from 'react'
import './App.css'

class Nav extends Component {
  constructor () {
    super()
    this.state = {
      itemsInCart: 0
    }
  }
  // componentWillReceiveProps(nextProps) {
  //   this.setState({ userIsLogin: nextProps.userIsLogin })
  // }
  render () {
    return (

      <div id='NavBar' >
        <div className='navLogo'>
          <img src='https://media.giphy.com/media/9PnSG1hB8QQfrRVyWt/giphy.gif' onClick={this.props.goToLanding} />
        </div>
        <div className='login-div'>

          {(this.props.userIsLogin) && <button className='accountButton' onClick={this.props.goToLogin} >Log in</button>}
          {(this.props.userIsLogin) && <button className='accountButton' onClick={this.props.goToSignIn} >Sign up</button>}
          {(this.props.userIsLogin) && <button className='addItemButton' onClick={this.props.addItemLogin}>Add Item</button>}
          {(!this.props.userIsLogin) && <button className='addItemButton' onClick={this.props.addItem}>Add Item</button>}
          {(!this.props.userIsLogin && this.props.Landing) && <button className='accountButton' onClick={this.props.goToProfile}>My Profile</button>}
          {(!this.props.userIsLogin && this.props.productDetailNav) && <button className='accountButton' onClick={this.props.goToProfile}>My Profile</button>}

          
          {(!this.props.userIsLogin) && <button className='accountButton' onClick={this.props.logout}>Logout</button>}

        </div>
      </div>

    )
  }
}

export default Nav
