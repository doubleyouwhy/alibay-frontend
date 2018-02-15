import React, { Component } from 'react'
import './App.css'
import Landing from './landing.js'

let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
let date = new Date()
let year = date.getFullYear()
let month = months[date.getMonth()]
let day = date.getDate()
let fullDate = month + ' ' + day + ', ' + year
let confirmationNumber = 1000

class Confirmation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hidden: false,
    }
  }

  goHome = () => {
    this.setState({ hidden: true })
  }

  componentDidMount = () => {
    console.log(date)
    console.log('props log', this.props)
  }

  render() {
    if (this.state.hidden === false) {
      return (
        <div id='Product'>
          <div className='confirmation'>
          <h1>Thank you for your order!</h1>
          <h4>Confirmation #{Math.floor(Math.random() * 5000)}</h4>
          <h4>Order Placed on: {fullDate}</h4>
          <h4>Order Summary: 1 x {this.props.item.shippingInfo.order.prodName} — ${(this.props.item.shippingInfo.order.price * 1.15 + 25).toFixed(2)}</h4>
          <h3>Shipping to</h3>
              <li>{this.props.item.shippingInfo.firstName + ' ' + this.props.item.shippingInfo.lastName}</li>
              <li>{this.props.item.shippingInfo.address}</li>
              <li>{this.props.item.shippingInfo.city + ', ' + this.props.item.shippingInfo.province + ' ' + this.props.item.shippingInfo.zip}</li>
              <li>{this.props.item.shippingInfo.country}</li>
          <button onClick={this.goHome}>Keep Shopping</button>
          <button>View Order History</button>
        </div>
        </div>
      )
    } else { return <Landing /> }
  }
}

export default Confirmation
