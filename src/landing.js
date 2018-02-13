import React, { Component } from 'react'
import './App.css'
import Search from './search.js'
import ProductDetail from './ProductDetail.js'
import Nav from './nav.js'
import Login from './Login.js'
import SignIn from './SignIn.js'

class Landing extends Component{

    constructor(){
        super();
        this.state = {
            hidden: false,
            search: false,
            ProductDetail: false,
            loginPage: false,
            signInPage: false,
        }
    }



    productPage=()=>{
        console.log('user clicked on image - take me to product page')
        this.setState({hidden: true, ProductDetail: true})   
   
    }
    runSearch =()=>{
        console.log('user is searching for:', this.searchInput.value)
        this.setState({hidden: true, search: true})    
    }
    goToProduct =()=>{
        this.setState({loginPage: false,
                        signInPage: false})
    }
    goToLogin =()=>{
        console.log('user wants to sign up - take me to sign up page')
        this.setState({loginPage: true})
    }
    goToSignIn =()=>{
        console.log('user wants to sign up - take me to sign up page')
        this.setState({signInPage: true})
    }
 

    render(){
        if (this.state.hidden === false){
        return(
            <div id= 'Product'>
                <div> 
                    < Nav goToLogin = {this.goToLogin} 
                          goToSignIn = {this.goToSignIn}
                          />
                </div>
                <div>
                <img id ="bannerImage" alt='house' src='https://livingedge.com.au/cache/img/app/img/asset/29/93/52/2/herman-miller-eames-compact-sofa-lifestyle-01.jpg/w-1326_h-699_q-90_c-c/herman-miller-eames-compact-sofa-lifestyle-01.jpg' />  
                </div>

                <div className= "search-div">
                    <input className="search-bar" placeholder="search" ref={srch => this.searchInput = srch}></input>
                    <button onClick = {this.runSearch}>submit</button>
                </div>
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
                {this.state.loginPage && <div id="overlay" onClick={this.goToProduct}>< Login />  </div>}
                {this.state.signInPage && <div id="overlay" onClick={this.goToProduct}>< SignIn /> </div> }
            </div>
        
        )  
    } else if (this.state.search){
        return < Search />
        } else if (this.state.ProductDetail){
            return < ProductDetail />
        }
       
       
  }}


export default Landing