import React, {Component} from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Dashboard from "./components/Dashboard/Dashboard";
import Form from "./components/Form/Form";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      inventory: [],
      currentProduct: {}
    };
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

  render() {
    return (
      <div className="App">
        <Header />
        <div className="main">
          <Dashboard getDataFn={this.getData} inventory={this.state.inventory} />
          <Form currentProduct={this.state.currentProduct} getDataFn={this.getData} />
        </div>
      </div>
    );
  }
}

export default App;
