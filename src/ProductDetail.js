import React, { Component } from 'react'
import './App.css'
import Shipping from './Shipping.js'

class ProductDetail extends Component {

    constructor(props) {
        super(props)
        this.state = {
            hidden: false,
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
        if (this.props.userIsLogin === false) {
            this.setState({ hidden: true })
        }
        else this.props.goToLogin()
        //     return (

        //     <div>{this.props.item.prodName}<div><Shipping /></div></div>

        // )
    }

    componentWillMount = () => {
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
                            <h2 id='productPrice'>${this.props.item.price}</h2>
                            <img alt='product' src={this.props.item.image} />
                        </div>
                        <div className='productInfo'>
                            <div className='sellerInfo'>
                            <div id='topinfo'>
                            <div>Listing  <a href='http://localhost:3000'>#{this.props.item.itemId}</a></div>
                            <div>Seller  <a href='http://localhost:3000'>{this.props.item.sellerName}</a></div>
                            </div>
                                <h1>{this.props.item.prodName}</h1>
                                <p>{this.props.item.blurb}</p>
                                </div>
                                <div id='buy-sold-btn'>
                                {this.props.item.isSold ? <button id='soldOut'>SOLD</button> : <button id='ctaButton' onClick={this.buyProduct}>Buy Now</button>}
                            </div>
                            </div>
                            
                        </div>
                    </div>
               
            )
        } else { return <Shipping item={this.props.item} /> }

    }
}
export default ProductDetail
