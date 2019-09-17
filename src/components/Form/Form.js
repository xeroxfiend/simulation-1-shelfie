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

  componentDidMount() {
    if (this.props.match.params.id) {
      axios.get(`/api/inventory/${this.props.match.params.id}`).then(res => {
        this.setState({currentProduct: res.data[0]});
      });
    }
  }

  // componentDidUpdate(prevProps, prevState) {
  //   console.log("PrevProps", prevProps);
  //   console.log("PrevState", prevState);
  // }

  addNewProduct() {
    axios
      .post("/api/product", {
        name: this.state.name,
        price: this.state.price,
        img: this.state.image
      })
      .then(() => {
        this.props.history.push("/");
        // this.handleCancel();
      });
  }

  //   editProduct() {
  //       axios.put(`/api/product/${this.state.currentProduct.id}`, this.state.currentProduct)
  //   }

  //   updateState() {
  //     this.setState({currentProduct: this.props.currentProduct});
  //   }

  //   componentDidUpdate(prevProps) {
  //   console.log(`prevProps: ${prevProps}, currentProps: ${this.props.currentProduct}`)
  // if (prevProps.name !== this.props.currentProduct.name) {
  //   this.setState({currentProduct: this.props.currentProduct});
  // this.updateState();
  // }
  //   }

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
    // this.setState({image: "", name: "", price: null, currentProduct: null});
    this.props.history.push("/");
    // const inputValueUrl = document.getElementsByClassName("input-image-url");
    // const inputValueName = document.getElementsByClassName(
    //   "input-product-name"
    // );
    // const inputValuePrice = document.getElementsByClassName("input-price");
    // inputValueUrl[0].value = "";
    // inputValueName[0].value = "";
    // inputValuePrice[0].value = "";
  }

  updateProduct() {
    const inputValueUrl = document.getElementsByClassName("input-image-url");
    const inputValueName = document.getElementsByClassName(
      "input-product-name"
    );
    const inputValuePrice = document.getElementsByClassName("input-price");

    // maybe use these????????????^^^^^^^^^^^^^^^^^^^^^^^^^    

    axios
      .put(`/api/product/${this.props.match.params.id}`, {
        name: this.state.name ? this.state.name : this.state.currentProduct.name,
        price: this.state.price ? this.state.price : this.state.currentProduct.price,
        img: this.state.image ? this.state.image : this.state.currentProduct.img
      })
      .then(() => {
        this.props.history.push("/");
      });
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
    // if (!this.state.currentProduct)  {
    //   this.setState({currentProduct: this.props.currentProduct});
    // }

    // const inputValueUrl = document.getElementsByClassName("input-image-url");
    // const inputValueName = document.getElementsByClassName(
    //   "input-product-name"
    // );
    // const inputValuePrice = document.getElementsByClassName("input-price");

    // if (this.state.currentProduct) {
    //   inputValueUrl[0].value = this.state.currentProduct.img;
    //   inputValueName[0].value = this.state.currentProduct.name;
    //   inputValuePrice[0].value = this.state.currentProduct.price;
    // }
    let imgSrc = "";
    let imgUrlText = "";

    if (this.state.image) {
      imgSrc = this.state.image;
      imgUrlText = this.state.image;
    } else if (this.state.currentProduct && this.state.currentProduct.img) {
      imgSrc = this.state.currentProduct.img;
      imgUrlText = this.state.currentProduct.img;
    } else {
      imgSrc = imageDefault;
      imgUrlText = "";
    }

    let nameText = "";

    if (this.state.name) {
      nameText = this.state.name;
    } else if (this.state.currentProduct && this.state.currentProduct.name) {
      nameText = this.state.currentProduct.name;
    } else {
      nameText = "";
    }

    let priceText = "";

    if (this.state.price) {
      priceText = this.state.price;
    } else if (this.state.currentProduct && this.state.currentProduct.price) {
      priceText = this.state.currentProduct.price;
    } else {
      priceText = "";
    }

    return (
      <div className="form">
        <div className="form-container">
          <img src={imgSrc} alt="product" className="image form-image" />

          <p className="image-url">Image URL:</p>
          <input
            defaultValue={this.state.currentProduct && this.state.currentProduct.img ? this.state.currentProduct.img : ''}
            placeholder="Copy & Paste an Image URL"
            onKeyPress={e => this.validate(e)}
            onChange={e => this.handleImage(e.target.value)}
            type="text"
            className="input-image-url"
          />
          <p className="product-name">Product Name:</p>
          <input
            defaultValue={this.state.currentProduct && this.state.currentProduct.name ? this.state.currentProduct.name : ''}
            placeholder="Product Name"
            onChange={e => this.handleName(e.target.value)}
            type="text"
            className="input-product-name"
          />
          <p className="price">Price:</p>
          <input
            defaultValue={this.state.currentProduct && this.state.currentProduct.price ? this.state.currentProduct.price : ''}
            placeholder="Price"
            onChange={e => this.handlePrice(e.target.value)}
            type="text"
            className="input-price"
          />
          <div className="button-container">
            <button onClick={() => this.handleCancel()} className="cancel">
              Cancel
            </button>
            {this.props.match.params.id ? (
              <button onClick={() => this.updateProduct()} className="Update">
                Update
              </button>
            ) : (
              <button onClick={() => this.addNewProduct()} className="Add">
                Add to Inventory
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
