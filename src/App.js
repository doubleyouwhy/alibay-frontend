import React, { Component } from 'react'
import './App.css'
import ProductDetail from './ProductDetail.js'
import SignIn from './SignIn.js'


class App extends Component {
  render () {
    return (
      <div className='App'>
        <ProductDetail />
        <SignIn />
      </div>
    )
  }
}

export default App
