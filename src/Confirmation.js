import React, { Component } from 'react'
import './App.css'

let confirmationNumber = 10

class Confirmation extends Component {
  render () {
    return (
      <div id='Product'>
        <h1>Order placed! </h1>
        <h4>Confirmation #00{confirmationNumber}</h4>
        <h4>Order Summary: 1 x Black Effile Chair  — $49.99</h4>
        <h3>Shipping to</h3>
        <h4>Wesley Yendrys <br />950 Notre-Dame Ouest <br /> Montreal QC, Canada <br /> H3C 0K3 </h4>
        <button>Keep Shopping</button>
        <button>View Order History</button>
      </div>
    )
  }
}

export default Confirmation
