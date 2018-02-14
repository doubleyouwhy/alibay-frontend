import React, { Component } from 'react'
import './App.css'
// import ProductDetail from './ProductDetail.js'
// import Nav from './nav.js'


class Search extends Component{
    render(){
        return(
            <div id= 'Product'>
                <div className= "search-div">
                    <input className="search-bar" placeholder="search" ref={srch => this.searchInput = srch}></input>
                    <button onClick = {this.runSearch}>submit</button>
                </div>
                <div>Showing: search results</div>
                <div className = "gallery">
                    <div className = "product-preview">
                         <img onClick = {this.props.productPage} className ="thumbnail" alt='chair' src='https://static.structube.com/media/catalog/product/cache/1/thumbnail/900x698/75682affa62b5fff039e968bba255800/0/2/02-90.12.14.20_armchair_eiffel-90.12.14.20.jpg' />  
                         <div>Cool chair </div>
                         <div>$450</div>
                    </div>                 
                </div>
            </div> 
        )  
    
     
    }   
  }


export default Search