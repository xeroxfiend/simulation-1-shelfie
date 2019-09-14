import React, {Component} from "react";
import imageDefault from "../../assets/imageDefault.JPG";
import axios from "axios";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "",
      name: "",
      price: null,
      currentProduct: null
    };
  }

  addNewProduct(props) {
    axios
      .post("/api/product", {
        name: this.state.name,
        price: this.state.price,
        img: this.state.image
      })
      .then(() => {
        this.props.getDataFn();
        this.handleCancel();
      });
  }

  handleImage(value) {
    this.setState({image: value});
  }

  handleName(value) {
    this.setState({name: value});
  }

  handlePrice(value) {
    this.setState({price: value});
  }

  handleCancel() {
    this.setState({image: "", name: "", price: null});
    console.log(this.state);
  }

  render() {
    return (
      <div className="form">
        <div className="form-container">
          {this.state.image ? (
            <img
              src={this.state.image}
              height="200px"
              width="230px"
              alt="image"
              className="image"
            />
          ) : (
            <img
              src={imageDefault}
              height="200px"
              width="230px"
              alt="default-image"
              className="image"
            />
          )}
          <p className="image-url">Image URL:</p>
          <input
            onChange={e => this.handleImage(e.target.value)}
            type="text"
            className="input-image-url"
          />
          <p className="product-name">Product Name:</p>
          <input
            onChange={e => this.handleName(e.target.value)}
            type="text"
            className="input-product-name"
          />
          <p className="price">Price:</p>
          <input
            onChange={e => this.handlePrice(e.target.value)}
            type="text"
            className="input-price"
          />
          <div className="button-container">
            <button onClick={() => this.handleCancel()} className="cancel">
              Cancel
            </button>
            <button onClick={() => this.addNewProduct()} className="Add">
              Add to Inventory
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
