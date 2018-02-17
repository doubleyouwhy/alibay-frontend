import React, { Component } from 'react'
import DrawImage from './DrawImage'
import DrawItemDelete from './DrawItemDelete'

class Dashboard extends Component{

    constructor(){
        super();
        this.state = {
            itemsForSale:[],
            itemsSold:[],
            itemsBought:[]        
        }
    }
     componentWillMount=()=>{

        fetch ('/itemsForSale',{
            credentials: 'include'
        })
        .then(x => x.json())
        .then(y =>{
            console.log(y)
            var keys = Object.keys(y);

            var itemsForSaleArr = keys.map(element =>{
                return y[element];
            })
            this.setState({ itemsForSale: itemsForSaleArr})
            })     

        fetch('/itemsSold',{
            credentials: 'include'
        })
        .then(x => x.json())
        .then(y => {
            console.log(y)
            var keys = Object.keys(y);

            var itemsSoldArr = keys.map(element=>{
                return y[element];
            })
            this.setState({itemsSold: itemsSoldArr })
        })

        fetch('/itemsBought',{
            credentials: 'include'
        })
        .then(x => x.json())
        .then(y => {
            console.log(y)
            var keys = Object.keys(y);

            var itemsBoughtArr = keys.map(element=>{
                return y[element];
            })
            this.setState({itemsBought: itemsBoughtArr})
        
        })
    }

    render(){
       
        return (
             <div id= 'Product' className = "profile"> 
                    <h1>Your Profile</h1>
                    <div>Items you're selling</div>
                    <div className="profile-gallery"> 
                        {this.state.itemsForSale.map(item => <DrawItemDelete 
                            item = {item} 
                            goToProductPage={this.props.goToProductPage}/>)}   
                    </div>  
                    <div>Items you've sold</div>
                    <div className="profile-gallery"> 
                        {this.state.itemsSold.map(item => <DrawItemDelete 
                            item = {item} 
                            goToProductPage={this.props.goToProductPage}/>)}   
                    </div> 
                    <div>Items you've purchased</div>
                    <div className="profile-gallery">  
                        {this.state.itemsBought.map(item => <DrawImage
                             item = {item} 
                             goToProductPage={this.props.goToProductPage}/>)}   
                    </div>       
            </div>
            )
        }
    }


export default Dashboard