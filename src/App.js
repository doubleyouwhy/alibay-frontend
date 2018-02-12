import React, { Component } from 'react'
import './App.css'
import Shipping from './Shipping.js'
import Payment from './Payment.js'
import Confirmation from './Confirmation.js'
import ProductDetail from './ProductDetail.js'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <ProductDetail />
        <Shipping />
        <Payment />
        <Confirmation />
      </div>

    )
  }
}

export default App
