import React, { Component } from 'react'
import ProductDetail from './ProductDetail.js'




class Landing extends Component{

    constructor(){
        super();
        this.state = {
            hidden: false,
            ProductDetail: false,      
            items: [],
            searchValue: "",
            displayBanner: true
        }
    }
componentWillMount=()=>{
    fetch ('/getAllItems',{
        method: "POST",
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

    productPage=(element)=>{
        this.setState({hidden: true, ProductDetail: element, search: false})   
   
    }

    drawItem = (element, index, arr) => {
        return (
        
            <div className = "product-preview" key={index}>
            <img onClick = {() => this.productPage(element)} 
                className ="thumbnail" alt={element.prodName}
                src= {element.image}/>

            <div>{element.prodName}</div>
            <div>${element.price}</div>
        </div>)
    }
 
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
                        {this.state.items.map(this.drawItem)}   
                    </div>
            </div>       
        )         
            } else if (this.state.ProductDetail){
                  return < ProductDetail 
                        item={this.state.ProductDetail} />
        }
    }
  }
export default Landing