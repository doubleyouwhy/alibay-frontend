import React, { Component } from 'react'
import './App.css'

class ProductDetail extends Component {

    addToCart = () => {
        console.log('you clicked buy!')
      }

  render () {
    return (
      <div id='Product'>
        <h1>Product Title</h1>
        <p>Seller: <a href='http://apple.ca'>User123</a></p>
        <img alt='chair' src='https://static.structube.com/media/catalog/product/cache/1/thumbnail/900x698/75682affa62b5fff039e968bba255800/0/2/02-90.12.14.20_armchair_eiffel-90.12.14.20.jpg' />
        <p>This curvaceous classic takes style to new heights. The retro-inspired Eiffel chair’s polypropylene seat feels molded to your body, while armrests allow for maximum relaxation.</p>
        <h2>$49.99</h2>
        <button onClick={this.addToCart}>Buy</button>
      </div>
    )
  }
}

export default ProductDetail
