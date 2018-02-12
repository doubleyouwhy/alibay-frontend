import React, { Component } from 'react'
import './App.css'

class Landing extends Component{

    logIn =()=>{
        console.log("user is loggin in - take me to login page")
    }

    signUp =()=>{
        console.log('user wants to sign up - take me to sign up page')
    }

    productPage=()=>{
        console.log('user clicked on image - take me to product page')
    }


    render(){
        return(
            <div id= 'Product'>
                <div className = 'login-div'>  
                    <button onClick = {this.logIn}>Log in</button>
                    <button onClick = {this.signUp}>Sign up</button>
                </div>
                <h1 className = "header" >I am the landing page</h1>
                <div className= "search-div">
                    <input className="search-bar" placeholder='search'/>
                    <button>submit</button>
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
                  
                 
                </div>

            </div>
        
        )  
    }
}

export default Landing