import React, { Component } from 'react'
import './App.css'
import ProductDetail from './ProductDetail.js'
import Landing from './landing.js'
import Nav from './nav.js'
import Login from './Login'
import SignIn from './SignIn'

class Search extends Component{

    constructor(){
        super();
        this.state = {
            hidden: false,
            ProductDetail: false,
            landing: false, 
            loginPage: false,
            signUpPage: false,
        }
    }

    goToLogin =()=>{
        console.log('user wants to sign up - take me to sign up page')
        this.setState({hidden: true, loginPage: true})
    }
    goToSignIn =()=>{
        console.log('user wants to sign up - take me to sign up page')
        this.setState({hidden: true, signInPage: true})
    }
    goToLanding = ()=>{
        this.setState({hidden:false, landing: true})
    }
    

    productPage=()=>{
        console.log('user clicked on image - take me to product page')
        this.setState({hidden: true, ProductDetail: true})
    
       
    }
    runSearch =()=>{
        console.log('user is searching for:', this.searchInput.value)
    }


    render(){
        if (this.state.hidden === false){
        return(
            <div id= 'Product'>
                <div className= "search-div">
                    <input className="search-bar" placeholder="search" ref={srch => this.searchInput = srch}></input>
                    <button onClick = {this.runSearch}>submit</button>
                </div>
                <div>Showing: search results</div>
                <div className = "gallery">
                    <div className = "product-preview">
                         <img onClick = {this.productPage} className ="thumbnail" alt='chair' src='https://static.structube.com/media/catalog/product/cache/1/thumbnail/900x698/75682affa62b5fff039e968bba255800/0/2/02-90.12.14.20_armchair_eiffel-90.12.14.20.jpg' />  
                         <div>Cool chair </div>
                         <div>$450</div>
                    </div>
                    <div className = "product-preview">
                         <img onClick = {this.productPage} className ="thumbnail" alt='chair' src='https://static.structube.com/media/catalog/product/cache/1/thumbnail/900x698/75682affa62b5fff039e968bba255800/0/2/02-90.12.14.20_armchair_eiffel-90.12.14.20.jpg' />  
                         <div>Cool chair </div>
                         <div>$450</div>
                    </div>
                    <div className = "product-preview">
                         <img onClick = {this.productPage} className ="thumbnail" alt='chair' src='https://static.structube.com/media/catalog/product/cache/1/thumbnail/900x698/75682affa62b5fff039e968bba255800/0/2/02-90.12.14.20_armchair_eiffel-90.12.14.20.jpg' />  
                         <div>Cool chair </div>
                         <div>$450</div>
                    </div>
                    <div className = "product-preview">
                         <img onClick = {this.productPage} className ="thumbnail" alt='chair' src='https://static.structube.com/media/catalog/product/cache/1/thumbnail/900x698/75682affa62b5fff039e968bba255800/0/2/02-90.12.14.20_armchair_eiffel-90.12.14.20.jpg' />  
                         <div>Cool chair </div>
                         <div>$450</div>
                    </div>
                    <div className = "product-preview">
                         <img onClick = {this.productPage} className ="thumbnail" alt='chair' src='https://static.structube.com/media/catalog/product/cache/1/thumbnail/900x698/75682affa62b5fff039e968bba255800/0/2/02-90.12.14.20_armchair_eiffel-90.12.14.20.jpg' />  
                         <div>Cool chair </div>
                         <div>$450</div>
                    </div>
                    <div className = "product-preview">
                         <img onClick = {this.productPage} className ="thumbnail" alt='chair' src='https://static.structube.com/media/catalog/product/cache/1/thumbnail/900x698/75682affa62b5fff039e968bba255800/0/2/02-90.12.14.20_armchair_eiffel-90.12.14.20.jpg' />  
                         <div>Cool chair </div>
                         <div>$450</div>
                    </div>
                  
                  
                 
                </div>
            </div> 
        )  
        } else if (this.state.ProductDetail){
            return < ProductDetail />}
        else if(this.state.landing){
            return <Landing />
        } else if (this.state.loginPage)
        {
            return < Login />
         }else if (this.state.signInPage){
             return < SignIn />
         }
    }   
  }


export default Search