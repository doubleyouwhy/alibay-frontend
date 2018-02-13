import React, { Component } from 'react'
import './App.css'

class Nav extends Component {
    logIn =()=>{
        console.log("user is loggin in - take me to login page")
        this.setState({hidden: true})

    }

    signUp =()=>{
        console.log('user wants to sign up - take me to sign up page')
        this.setState({hidden: true})
    }

    landingPage =()=>{
        console.log('take user to landing page')
    }

    render(){
        return(
                <div className = "navWrapper">
                    <div className = 'login-div'>  
                        <button onClick = {this.props.goToLogin}>Log in</button>
                        <button onClick = {this.signUp}>Sign up</button>
                    </div>
                    <h1 onClick={this.landingPage} className = "header" >MAIN NAV BAR</h1>
                </div>
        )
    }
}

export default Nav;