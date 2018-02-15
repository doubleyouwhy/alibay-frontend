import React, { Component } from 'react'
import './App.css'
import Payment from './Payment.js'
import Confirmation from './Confirmation.js'

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
      phone: this.phone.value
    }

    this.setState({ hidden: true, userShipping: {shippingInfo} })
    
    // fetch('./shipping', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     firstName: this.firstName.value,
    //     lastName: this.lastName.value,
    //     address: this.address.value,
    //     city: this.city.value,
    //     province: this.province.value,
    //     zip: this.zip.value,
    //     country: this.country.value,
    //     phone: this.phone.value
    //   })
    // }).then(x => x.json())
    //   .then(y => {
    //     this.setState({ hidden: false, userShipping: {shippingInfo} })
    //   })
    // .then(z => this.setState({shippingInfo: {z}}))
  }

  formValidation = () => {
    if (this.firstName.value.length < 1) {
      this.setState({ formError: (<div>Error, <b>First Name</b> missing</div>) })
    } else if (this.lastName.value.length < 1) {
      this.setState({ formError: (<div>Error, <b>Last Name</b> missing</div>) })
    } else if (this.address.value.length < 1) {
      this.setState({ formError: (<div>Error, <b>Address</b> missing</div>) })
    } else if (this.city.value.length < 1) {
      this.setState({ formError: (<div>Error, <b>City</b> missing</div>) })
    } else if (this.province.value.length < 1) {
      this.setState({ formError: (<div>Error, <b>Province</b> missing</div>) })
    } else if (this.zip.value.length < 1) {
      this.setState({ formError: (<div>Error, <b>Zip</b> missing</div>) })
    } else if (this.country.value.length < 1) {
      this.setState({ formError: (<div>Error, <b>Country</b> missing</div>) })
    } else this.shipInfo()
  }

  render() {
    if (this.state.hidden === false) {
      return (
        <div id='Product'>
          <div>
            <h1>Your Order Summary</h1>
            <h3>1 x {this.props.item.prodName}</h3>
            <h4>Subtotal: ${this.props.item.price}</h4>
            <h4>Tax: ${(this.props.item.price * 0.15).toFixed(2)}</h4>
            <h4>Shipping: $15.00</h4>
            <h4>Total: ${(this.props.item.price * 1.15 + 15).toFixed(2)}</h4>
          </div>

          <div>
            <h1>Shipping Information</h1>
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
            <input type='text' ref={r => this.zip = r} placeholder='Zip / Postal Code' />
          </div>
          <div>
            <input type='text' ref={r => this.country = r} placeholder='Country' />
            <input type='number' ref={r => this.phone = r} placeholder='Phone Number' maxLength='10' />
          </div>
          <Payment />
          <button onClick={this.formValidation}>Place Order</button>
        </div>
      )
    } else { return <Confirmation item={this.state.userShipping}/> }
  }
}


export default Shipping
