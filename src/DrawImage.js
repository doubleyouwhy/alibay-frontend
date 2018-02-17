import React, { Component } from 'react'

function DrawImage (props) {
  return (
    <div className='product-preview' >
        <img

            onClick={() => {
              props.goToProductPage(props.item)
            }}
            className='thumbnail' alt={props.item.prodName}
            src={props.item.image} />

        <div>{props.item.prodName}</div>
        <div>${props.item.price}</div>
    
        {props.item.isSold?<div>SOLD OUT</div>:null}
    </div>)
}

export default DrawImage
