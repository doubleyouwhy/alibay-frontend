import React, { Component } from 'react'

class DrawItemDelete extends Component {
    constructor() {
        super();
        this.state = {}
    }

    deleteItem = () => {
        console.log("this is inside the delete function", this.props.item.itemId)
        this.props.deleteItem(this.props.item.itemId)
    }



    render() {

        return (
            <div className='product-preview' >
                <div>
                    <div id='dash-for-sale'>${this.props.item.price}</div>
                    <img onClick={() => {
                        console.log('clicked on product')
                        this.props.goToProductPage(this.props.item)
                    }}
                        className='thumbnail' alt={this.props.item.prodName}
                        src={this.props.item.image} />
                </div>
                <div className='title'>{this.props.item.prodName}</div>
                <button id='delete' className='addItemButton' onClick={this.deleteItem} >Delete</button>
            </div>)
    }
}

export default DrawItemDelete