import React, { Component } from 'react'

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

        fetch ('/itemsForSale?uid=12345')
        .then(x => x.json())
        .then(y =>{
            console.log(y)
            var keys = Object.keys(y);

            var itemsForSaleArr = keys.map(element =>{
                return y[element];
            })
            this.setState({ itemsForSale: itemsForSaleArr})
            })     

        fetch('/itemsSold?uid=12345')
        .then(x => x.json())
        .then(y => {
            console.log(y)
            var keys = Object.keys(y);

            var itemsSoldArr = keys.map(element=>{
                return y[element];
            })
            this.setState({itemsSold: itemsSoldArr })
        })

        fetch('/itemsBought?uid=12345')
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

 
    dashBoardDrawItem = (element, index, arr) => {
        return(    
            <div  className = "product-preview" key={index}>
            <img onClick = {()=>this.productPage(element)} 
                 className ="thumbnail" 
                 alt= {element.prodName} 
                 src= {element.image}/>  

            <div>{element.prodName}</div>
            <div>{element.price}</div>
         </div>
            
        )}

    render(){
       
        return (
             <div id= 'Product' className = "profile"> 
                    <h1>Your Profile</h1>
                    <div>Items you're selling</div>
                    <div className="profile-gallery"> 
                        {this.state.itemsForSale.map(this.dashBoardDrawItem)}   
                    </div>  
                    <div>Items you've sold</div>
                    <div className="profile-gallery"> 
                        {this.state.itemsSold.map(this.dashBoardDrawItem)}   
                    </div> 
                    <div>Items you've purchased</div>
                    <div className="profile-gallery"> 
                        {this.state.itemsBought.map(this.dashBoardDrawItem)}   
                    </div>       
            </div>
            )
        }
    }


export default Dashboard