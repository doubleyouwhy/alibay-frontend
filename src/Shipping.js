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
      shippingInfo: {}
    }
  }

  shipInfo = () => {
    // this.setState({ hidden: true })
    // var userShipping = {
    //   userid: this.userid,
    //   shippingAddress: {
    //     firstName: this.firstName.value,
    //     lastName: this.lastName.value,
    //     address: this.address.value,
    //     city: this.city.value,
    //     province: this.province.value,
    //     zip: this.zip.value,
    //     country: this.country.value,
    //     phone: this.phone.value
    //   }
    // }
    fetch('./shipping', {
      method: 'POST',
      body: JSON.stringify({
        firstName: this.firstName.value,
        lastName: this.lastName.value,
        address: this.address.value,
        city: this.city.value,
        province: this.province.value,
        zip: this.zip.value,
        country: this.country.value,
        phone: this.phone.value
      })
    }).then(x => x.json())
      // .then(y => JSON.parse(y))
      .then(y => {
        console.log('first log', y)
        this.setState({
          hidden: true ,
          shippingInfo: y
        })
      })
      // .then(z => this.setState({shippingInfo: {z}}))
      console.log('updated state log', this.state.shippingInfo)
    // return userShipping;
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
    } else if (this.phone.value.length < 1) {
      this.setState({ formError: (<div>Error, <b>Phone</b> missing</div>) })
    } else this.shipInfo()
  }

  render() {
    if (this.state.hidden === false) {
      return (
        <div id='Product'>
        <div>
        <h1>Order Summary</h1>
        <h3>Red Boat</h3>
        <h3>Total: $25.00</h3>
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
          <button onClick={this.shipInfo}>Place Order</button>
        </div>
      )
    } else { return <Confirmation /> }
  }
}


export default Shipping
