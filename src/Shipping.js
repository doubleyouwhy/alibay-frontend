import React, { Component } from 'react'
import './App.css'
import Payment from './Payment.js'
import Confirmation from './Confirmation.js'
const emailjs = require('emailjs-com');

let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
let date = new Date()
let year = date.getFullYear()
let month = months[date.getMonth()]
let day = date.getDate()
let fullDate = month + ' ' + day + ', ' + year

class Shipping extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hidden: false,
      formError: '',
      userShipping: {}
    }
  }

  shipInfo = () => {
    let shippingInfo = {
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      address: this.address.value,
      city: this.city.value,
      province: this.province.value,
      zip: this.zip.value,
      country: this.country.value,
      email: this.email.value,
      itemId: this.props.item.itemId,
      sellerId: this.props.item.sellerID,
      orderDate: new Date(),
      confirmation: this.props.item.confirmation,
      totalPrice: this.props.item.price * 1.15 + 25
    }

    setTimeout(() => this.setState({ hidden: true, userShipping: { shippingInfo } }), 1500)

    fetch('./shipping', {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify({
        firstName: this.firstName.value,
        lastName: this.lastName.value,
        address: this.address.value,
        city: this.city.value,
        province: this.province.value,
        zip: this.zip.value,
        country: this.country.value,
        email: this.email.value,
        itemId: this.props.item.itemId,
        sellerId: this.props.item.sellerID,
        orderDate: new Date()
      })
    }).then(x => x.json())
      .then(y => {
        console.log('confirmation number ', y)
        // this.setState({ hidden: false, userShipping: {shippingInfo} })
      })
      .then(z => this.setState({ shippingInfo: { z } }))

    this.sendEmailConfirmation()

  }

  sendEmailConfirmation = () => {
    emailjs.init("user_FNLRvsmgagvJUJfXdNCsP");

    emailjs.send("gmail", "template_f1rdYR9G", {
      order_number: this.props.item.confirmation,
      firstName: this.firstName.value,
      fullName: this.firstName.value + ' ' + this.lastName.value,
      price: (this.props.item.price * 1.15 + 25).toFixed(2),
      date: fullDate,
      address: this.address.value,
      city: this.city.value,
      province: this.province.value,
      zip: this.zip.value,
      country: this.country.value,
      email: this.email.value,
      product: this.props.item.prodName
    })
      .then(function (response) {
        console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
      }, function (err) {
        console.log("FAILED. error=", err);
      });
  }

  formValidation = () => {
    if (this.firstName.value.length < 2) {
      this.setState({ formError: <div id='form-error'>Please submit a valid <b id='uppercase'>name</b></div> })
    } else if (this.lastName.value.length < 2) {
      this.setState({ formError: <div div id='form-error'>Please submit a valid <b id='uppercase'>name</b></div> })
    } else if (this.address.value.length < 4) {
      this.setState({ formError: (<div div id='form-error'>Please submit a valid <b id='uppercase'>address</b></div>) })
    } else if (this.city.value.length < 1) {
      this.setState({ formError: (<div div id='form-error'>Please submit a valid <b id='uppercase'>city</b></div>) })
    } else if (this.province.value.length < 2) {
      this.setState({ formError: (<div div id='form-error'>Please submit a valid <b id='uppercase'>state or province</b></div>) })
    } else if (this.zip.value.length < 6) {
      this.setState({ formError: (<div div id='form-error'>Please submit a valid <b id='uppercase'>zip or postal code</b></div>) })
    } else if (this.country.value.length < 3) {
      this.setState({ formError: (<div div id='form-error'>Please submit a valid <b id='uppercase'>country</b></div>) })
    } else if (this.email.value.length < 6) {
      this.setState({ formError: (<div div id='form-error'>Please submit a valid <b id='uppercase'>email address</b></div>) })
    } else this.shipInfo()
  }

  componentDidMount() {
    console.log('shipping detail props: ', this.props)
    console.log('itemID: ', this.props.item.itemId)
    console.log('seller ID: ', this.props.item.sellerID)
    console.log('item price: ', this.props.item.price)
  }

  render() {
    if (this.state.hidden === false) {
      return (
        <div id='Product'>
          <div className='checkOutWrapper'>

            <div className='checkOutInfo'>
              <div>
                <h1 className='flex'><span id='numbered'>1</span> Shipping Information</h1>
                <div id='formError'>{this.state.formError}</div>
                <input type='text' ref={r => this.firstName = r} placeholder='First Name' />
                <input type='text' ref={r => this.lastName = r} placeholder='Last Name' />
              </div>
              <div>
                <input type='text' ref={r => this.address = r} placeholder='Address' />
                <input type='text' ref={r => this.city = r} placeholder='City' />
              </div>
              <div>
                <input type='text' ref={r => this.province = r} placeholder='State/Province' />
                <input type='email' ref={r => this.zip = r} placeholder='Zip / Postal Code' />
              </div>
              <div>
                <input type='text' ref={r => this.country = r} placeholder='Country' />
                <input type='text' ref={r => this.email = r} placeholder='Email' />
              </div>
              <Payment />
            </div>
            <div>
              <h1 className='flex'><div id='numbered'>3</div> Order Summary</h1>
              <div className='orderSummary'>
                <h3>1 x {this.props.item.prodName}</h3>
                <h4 className='subTitle'>Subtotal: <span id='right-align'>${this.props.item.price}</span></h4>
                <h4 className='subTitle'>Tax (15%): <span id='right-align'>${(this.props.item.price * 0.15).toFixed(2)}</span></h4>
                <h4 className='subTitle'>Shipping: <span id='right-align'>$25.00</span></h4>
                <h3>Total: <mark id='right-align'>${(this.props.item.price * 1.15 + 25).toFixed(2)}</mark></h3>
                <button id='ctaButton' onClick={this.formValidation}>Place Order</button>
              </div>
            </div>
          </div>
        </div>
      )
    } else { return <Confirmation item={this.state.userShipping} /> }
  }
}

export default Shipping
