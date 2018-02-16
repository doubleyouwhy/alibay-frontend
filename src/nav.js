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
  //   this.setState({ navLandingNoLogin: nextProps.navLandingNoLogin })
  // }
  render() {

    return (
   
      <div id="NavBar" >
        <div className='navLogo'>
        <img src="https://d3ri3cqgw71keo.cloudfront.net/wp-content/uploads/2009/11/LOGO1.gif" onClick={this.props.goToLanding}></img>
        </div>
          <div className='login-div'>
       
          {(this.props.navLandingNoLogin) && <button onClick={this.props.goToLogin} >Log in</button>}
          {(this.props.navLandingNoLogin) && <button onClick={this.props.goToSignIn} >Sign up</button>}
          {(this.props.navLandingNoLogin) && <button onClick={this.props.addItemLogin}>ADD ITEM</button>}
          {(!this.props.navLandingNoLogin) && <button onClick={this.props.addItem}>ADD ITEM</button>}
          {(!this.props.navLandingNoLogin && this.props.Landing) && <button onClick={this.props.goToProfile}>My Profile</button>}
          {(!this.props.navLandingNoLogin) && <div className='cart'> Cart {this.state.itemsInCart}</div>}
          </div>
        </div>

    )
  }
}

export default Nav
