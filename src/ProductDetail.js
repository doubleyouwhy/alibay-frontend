import React, { Component } from 'react'
import './App.css'
import Shipping from './Shipping.js'

class ProductDetail extends Component {

    constructor(props) {
        super(props)
        this.state = {
            hidden: false,
            itemsInCart: 0,
            loginPage: false,
            signInPage: false,
            productTitle: '',
            price: '',
            blurb: '',
            productImage: '',
        }
        console.log(this.props);
    };
    buyProduct = () => {
        this.setState({ hidden: true })
        return (<div>{this.props.item.prodName}<div><Shipping /></div></div>)
    }

    addToCart = () => {
        this.setState({ cart: this.props.cart + 1 })
        // console.log(this.props.cart)
        // console.log('you added to cart')
    }

    componentWillMount = () => {
        let product = this.props.item
        console.log('product detail props', this.props)
    }
    //     fetch('./productdetail', {
    //         method: 'POST',
    //         body: 'test'
    //     })
    //     .then(x => x.json())
    //     .then(y => {
    //         console.log(y)
    //         this.setState({
    //             productTitle: y.prodName,
    //             price: y.price,
    //             blurb: y.blurb,
    //             productImage: y.image
    //         })
    //     })
    // }

    render() {
        if (this.state.hidden === false) {
            return (
                <div id='Product'>
                    <div className='productWrapper'>
                        <div className='productImage'>
                            <img src={this.props.item.image} />
                        </div>
                        <div className='productInfo'>
                            <h1>{this.props.item.prodName}</h1>
                            <p>Sold by: <a href='http://localhost:3000'>{this.props.item.sellerID}</a></p>
                            <p>{this.props.item.blurb}</p>
                            <h2>${this.props.item.price}</h2>
                            <button onClick={this.buyProduct}>Buy Now</button>
                            <button onClick={this.addToCart}>Add to Cart</button>
                        </div>
                    </div>
                </div>
            )
        } else { return <Shipping item={this.props.item} /> }
    }
}
export default ProductDetail
