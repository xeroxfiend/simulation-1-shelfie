import React, {Component} from "react";

class Product extends Component {
  constructor() {
    super();
    this.state = {
      placeholder: "state"
    };
  }

  render() {
    return (
      <div className="dash-container">
        <div className="product">
          <img
            height="150px"
            width="200px"
            src={this.props.productInfo.img}
            alt="product image"
            className="dash-image"
          />
          <div className="dash-text">
            <h3 className="dash-name">{this.props.productInfo.name}</h3>
            <h4 className="dash-price">${this.props.productInfo.price}</h4>
          <div className="dash-buttons">
              <button className="delete">Delete</button>
              <button className="edit">Edit</button>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
