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
      inventory: []
    };
  }

  componentDidMount() {
    axios.get("/api/inventory").then(res => {
      this.setState({inventory: res.data});
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="main">
          <Dashboard inventory={this.state.inventory} />
          <Form />
        </div>
      </div>
    );
  }
}

export default App;
