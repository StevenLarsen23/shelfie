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
      currentProduct: {}
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
      console.log(this.state.inventory)
    }

    deleteProduct = (id) => {
      axios
      .delete(`/api/product/${id}`, this.state)
      .then((res) => {
        this.getInventory()
      })
      .catch((err) => console.log(err))
    }

    setProduct = (productObj) => {
      this.setState({ currentProduct: productObj})
    }

    editProduct = (e, id, productObj) => {
      e.preventDefault()
      console.log(id, productObj)
      axios
      .put(`/api/product/${id}`, productObj)
      .then((res) => {
        this.setState({currentProduct: {}})
        this.getInventory()
      })
      .catch((err) => console.log(err))
    }
    

  
  
  render() {
    return (
      <div className="App">
        <Header />
        <div className='content'>
        <Form inventory={this.getInventory} currentProduct={this.state.currentProduct} editProduct={this.editProduct}/>
        <Dashboard className="Dash" inventory={this.state.inventory} deleteProduct={this.deleteProduct} setProduct={this.setProduct} />
        </div>
      </div>
    );
  }
}

export default App;
