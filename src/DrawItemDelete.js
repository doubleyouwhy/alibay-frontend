import React, { Component } from 'react'

class DrawItemDelete extends Component {
    constructor(){
        super();
        this.state={}
    }

deleteItem=()=>{
  console.log("this is inside the delete function", this.props.item.itemId)
  this.props.deleteItem(this.props.item.itemId)
}



render (){

  return (
   
    <div className='product-preview' >
        <img

          onClick={() => {
            console.log('clicked on product')
            this.props.goToProductPage(this.props.item)
          }}
          className='thumbnail' alt={this.props.item.prodName}
          src={this.props.item.image} />

        <div>{this.props.item.prodName}</div>
        <div>${this.props.item.price}</div>
        <button onClick= {this.deleteItem} >Delete Item</button>
    </div>)
}
}

export default DrawItemDelete