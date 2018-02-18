import React, { Component } from 'react'
import DrawImage from './DrawImage'
import DrawItemDelete from './DrawItemDelete'
import OrderHistory from './OrderHistory';

class Dashboard extends Component {

    constructor() {
        super();
        this.state = {
            itemsForSale: [],
            itemsSold: [],
            itemsBought: []
        }
    }
    componentWillMount = () => {
        console.log('dashboard props ', this.props)
        console.log()
        fetch('/itemsForSale', {
            credentials: 'include'
        })
            .then(x => x.json())
            .then(y => {
                console.log(y)
                var keys = Object.keys(y);

                var itemsForSaleArr = keys.map(element => {
                    return y[element];
                })
                this.setState({ itemsForSale: itemsForSaleArr })
            })

        fetch('/itemsSold', {
            credentials: 'include'
        })
            .then(x => x.json())
            .then(y => {
                console.log(y)
                var keys = Object.keys(y);

                var itemsSoldArr = keys.map(element => {
                    return y[element];
                })
                this.setState({ itemsSold: itemsSoldArr })
            })

        fetch('/itemsBought', {
            credentials: 'include'
        })
            .then(x => x.json())
            .then(y => {
                console.log(y)
                var keys = Object.keys(y);

                var itemsBoughtArr = keys.map(element => {
                    return y[element];
                })
                this.setState({ itemsBought: itemsBoughtArr })

            })
    }

    deleteItem = (itemId) => {
        var body = itemId.toString()

        console.log('here is itemId for delete item', body)

        fetch('/deleteItem', {
            method: "POST",
            credentials: 'include',
            body: body
        })
            .then(x => x.text())
            .then(y => console.log("this is y for delete button ", y))
    }

    render() {

        return (
            <div id='Product' className="profile">
                <h1>{this.prop}Your Profile</h1>
                <div className='search-div'><h2>Items you've <mark>bought</mark></h2></div>

                <div id='orderHistory'>
                    <div className="profile-gallery">
                        {this.state.itemsBought.map(item => <OrderHistory
                            item={item} />)}
                    </div>
                </div>

                <div className="seller">
                <div className='search-div'><h2>Items you're <mark>selling</mark></h2></div>
                    <div className="profile-gallery">
                        {this.state.itemsForSale.map(item => <DrawItemDelete
                            deleteItem={this.deleteItem}
                            item={item}
                            goToProductPage={this.props.goToProductPage} />)}
                    </div>

                    <div className='search-div'><h2>Items you've <mark>sold</mark></h2></div>
                        <div className='profile-gallery' >
                            {this.state.itemsSold.map((item, idx) => <DrawItemDelete
                            key={idx}
                                deleteItem={this.deleteItem}
                                item={item}
                                goToProductPage={this.props.goToProductPage} />)}
                        </div>
                    </div>
            </div>
        )
    }
}


export default Dashboard