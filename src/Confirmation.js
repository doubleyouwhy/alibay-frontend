import React, { Component } from 'react'
import './App.css'
import Landing from './landing.js'

let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
let date = new Date()
let year = date.getFullYear()
let month = months[date.getMonth()]
let day = date.getDate()
let fullDate = month + ' ' + day + ', ' + year

class Confirmation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hidden: false,
    }
  }

  keepShopping = () => {
    this.setState({ hidden: true })
  }

  componentDidMount = () => {
    console.log('confirmation props log', this.props)
    console.log('item props ', this.props.item)
    console.log('usershipping into ', this.state.userShipping)
  }

  render() {
    if (this.state.hidden === false) {
      return (
        <div id='Product'>
          <div className='confirmation'>
          <h1>Thank You for shopping {this.props.item.shippingInfo.firstName}!</h1>
          <p>A confirmation email has been sent to <a href='/'>{this.props.item.shippingInfo.email}</a></p>
          <h4>Here's your order <mark>#{this.props.item.shippingInfo.confirmation}</mark></h4>
          <h4>Placed on:<br/>{fullDate}</h4>
          <h4>Total Amount Paid: ${this.props.item.shippingInfo.totalPrice.toFixed(2)}</h4>
          <h3>Items will be shipped to:</h3>
              <li>{this.props.item.shippingInfo.firstName + ' ' + this.props.item.shippingInfo.lastName}</li>
              <li>{this.props.item.shippingInfo.address}</li>
              <li>{this.props.item.shippingInfo.city + ', ' + this.props.item.shippingInfo.province + ' ' + this.props.item.shippingInfo.zip}</li>
              <li>{this.props.item.shippingInfo.country}</li>
          <button id='ctaButton' onClick={this.keepShopping}>Continue Shopping</button>
        </div>
        </div>
      )
    } else { return <Landing state={this.keepShopping}/> }
  }
}

export default Confirmation
