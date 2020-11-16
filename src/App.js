import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Dashboard from "./Components/Dashboard/Dashboard";
import Form from "./Components/Form/Form";
import Header from "./Components/Header/Header";

class App extends Component {
  constructor() {
    super();
    this.state = {
      inventory: [],
    };
  }

  componentDidMount() {
    this.getInventory();
    
  }

  getInventory() {
    axios
      .get("/api/inventory")
      .then((res) => {
        this.setState({ inventory: res.data });
      })
      .catch((err) => console.log(err));
      // console.log(this.state.inventory)
    }

    

  
  
  render() {
    return (
      <div className="App">
        <Header />
        <Dashboard inventory={this.state.inventory} />
        <Form inventory={this.getInventory}/>
      </div>
    );
  }
}

export default App;
