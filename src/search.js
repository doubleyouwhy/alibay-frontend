import React, { Component } from 'react'
import './App.css'


class Search extends Component{
    constructor(){
        super();
        this.state = {
            items: []
        }
    }
    render(){
        return(
            <div id= 'Product'>
                <div className= "search-div">
                    <input className="search-bar" placeholder="search" ref={srch => this.searchInput = srch}></input>
                    <button onClick = {this.runSearch}>submit</button>
                </div>
                <div>Showing: search results</div>
                <div className = "gallery">
                    {this.props.state.items.map(this.props.drawItem)}                        
                </div>
            </div> 
        )  
    
     
    }   
  }


export default Search