import React, {Component} from "react";
import Product from "../Product/Product";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      placeholder: "state"
    };
  }

  render() {
    const product = this.props.inventory.map((el, i) => (
      <Product productInfo={el} key={i} />
    ));
    return <div className="dashboard">{product}</div>;
  }
}

export default Dashboard;
