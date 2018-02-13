import React, { Component } from 'react'
import './App.css'
import Nav from './nav.js'

class Dashboard extends Component{

    constructor(){
        super ();
        this.state ={
            hidden:false,
            addProduct:false,
            landing:false,

        }
    }
    goToLanding = ()=>{
        this.setState({hidden:false, landing: true})
    }
    render(){
       
        if(!this.state.hidden ){
        return ( <div id= 'Product'>
                    <div> 
                        < Nav goToLogin = {this.goToLogin} 
                            goToSignIn = {this.goToSignIn}
                            />
                    </div>
                    <div> Items for Sale</div>
                        <div className = "gallery">
                            <div className = "product-preview">
                                <img className ="thumbnail" alt='chair' src='https://static.structube.com/media/catalog/product/cache/1/thumbnail/900x698/75682affa62b5fff039e968bba255800/0/2/02-90.12.14.20_armchair_eiffel-90.12.14.20.jpg' />  
                                <div>Cool chair </div>
                                <div>$450</div>
                             </div>
                        <div className = "gallery">
                            <div className = "product-preview">
                                <img className ="thumbnail" alt='chair' src='https://static.structube.com/media/catalog/product/cache/1/thumbnail/900x698/75682affa62b5fff039e968bba255800/0/2/02-90.12.14.20_armchair_eiffel-90.12.14.20.jpg' />  
                                <div>Cool chair </div>
                                <div>$450</div>
                            </div>
                        <div className = "gallery">
                            <div className = "product-preview">
                                <img className ="thumbnail" alt='chair' src='https://static.structube.com/media/catalog/product/cache/1/thumbnail/900x698/75682affa62b5fff039e968bba255800/0/2/02-90.12.14.20_armchair_eiffel-90.12.14.20.jpg' />  
                                <div>Cool chair </div>
                                <div>$450</div>
                             </div>
                        </div> 
                     </div>            
                    </div>
                    <div> Items Bought</div>
                        <div className = "gallery">
                            <div className = "product-preview">
                                <img className ="thumbnail" alt='chair' src='https://static.structube.com/media/catalog/product/cache/1/thumbnail/900x698/75682affa62b5fff039e968bba255800/0/2/02-90.12.14.20_armchair_eiffel-90.12.14.20.jpg' />  
                                <div>Cool chair </div>
                                <div>$450</div>
                             </div>
                        <div className = "gallery">
                            <div className = "product-preview">
                                <img className ="thumbnail" alt='chair' src='https://static.structube.com/media/catalog/product/cache/1/thumbnail/900x698/75682affa62b5fff039e968bba255800/0/2/02-90.12.14.20_armchair_eiffel-90.12.14.20.jpg' />  
                                <div>Cool chair </div>
                                <div>$450</div>
                            </div>
                        <div className = "gallery">
                            <div className = "product-preview">
                                <img className ="thumbnail" alt='chair' src='https://static.structube.com/media/catalog/product/cache/1/thumbnail/900x698/75682affa62b5fff039e968bba255800/0/2/02-90.12.14.20_armchair_eiffel-90.12.14.20.jpg' />  
                                <div>Cool chair </div>
                                <div>$450</div>
                             </div>
                        </div> 
                     </div>            
                    </div>
                </div>
        )
    }

    }
}

export default Dashboard