import React, {Component} from "react";
import shelfieImg from "../../assets/shelfie.JPG";
import {Link} from "react-router-dom";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      placeholder: "state"
    };
  }

  render() {
    return (
      <div className="header">
        <img
          height="44px"
          width="158px"
          className="shelfie-logo"
          src={shelfieImg}
          alt="shelfie logo"
        />
        <Link to="/" className="nav">
          <button className="nav-btn-dash">Dashboard</button>
        </Link>
        <Link to="/add" className="nav">
          <button className="nav-btn-add">Add to Inventory</button>
        </Link>
      </div>
    );
  }
}

export default Header;
