import React, {Component} from 'react'
import shelfieImg from '../../assets/shelfie.JPG'
import {Link} from 'react-router-dom'
import routes from '../../routes'

class Header extends Component {
    constructor() {
        super()
        this.state = {
            placeholder: 'state'
        }
    }

    render() {
        return (
            <div className="header">
                <img height='44px' width='158px' className='shelfie-logo' src={shelfieImg} alt="shelfie logo"/>
                <Link to='/' className='nav'>Dashboard</Link>
                <Link to='/add' className='nav'>Add to Inventory</Link>
                {routes}
            </div>
        )
    }
}

export default Header