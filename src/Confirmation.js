import React, { Component } from 'react'
import './App.css'
import Landing from './landing.js'


let confirmationNumber = 10

class Confirmation extends Component {
  constructor () {
    super()
    this.state = {
      hidden: false
    }
  }

  goHome = () => {
      this.setState({hidden: true})
  }

  render () {
      if (this.state.hidden === false){
    return (
      <div id='Product'>
        <h1>Order placed! </h1>
        <h4>Confirmation #00{confirmationNumber}</h4>
        <h4>Order Summary: 1 x Black Effile Chair  — $49.99</h4>
        <h3>Shipping to</h3>
        <h4>Wesley Yendrys <br />950 Notre-Dame Ouest <br /> Montreal QC, Canada <br /> H3C 0K3 </h4>
        <button onClick={this.goHome}>Keep Shopping</button>
        <button>View Order History</button>
      </div>
    )
} else {return <Landing />}
  }
}

export default Confirmation
