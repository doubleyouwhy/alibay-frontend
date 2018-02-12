import React, { Component } from 'react'
import './App.css'
import ProductDetail from './ProductDetail.js'
import Landing from './landing.js'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Landing />
        <ProductDetail />
      </div>
    )
  }
}

export default App
