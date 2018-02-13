/// name / description / picture /

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
        console.log("name", name);
        console.log("description", description);
       
    
      }


    render() {
    
            return (
                <div id='Product'>
          <h1> Add items </h1>
          <input ref={r => this.name = r} placeholder="name"  />
          <input ref={r => this.description = r} placeholder="description"  />
          <button onClick={this.submit} > submit </button>
          <button onClick={this.addPhoto} > add photo </button>
        </div>
            );
       
    }
}

export default AddItems
