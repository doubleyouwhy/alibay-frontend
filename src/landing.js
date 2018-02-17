import React, { Component } from 'react'
import DrawImage from './DrawImage.js'

class Landing extends Component{

    constructor(){
        super();
        this.state = {
            hidden: false,    
            items: [],
            searchValue: "",
            displayBanner: true,
            currentSellers: [],
            sortUser:"all users",

            
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
    fetch('/getSellerNames',{
        credentials: "include"
    })
    .then(x=>x.json())
    .then(y=>{
        var sellerIds = Object.keys(y);
     
        var sellers = sellerIds.map(element=> {
        return {sellerName: y[element], sellerId: element}
    })
        this.setState({currentSellers: sellers})
    
})

}   
sortSelection=(event)=>{
    var body = {sellerId:  event.target.value};
   
    //console.log('this is event target value' , id.toString())
 
    fetch('/itemsSoldby',{
        method: "POST",
        credentials: 'include',
        body: event.target.value
    })
    .then(x => x.json())
    .then(y => {
        console.log('this is y for sortSelection', y)
    })

}

sortByPrice=(event)=>{
    console.log('this is the event targe value for sort by price', event.target.value)
    console.log('all items', this.state.items)
    var sorted = this.state.items.sort(function (a, b) {
        return a.price - b.price;   
    })
    console.log('the sorted array' , sorted)
}

runSearch =()=>{
    fetch ('/search',{
        method: "POST",
        credentials: 'include',
        body: this.searchInput.value
    })
    .then(x=>x.json())
    .then(y=> {
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
                    <div> SORT BY:   
                        <select value={this.state.sortUser} onChange={this.sortSelection}>
                            {this.state.currentSellers.map(seller => <option value={seller.sellerId}>{seller.sellerName}</option>)}
                        </select>
                        <select value={this.state.sortPrice} onChange={this.sortByPrice}>
                            <option value="Price Low To High">Price Low To High</option>
                            <option value="High To Low">Price High To Low</option>
                        </select>
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