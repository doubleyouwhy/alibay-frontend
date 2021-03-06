import React, { Component } from 'react'
import './App.css'
import PaypalExpressBtn from 'react-paypal-express-checkout'

class PayPal extends Component {
  render () {
    const style = {
      label: 'checkout',
      size: 'large',    // small | medium | large | responsive
      shape: 'rect',     // pill | rect
      color: 'black'      // gold | blue | silver | black
    }
    // const client = {
    //   sandbox: 'YOUR-SANDBOX-APP-ID',
    //   production: 'YOUR-PRODUCTION-APP-ID'
    // }
    return (
      <PaypalExpressBtn style={style} currency={'USD'} total={1.00} />
    )
  }
}

export default PayPal
