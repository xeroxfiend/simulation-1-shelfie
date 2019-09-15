import React, {Component} from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/Header/Header";
import Dashboard from "./components/Dashboard/Dashboard";
import Form from "./components/Form/Form";

class App extends Component {
  constructor() {
    super();
    this.state = {
      inventory: [],
      currentProduct: null
    };
    this.getData = this.getData.bind(this)
    this.currentSelected = this.currentSelected.bind(this)
  }

  getData() {
    axios.get("/api/inventory").then(res => {
      this.setState({inventory: res.data});
    })
  }

  componentDidMount() {
    this.getData();
  }

  currentSelected(obj) {
    this.setState({currentProduct: obj})
    console.log(this.state.currentProduct)
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="main">
          <Dashboard selectedFn={this.currentSelected} getDataFn={this.getData} inventory={this.state.inventory} />
          <Form currentProduct={this.state.currentProduct} getDataFn={this.getData} />
        </div>
      </div>
    );
  }
}

export default App;
