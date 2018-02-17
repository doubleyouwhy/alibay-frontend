import React, { Component } from 'react'
import ProductDetail from './ProductDetail.js'
import DrawImage from './DrawImage.js'




class Landing extends Component{

    constructor(){
        super();
        this.state = {
            hidden: false,    
            items: [],
            searchValue: "",
            displayBanner: true
            
        }
    }
componentWillMount=()=>{
    fetch ('/getAllItems',{
        method: "POST",
        credentials: 'include',  
        body: 'test'
    })
    .then(x => x.json())
    .then(y => {

        var keys = Object.keys(y);

        var itemArray = keys.map( element => {
            return y[element];
        });    
        this.setState({ items: itemArray, searchValue:""})
    }) 
}   
runSearch =()=>{
    fetch ('/search',{
        method: "POST",
        credentials: 'include',
        body: this.searchInput.value
    })
    .then(x=>x.json())
    .then(y=> {
        console.log("this is y:" , y); 
        this.setState({
            items:y, 
            searchValue: this.searchInput.value,
            displayBanner: false
        });
        this.searchInput.value = ""    
   
})}

    render(){
        if (this.state.hidden === false){
        return(
            <div id= 'Product'>  
                    <div>{!this.state.displayBanner?null:<img id ="bannerImage" alt='house' src='https://livingedge.com.au/cache/img/app/img/asset/29/93/52/2/herman-miller-eames-compact-sofa-lifestyle-01.jpg/w-1326_h-699_q-90_c-c/herman-miller-eames-compact-sofa-lifestyle-01.jpg' />}
                    </div>
                    <div className= "search-div">
                        <input className="search-bar" placeholder="search" ref={srch => this.searchInput = srch}></input>
                        <button onClick = {this.runSearch}>submit search</button>
                        <button onClick = {this.componentWillMount}>Browse All Products</button>
                    </div>
                    <div>{!this.state.searchValue?null
                            :(this.state.searchValue && this.state.items===null
                                ?"Displaying: no results found"
                                :"Displaying: " + this.state.searchValue)}</div>
                    <div className = "gallery">
                        {this.state.items.map(item => <DrawImage item = {item} goToProductPage={this.props.goToProductPage}  />)}   
                    </div>
            </div>       
        )         
            } 
       
    }
  }
export default Landing