import React, { Component } from 'react'
import Login from './Login.js'
import './App.css'

class GifLogin extends Component {
  constructor() {
    super();
    this.state = {
     
    };
  }



  render() {
    console.log("lalala" +this.username)
    return (
       
        <div className="gif" >
       <img src="https://media0.giphy.com/media/65mCMJDdABFYs/200w.gif" ></img>
       <h1> Welcome in {this.props.username} </h1>
          </div>

          
    );
  }
}

export default GifLogin
