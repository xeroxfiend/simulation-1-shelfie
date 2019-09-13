import React, {Component} from 'react'
import shelfieImg from '../../assets/shelfie.JPG'

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
            </div>
        )
    }
}

export default Header