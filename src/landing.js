import React, { Component } from 'react'
import './App.css'
import Search from './search.js'
import ProductDetail from './ProductDetail.js'


class Landing extends Component{

    constructor(){
        super();
        this.state = {
            hidden: false,
            search: false,
            ProductDetail: false,
            loginPage: false,
            signInPage: false,
            dashboard: false, 
            items: []

        }
    }


componentWillMount(){
    fetch ('/getAllItems',{
        method: "POST",
        body: 'test'
    })
    .then(x => x.json())
    .then(y => {
        console.log(y)
        var keys = Object.keys(y);

        var itemArray = keys.map( element => {
            return y[element];
        });   
        console.log("item array:", itemArray)  
        this.setState({ items: itemArray})
    }) 
    }    
runSearch =()=>{
    console.log(this.searchInput.value)
    fetch ('/search',{
        method: "POST",
        body: this.searchInput.value
    })
    .then(x=>x.json())
    .then(y=> {
        console.log("this is y:" , y); 
        this.setState({hidden: true, search: true, items:y})    
   
})}

    productPage=(element)=>{
        console.log("product page function clicked")
        this.setState({hidden: true, ProductDetail: element, search: false})   
   
    }


    drawItem = (element, index, arr) => {
        return <div className = "product-preview" key={index}>
            <img onClick = {() => this.productPage(element)} className ="thumbnail" alt='boat' src= {element.image}/>
            <div>{element.prodName}</div>
            <div>{element.price}</div>
        </div>
    }
 
    render(){
        if (this.state.hidden === false){
        return(
            <div id= 'Product'>  
                    <div>
                        <img id ="bannerImage" alt='house' src='https://livingedge.com.au/cache/img/app/img/asset/29/93/52/2/herman-miller-eames-compact-sofa-lifestyle-01.jpg/w-1326_h-699_q-90_c-c/herman-miller-eames-compact-sofa-lifestyle-01.jpg' />  
                    </div>
                    <div className= "search-div">
                        <input className="search-bar" placeholder="search" ref={srch => this.searchInput = srch}></input>
                        <button onClick = {this.runSearch}>submit</button>
                    </div>
                    <div className = "gallery">
                        {this.state.items.map(this.drawItem)}   
                    </div>
            </div>
        
        )  
    } else if (this.state.search){
        return < Search productPage = {this.productPage} drawItem = {this.drawItem} itemState = {this.state.items} />
        } else if (this.state.ProductDetail){
            return < ProductDetail item={this.state.ProductDetail} />
        }
    }
  }


export default Landing