import React, { Component } from 'react'
import './App.css'
import ProductDetail from './ProductDetail.js'
import SignIn from './SignIn.js'
import Landing from './landing.js'
import Search from './search.js'
import AddItems from './addItems.js'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Landing />
        {/* <SignIn />
        <ProductDetail />
        <AddItems /> */}
      </div>
    )
  }
}

export default App
