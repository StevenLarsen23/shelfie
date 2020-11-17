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

    deleteProduct = (id) => {
      axios
      .delete(`/api/product/${id}`, this.state)
      .then((res) => {
        this.getInventory()
      })
      .catch((err) => console.log(err))
    }
    

  
  
  render() {
    return (
      <div className="App">
        <Header />
        <Form inventory={this.getInventory}/>
        <Dashboard className="Dash" inventory={this.state.inventory} deleteProduct={this.deleteProduct}/>
      </div>
    );
  }
}

export default App;
