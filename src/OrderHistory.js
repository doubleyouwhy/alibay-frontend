import React, { Component } from 'react'

function OrderHistory (props) {
  return (
    <div className='orderSummary'>
      <div className='history' >
        <h4 className='title'>Purchased:<br /> <span style={{color: '#000000'}}>1 x {props.item.prodName}</span></h4>
        <h4>Order Date: <span id='right-align'>{props.item.orderDate.slice(0, 10)}</span></h4>
        <h4>Order <span id='right-align'>#{props.item.confirmation}</span></h4>
        <h3>Paid: <span id='right-align'>${(props.item.price * 1.15 + 25).toFixed(2)} </span></h3>
      </div>
    </div>)
}

export default OrderHistory