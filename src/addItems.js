import React, { Component } from 'react'
import './App.css'


class AddItems extends Component {
  constructor() {
    super();
    this.state = {

    };
  }


  uploadFile = (x) => {
    var randomName = Math.floor((Math.random() * 1000000) + 1);
    var fullName = x.type
    var splitName = fullName.split("/")
    var almostThere = splitName[1]
    var fileExtension = "." + almostThere
    
    fetch('/upics?name=' + randomName + fileExtension, { method: "POST",credentials: "include", body: x })
      .then(x => x.text())
      .then(x => {
        console.log(x)
        this.setState({ number: randomName + fileExtension })
        console.log("the number   :", this.state.number)
      })

  }


  submit = () => {
    var name = this.name.value;
    var description = this.description.value;
    var price = this.price.value;
    var image = this.state.number


    fetch('/newListing', {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        name: name,
        price: price,
        blurb: description,
        image: image
       
      })
    })
      .then(x => x.text())
      .then(x => {
        console.log(x)
        this.props.addItemSignInOff()
      })
  }




  render() {
    return (
      <div id='loginStyle' onClick={(i) => i.stopPropagation()} >
      <div className='addItemsWrapper'>
        <h1> Add Items </h1>
        <div><input ref={r => this.name = r} placeholder="Name" /> </div>
        <div><input type="number" ref={r => this.price = r} placeholder="Price" /> </div>
        <div><textarea ref={r => this.description = r} placeholder="Description" /> </div>
        <input type="file" id="input" onChange={e => this.uploadFile(e.target.files[0])} />
        <div> <button onClick={this.submit} id='ctaButton' > Submit </button> </div>
        </div>
      </div>
    );

  }
}

export default AddItems
