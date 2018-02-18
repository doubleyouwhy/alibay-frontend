import React, { Component } from 'react'

function OrderHistory (props) {
   

  return (
    <div className='history' > 
        <div> Order Date: {props.item.orderDate.slice(0,10)}</div>
        <div>Confirmation number: {props.item.confirmation}</div>
        <div className ="title">Product: {props.item.prodName}</div>
        <div>Price: ${props.item.price} </div>
        
          
    </div>)
}

export default OrderHistory
