import React, { Component } from 'react'
import './App.css'
import PaypalExpressBtn from 'react-paypal-express-checkout'

class PayPal extends Component {
  render () {
    const style = {
      label: 'checkout',
      size: 'small',    // small | medium | large | responsive
      shape: 'rect',     // pill | rect
      color: 'blue'      // gold | blue | silver | black
    }
    const client = {
      sandbox: 'YOUR-SANDBOX-APP-ID',
      production: 'YOUR-PRODUCTION-APP-ID'
    }
    return (
      <PaypalExpressBtn style={style} client={client} currency={'USD'} total={1.00} />
    )
  }
}

export default PayPal
