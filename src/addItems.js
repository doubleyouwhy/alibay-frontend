import React, { Component } from 'react'
import './App.css'

var input = document.querySelector('input');
var preview = document.querySelector('.preview');



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
    
    fetch('/upics?name=' + randomName + fileExtension, { method: "POST", credentials: "include", body: x })
      .then(x => x.text())
      .then(x => {
        console.log(x)
        this.setState({ number: randomName + fileExtension })
        console.log("the number   :", this.state.number)
      })

  }

   updateImageDisplay = () => {
    this.input.addEventListener('change', this.updateImageDisplay);

    while(preview.firstChild) {
      preview.removeChild(preview.firstChild);
    }
  
    var curFiles = input.files;
    if(curFiles.length === 0) {
      var para = document.createElement('p');
      para.textContent = 'No files currently selected for upload';
      preview.appendChild(para);
    } else {
      var list = document.createElement('ol');
      preview.appendChild(list);
      for(var i = 0; i < curFiles.length; i++) {
        var listItem = document.createElement('li');
        var para = document.createElement('p');
        
          var image = document.createElement('img');
          image.src = window.URL.createObjectURL(curFiles[i]);
  
          listItem.appendChild(image);
          listItem.appendChild(para);
  
    
  
        list.appendChild(listItem);
      }
    }
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
        document.location.reload(true);
      })
  }




  render() {
    return (
      <div id='loginStyle' onClick={(i) => i.stopPropagation()} >
        <div className='addItemsWrapper'>
          <h1>Sell an Item </h1>
          <div><input ref={r => this.name = r} placeholder="Product Name" /> </div>
          <div><input type="number" ref={r => this.price = r} placeholder="Price" /> </div>
          <div><textarea ref={r => this.description = r} placeholder="Description" /> </div>
          <div className="preview">
            <p>No files currently selected for upload</p>
          </div>
          <input type="file" id="input" onChange={e => this.uploadFile(e.target.files[0])} />
          <div> <button onClick={this.submit} id='ctaButton' > Submit </button> </div>
        </div>
      </div>
    );

  }
}

export default AddItems
