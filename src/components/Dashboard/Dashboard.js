import React, {Component} from "react";
import Product from "../Product/Product";
import axios from "axios";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholder: "state"
    };
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(id) {
    axios.delete(`/api/product/${id}`).then(this.props.getDataFn);
  }

  render() {
    const product = this.props.inventory.map((el, i) => (
      <Product selectedFn={this.props.selectedFn} handleDelete={this.handleDelete} productInfo={el} key={i} />
    ));
    return <div className="dashboard">{product}</div>;
  }
}

export default Dashboard;
