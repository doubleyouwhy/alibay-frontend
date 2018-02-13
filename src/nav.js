import React, { Component } from 'react'
import './App.css'

class Nav extends Component {
 
    render(){
        return(
                <div className = "navWrapper">
                    <div className = 'login-div'>  
                        <button onClick = {this.props.goToLogin}>Log in</button>
                        <button onClick = {this.props.goToSignIn}>Sign up</button>
                    </div>
                    <h1 onClick={this.props.goToLanding} className = "header" >MAIN NAV BAR</h1>
                </div>
        )
    }
}

export default Nav;