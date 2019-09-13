import React, {Component} from 'react'
import Product from '../Product/Product'

class Dashboard extends Component {
    constructor() {
        super()
        this.state = {
            placeholder: 'state'
        }
    }

    render() {
        return (
            <div className="dashboard">
                Dashboard
                <Product />
            </div>
        )
    }
}

export default Dashboard