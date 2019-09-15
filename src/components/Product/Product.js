import React, {Component} from "react";
import defaultImage from "../../assets/imageDefault.JPG";
import {Link} from "react-router-dom";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholder: "state"
    };
  }

  render() {
    return (
      <div className="dash-container">
        <div className="product">
          <img
            src={
              this.props.productInfo.img
                ? this.props.productInfo.img
                : defaultImage
            }
            alt="product"
            className="dash-image"
          />
          <div className="dash-text">
            <h3 className="dash-name">{this.props.productInfo.name}</h3>
            <h4 className="dash-price">${this.props.productInfo.price}</h4>
            <div className="dash-buttons">
              <button
                onClick={() =>
                  this.props.handleDelete(this.props.productInfo.id)
                }
                className="delete"
              >
                Delete
              </button>
              <Link to={`/edit/${this.props.productInfo.id}`}>
                <button>Edit</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
