import React, { Component } from 'react'
import './App.css'

class Shipping extends Component {

shipInfo = () => {

  var userShipping = {
    userid: this.userid,
    shippingAddress: {
      address: this.adress.value,
      city: this.city.value,
      state: this.province.value,
      zip: this.zip.value,
      country: this.country.value,
      phone: this.phone.value
    }
  }

  console.log(userShipping);
  console.log(this.adress.value)
  console.log('you logged shipping address')
  return userShipping;
}


  render () {
    return (
      <div id='Product'>
        <div>
          <h1>Shipping Information</h1>
          <input type='text' ref={r => this.firstName = r} placeholder='First Name' />
          <input type='text' ref={r => this.lastName = r} placeholder='Last Name' />
        </div>
        <div>
          <input type='text' ref={r => this.adress = r} placeholder='Address' />
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
  }
}

export default Shipping
