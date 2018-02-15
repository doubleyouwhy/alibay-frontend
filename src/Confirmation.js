import React, { Component } from 'react'
import './App.css'
import Landing from './landing.js'

var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
var date = new Date()
var year = date.getUTCFullYear()
var month = months[date.getUTCMonth()]	
var day = date.getUTCDate()
var fullDate = month + ' ' + day + ' ' + year

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
  }

  render() {
    if (this.state.hidden === false) {
      return (
        <div id='Product'>
          <h1>Thank you for your order!</h1>
          <h4>Confirmation #{Math.floor(Math.random() * 5000)}</h4>
          <h4>Order Placed on: {fullDate}</h4>
          <h4>Order Summary: 1 x Black Effile Chair  — ${this.props.item.price}</h4>
          <h3>Shipping to</h3>
          <h4>{this.props.item.shippingInfo.firstName + ' ' + this.props.item.shippingInfo.lastName}
            <br />
            {this.props.item.shippingInfo.address}
            <br/>
            {this.props.item.shippingInfo.city + ', ' + this.props.item.shippingInfo.province + ' ' + this.props.item.shippingInfo.zip}
            <br/>
            {this.props.item.shippingInfo.country}
          </h4>
          <h4>Estimated delivery: </h4>
          <button onClick={this.goHome}>Keep Shopping</button>
          <button>View Order History</button>
        </div>
      )
    } else { return <Landing /> }
  }
}

export default Confirmation
