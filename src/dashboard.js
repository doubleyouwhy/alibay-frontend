import React, { Component } from 'react'
import DrawImage from './DrawImage'
import DrawItemDelete from './DrawItemDelete'
import OrderHistory from './OrderHistory';

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

    deleteItem=(itemId)=>{
        var body = itemId.toString()
        
        console.log('here is itemId for delete item' , body)
      
        fetch('/deleteItem',{
            method: "POST",
            credentials: 'include',
            body: body
        })
        .then(x=>x.text())
        .then(y=>console.log("this is y for delete button ", y))
    }

    render(){
       
        return (
             <div id= 'Product' className = "profile"> 
                    <h1>Your Profile</h1>
                    <div className="seller">
                    <div>Items you're selling</div>
                    <div className="profile-gallery"> 
                        {this.state.itemsForSale.map(item => <DrawItemDelete 
                            deleteItem = {this.deleteItem}
                            item = {item} 
                            goToProductPage={this.props.goToProductPage}/>)}   
                    </div>  
                    <div>Items you've sold</div>
                    <div className="profile-gallery"> 
                        {this.state.itemsSold.map((item,idx) => <div key={idx}><DrawItemDelete 
                            deleteItem = {this.deleteItem}
                            item = {item} 
                            goToProductPage={this.props.goToProductPage}/></div>)}   
                    </div> 
                    </div>
                    <div>Order History</div>
                    <div className="profile-gallery">  
                        {this.state.itemsBought.map(item => <OrderHistory
                             item = {item} />)}   
                    </div>       
            </div>
            )
        }
    }


export default Dashboard