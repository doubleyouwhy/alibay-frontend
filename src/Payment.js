import React, { Component } from 'react'
import './App.css'
import './css/paymentfont.css'
import './css/paymentfont.min.css'
import Confirmation from './Confirmation.js'
import PayPal from './Paypal.js'


class CreditCard extends Component {
    render() {
        return (
            <div>
                <div>
                    <input ref={r => this.cardHolder = r} placeholder='Card Holder' />
                    <input ref={r => this.cardNumber = r} placeholder='•••• •••• •••• 8302' />
                </div>
                <select ref={r => this.cardMonth = r} name='months'>
                     <option value='Month'>Month</option>
                    <option value='01 - January'>01 - January</option>
                    <option value='02 - February'>02 - February</option>
                    <option value='03 - March'>03 - March</option>
                    <option value='04 - April'>04 - April</option>
                    <option value='05 - May'>05 - May</option>
                    <option value='06 - June'>06 - June</option>
                    <option value='07 - July'>07 - July</option>
                    <option value='08 - August'>08 - August</option>
                    <option value='09 - September'>09 - September</option>
                    <option value='10 - October'>10 - October</option>
                    <option value='11 - November'>11 - November</option>
                    <option value='12 - December'>12 - December</option>
                </select>
                <select ref={r => this.cardYear = r} name='year'>
                    <option value='Year'>Year</option>
                    <option value='2018'>2018</option>
                    <option value='2019'>2019</option>
                    <option value='2020'>2020</option>
                    <option value='2021'>2021</option>
                    <option value='2022'>2022</option>
                    <option value='2023'>2023</option>
                    <option value='2024'>2024</option>
                    <option value='2025'>2025</option>
                </select>
                <input ref={r => this.cardCVV = r} id='cvv' placeholder='CVV' maxLength='4' />
            </div>
        )
    }
}

class Payment extends Component {

    constructor() {
        super()
        this.state = {
            hidden: false,
            selected: true,
            creditCardInput: true,
            selectedOption: 'creditCard'
        }
    }

    submitOrder = () => {
        this.setState({ hidden: true })
    }

    handleChange = (event) => {
        this.setState({ selectedOption: event.target.value })
    }

    render() {
        if (this.state.hidden === false) {
            return (
                <div>
                    <h1><span id='numbered'>②</span> Payment Method</h1>
                    <div>
                        <form className='paymentOptions'>

                            <div className="paymentRadioButtons">
                                <input type="radio" id="creditCard" name="payment" value="creditCard" defaultChecked onChange={this.handleChange} />
                                <i className="pf pf-visa"></i>
                                <i className="pf pf-mastercard-alt"></i>
                                <i className="pf pf-american-express"></i>
                            </div>
                            <div className='paymentRadioButtons'>
                                <input type="radio" id="payPal" name="payment" value="payPal" onChange={this.handleChange} />
                                <i className="pf pf-paypal"></i>
                            </div>

                            <div className='paymentRadioButtons'>
                                <input type="radio" id="bitcoin" name="payment" value="bitcoin" onChange={this.handleChange} />
                                <i className="pf pf-bitcoin"></i>
                            </div>
                        </form>
                        {this.state.selectedOption === 'creditCard' ? <CreditCard /> : <div className='paypal-button'><PayPal /></div>}
                    </div>
                </div>
            )
        } else { return <Confirmation /> }
    }
}

export default Payment
