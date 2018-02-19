import React, { Component } from 'react'

class Footer extends Component {

    render() {
        return (
            <div className='footer-wrapper'>
                <div className='footer-info'>
                    <h4>Shipped from <span id='underline'>Montreal,QC</span></h4>
                    <h4>Questions? <span id='underline'>Ask</span></h4>
                    <h4 id='footer-mid'>Powered by <span id='underline'>JavaScribes</span></h4>
                </div>
            </div>
        )
    }

}


export default Footer