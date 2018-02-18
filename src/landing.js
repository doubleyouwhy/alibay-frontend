import React, { Component } from 'react'
import DrawImage from './DrawImage.js'

class Landing extends Component {

    constructor() {
        super();
        this.state = {
            hidden: false,
            items: [],
            searchValue: "",
            displayBanner: true,
            currentSellers: [],
            sortUser: "all users",


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

        var itemArray = keys.map(element => {
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
    if (event.target.value !== "Sort by Seller"){
    var body = {sellerId:  event.target.value};
    this.setState({sortUser : event.target.value})
    //console.log('this is event target value' , id.toString())
 
    fetch('/itemsSoldby',{
        method: "POST",
        credentials: 'include',
        body: JSON.stringify(body)
    })
    .then(x => x.json())
    .then(y => {
        console.log('this is y for sortSelection', y)
    })
}
}

sortByPrice=(event)=>{
    
    var low = "Low To High"
    var high ="High To Low"
    if (event.target.value === low) {
        var sortLowToHigh = this.state.items.sort(function (a, b) {
        return a.price - b.price 
       
    })
    this.setState({items: sortLowToHigh})

} else if (event.target.value === high){
        var sortHighToLow = this.state.items.sort(function (a, b) {
        return b.price - a.price
        })   
        this.setState({items: sortHighToLow})
      
}console.log('the sorted array of items ', this.state.items)
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
                    <div>{!this.state.displayBanner?null:
                    <div id='bannerImage'></div>
                    // <img id ="bannerImage" alt='house' src='https://livingedge.com.au/cache/img/app/img/asset/29/93/52/2/herman-miller-eames-compact-sofa-lifestyle-01.jpg/w-1326_h-699_q-90_c-c/herman-miller-eames-compact-sofa-lifestyle-01.jpg' />
                    }
                    </div>
                    <div className="search-div">
                        <div>
                        <input className="search-bar" placeholder="Search for a product" ref={srch => this.searchInput = srch}></input>
                        <button className='addItemButton'onClick={this.runSearch}>Submit</button>
                        </div>
                        <div>
                            <select value={this.state.sortUser} onChange={this.sortSelection}>
                                <option value="Sort by Seller">Sort By Seller</option>
                                {this.state.currentSellers.map(seller => <option value={seller.sellerId}>{seller.sellerName}</option>)}
                            </select>
                            <select value={this.state.sortPrice} onChange={this.sortByPrice}>
                                <option value="Sort by Price">Sort By Price</option>
                                <option value="Low To High">Price Low To High</option>
                                <option value="High To Low">Price High To Low</option>
                            </select>
                            <button className='addItemButton' onClick={this.componentWillMount}>Browse All</button>

                        </div>
                    </div>
                    <div>{!this.state.searchValue?null
                            :(this.state.searchValue && this.state.items===null
                                ?"Displaying: no results found"
                                :"Displaying: " + this.state.searchValue)}</div>
                    <div className = "gallery">
                        {this.state.items.map((item) => <DrawImage item = {item} goToProductPage={this.props.goToProductPage}  />)}   
                    </div>
                </div>
            )
        }

    }
}
export default Landing