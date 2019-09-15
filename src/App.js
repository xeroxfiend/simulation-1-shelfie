import React, {Component} from "react";
import "./App.css";
import Header from "./components/Header/Header";
import routes from "./routes";

class App extends Component {
  constructor() {
    super();
    this.state = {
      placeholder: "state"
    };
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="main">{routes}</div>
      </div>
    );
  }
}

export default App;
