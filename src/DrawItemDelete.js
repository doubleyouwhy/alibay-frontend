import React, { Component } from 'react'

class DrawItemDelete extends Component {
    constructor(){
        super();
        this.state={}
    }

// deleteItem=()=>{
//     console.log('delete button has been clicked')
//     fetch('/deleteItem',{
//         method: "POST",
//         credentials: 'include',
//         body: this.props.item.itemId
//     })
//     .then(x=>x.text())
//     .then(y=>console.log("this is y for delete button ", y))
// }
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
      <button onClick= {this.props.deleteItem} >Delete Item</button>
    </div>)
}
}

export default DrawItemDelete