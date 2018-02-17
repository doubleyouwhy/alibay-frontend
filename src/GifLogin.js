import React, { Component } from 'react'
import Login from './Login.js'
import './App.css'

class GifLogin extends Component {
  constructor() {
    super();
    this.state = {
     
    };
  }

saveUserName  = () => {

}

  render() {
    console.log("lalala" +this.props.username)
    return (
       
        <div className="gif" >
       <img className="gifImage" src="https://media.giphy.com/media/eumUGvgRP1H12au9jW/giphy.gif" ></img>
       <h1 className="gifText"> Welcome in {this.props.username} </h1>
          </div>

          
    );
  }
}

export default GifLogin
