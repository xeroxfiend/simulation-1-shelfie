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
    const inputValueUrl = document.getElementsByClassName("input-image-url");
    const inputValueName = document.getElementsByClassName(
      "input-product-name"
    );
    const inputValuePrice = document.getElementsByClassName("input-price");
    inputValueUrl[0].value = "";
    inputValueName[0].value = "";
    inputValuePrice[0].value = "";
  }

  validate(evt) {
    let theEvent = evt || window.event;
    let key = theEvent.charCode || theEvent.which;

    if (key >= 32 && (theEvent.ctrlKey === undefined || !theEvent.ctrlKey)) {
      if (theEvent.preventDefault) theEvent.preventDefault();
      else theEvent.returnValue = false;
    }
  }

  render() {
    return (
      <div className="form">
        <div className="form-container">
          <img
            src={this.state.image ? this.state.image : imageDefault}
            // height="200px"
            // width="230px"
            alt="product"
            className="image form-image"
          />

          <p className="image-url">Image URL:</p>
          <input
            placeholder="Copy & Paste an Image URL"
            onKeyPress={e => this.validate(e)}
            onChange={e => this.handleImage(e.target.value)}
            type="text"
            className="input-image-url"
          />
          <p className="product-name">Product Name:</p>
          <input
            placeholder="Product Name"
            onChange={e => this.handleName(e.target.value)}
            type="text"
            className="input-product-name"
          />
          <p className="price">Price:</p>
          <input
            placeholder="Price"
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
