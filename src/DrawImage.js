import React, { Component } from 'react'

function DrawImage (props) {
  return (
    <div className='product-preview' >
      <div className='img-warpper' >
        {props.item.isSold ? <h2 id='sold-out' >SOLD</h2> : null}
        <div id='for-sale'> ${props.item.price} </div>

        <img onClick={() => { props.goToProductPage(props.item) }}

          className='thumbnail' alt={props.item.prodName}
          src={props.item.image} />

      </div>
      <div className='title'>{props.item.prodName}</div>

    </div>)
}

export default DrawImage
