import React, {Component} from "react";
import imageDefault from "../../assets/imageDefault.JPG";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "",
      name: "",
      price: null
    };
  }

  handleImage(value) {
    this.setState({image: value});
    console.log(this.state.image);
  }

  handleName(value) {
    this.setState({name: value});
    console.log(this.state.name);
  }

  handlePrice(value) {
    this.setState({price: value});
    console.log(this.state.price);
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
            <img src={this.state.image} height='400px' width='250px' alt="image" className="image" />
          ) : (
            <img src={imageDefault} height='400px' width='250px' alt="default-image" className="image" />
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
            <button className="Add">Add to Inventory</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
