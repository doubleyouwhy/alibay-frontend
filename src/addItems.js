

import React, { Component } from 'react'
import './App.css'


class AddItems extends Component {
  constructor() {
    super();
    this.state = {

    };
  }


  addPhoto = () => {

    console.log("add photo");


  }


  submit = () => {
    var name = this.name.value;
    var description = this.description.value;
    var price = this.price.value;
    console.log("name", name);
    console.log("description", description);
    console.log("price :", price);


  }


  render() {

    return (
      <div id='loginStyle' onClick={(i)=> i.stopPropagation()} >
        <h1> Add items </h1>
        <div><input ref={r => this.name = r} placeholder="name" /> </div>
        <div><input ref={r => this.description = r} placeholder="description" /> </div>
        <div><input ref={r => this.price = r} placeholder="Price" /> </div>
        <div> <button onClick={this.addPhoto} > add photo </button> </div>
        <div> <button onClick={this.submit} > submit </button> </div>
      </div>
    );

  }
}

export default AddItems
