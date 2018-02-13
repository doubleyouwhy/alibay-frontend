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

    render() {
        if (this.state.hidden === false) {
            return (
                <div id='Product'>
                    < Nav 
                    goToLogin = {this.goToLogin} 
                    goToSignIn = {this.goToSignIn}
                    />
                    <h1>Product Title</h1>
                    <p>Seller: <a href='http://localhost:3000'>User123</a></p>
                    <img alt='chair' src='https://static.structube.com/media/catalog/product/cache/1/thumbnail/900x698/75682affa62b5fff039e968bba255800/0/2/02-90.12.14.20_armchair_eiffel-90.12.14.20.jpg' />
                    <p>This curvaceous classic takes style to new heights. The retro-inspired Eiffel chair’s polypropylene seat feels molded to your body, while armrests allow for maximum relaxation.</p>
                    <h2>$49.99</h2>
                    <button onClick={this.buyProduct}>Buy</button>
                    <button onClick={this.addToCart}>Add to Cart</button>
                </div>
            )
        } else { return <Shipping /> }
    }
}
export default ProductDetail
