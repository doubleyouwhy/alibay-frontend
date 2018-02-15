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
        .then(y => console.log(y))

        fetch('/itemsSold?uid=12345')
        .then(x => x.json())
        .then(y => console.log(y))

        fetch('/itemsBought?uid=12345')
        .then(x => x.json())
        .then(y => console.log(y))
    }
    // dashBoardDrawItem = (element, index, arr) => {
    //     return    
    //         <div  className = "product-preview" key={index}>
    //         <img  className ="thumbnail" alt= {element.prodName} 
    //               src= {element.image}/>  

    //         <div>{element.prodName}</div>
    //         <div>{element.price}</div>
    //     </div>
    // }

    render(){
       
        return (
             <div id= 'Product'> dashboard
                    {/* <div className = "gallery"> Items for Sale
                        {this.state.itemsForSale.map(this.dashBoardDrawItem)}   
                    </div>  
                    <div className = "gallery"> Sold items
                        {this.state.itemsSold.map(this.dashboardDrawItem)}   
                    </div> 
                    <div className = "gallery"> Items bought
                        {this.state.itemsBought.map(this.dashboardDrawItem)}   
                    </div>        */}
            </div>
            )
        }
    }


export default Dashboard