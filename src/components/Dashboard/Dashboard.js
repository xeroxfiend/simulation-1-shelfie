import React, {Component} from "react";
import Product from "../Product/Product";
import axios from "axios";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
        inventory: [],
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.getData = this.getData.bind(this)
  }

  getData() {
    axios.get("/api/inventory").then(res => {
      this.setState({inventory: res.data});
    })
  }

  componentDidMount() {
    this.getData();
  }

  handleDelete(id) {
    axios.delete(`/api/product/${id}`).then(this.getData);
  }

  render() {
    const product = this.state.inventory.map((el, i) => (
      <Product handleDelete={this.handleDelete} productInfo={el} key={i} />
    ));
    return <div className="dashboard">{product}</div>;
  }
}

export default Dashboard;
