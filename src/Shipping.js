import React, { Component } from 'react'
import './App.css'
import Payment from './Payment.js'

class Shipping extends Component {

  constructor(){
    super();
    this.state = {
      hidden: false
    }
  }

shipInfo = () => {

  this.setState({hidden: true})

  var userShipping = {
    userid: this.userid,
    shippingAddress: {
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      address: this.address.value,
      city: this.city.value,
      province: this.province.value,
      zip: this.zip.value,
      country: this.country.value,
      phone: this.phone.value
    }
  }
  return userShipping;
}

  render () {

    if(this.state.hidden === false){
    return (
      <div id='Product'>
        <div>
          <h1>Shipping Information</h1>
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
          <input type='text' ref={r => this.phone = r} placeholder='Phone Number' />
        </div>
        <button onClick={this.shipInfo}>Continue</button>
      </div>
    )
  } else {return <Payment />}
  }
}

export default Shipping
