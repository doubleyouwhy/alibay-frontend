import React, { Component } from 'react'
import './App.css'
import Shipping from './Shipping.js'
import Nav from './nav.js'

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
            productImage: 'url.com'
        }
    }

    buyProduct = () => {
        this.setState({ hidden: true })
    }

    addToCart = () => {
        this.setState({ cart: this.props.cart + 1 })
        console.log(this.props.cart)
        console.log('you added to cart')
    }

    componentWillMount = () => {
        fetch('./productdetail', {
            method: 'POST',
            body: 'test'
        })
        .then(x => x.json())
        .then(y => {
            console.log(y)
            this.setState({
                productTitle: y.prodName,
                price: y.price,
                blurb: y.blurb,
                productImage: y.image
            })
        })
    }

    render() {
        if (this.state.hidden === false) {
            console.log(this.state)
            return (
                <div id='Product'>
                    < Nav />
                    <h1>{this.state.productTitle}</h1>
                    <p>Seller: <a href='http://localhost:3000'>User123</a></p>
                    <img alt='chair' src={this.state.productImage} />
                    <p>{this.state.blurb}</p>
                    <h2>${this.state.price}</h2>
                    <button onClick={this.buyProduct}>Buy</button>
                    <button onClick={this.addToCart}>Add to Cart</button>
                </div>
            )
        } else { return <Shipping /> }
    }
}
export default ProductDetail
