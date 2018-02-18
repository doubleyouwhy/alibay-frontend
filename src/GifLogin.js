import React, { Component } from 'react'
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
  
    return (
       
        <div className="gif" >
       <img className="gifImage" src="https://media.giphy.com/media/eumUGvgRP1H12au9jW/giphy.gif" ></img>
       <h1 className="gifText"> Welcome back {this.props.username} </h1>
          </div>

          
    );
  }
}

export default GifLogin
