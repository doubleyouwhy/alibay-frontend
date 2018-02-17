import React, { Component } from 'react'

function DrawImage (props) {
  return (
    <div className='product-preview' > 
        <div className='img-warpper' >
            {props.item.isSold?<h2 id='sold-out' >SOLD OUT</h2>:null}
                <img onClick={() => {props.goToProductPage(props.item) }}

                    className='thumbnail' alt={props.item.prodName}
                    src={props.item.image} />
                
        </div>
        <div>{props.item.prodName}</div>
        <div>${props.item.price}</div>
    
        
    </div>)
}

export default DrawImage
