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
       <img alt='welcome' className="gifImage" src="https://i.imgur.com/er7QYfD.gif" ></img>
       <h1 className="gifText">Happy Shopping {this.props.username}!</h1>
          </div>

          
    );
  }
}

export default GifLogin
