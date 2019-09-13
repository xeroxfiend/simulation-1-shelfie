import React, {Component} from 'react'

class Product extends Component {
    constructor() {
        super()
        this.state = {
            placeholder: 'state'
        }
    }

    render() {
        return (
            <div className="product">
                Product
            </div>
        )
    }
}

export default Product