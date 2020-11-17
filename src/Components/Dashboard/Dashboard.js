import React, { Component } from "react";
//import Product from "../Product/Product";
import './Dashboard.css';
import axios from 'axios';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inventory: this.props.inventory,
    };
  }

  

  render() {
    let products = this.props.inventory.map((e, i) => {
      return (
        <div className="dashboard">
          <div className="products">
            <img alt={`${e.name}`} className="image" src={`${e.img}`} />
            <div className="product-info">
            <p className="product-name">{`${e.name}`}</p>
            <p className="product-price">{`$${e.price}`}</p>
            <button onClick={() => this.props.deleteProduct(e.id)}>Delete</button>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div>
        <div>Dashboard</div>
        <div>{products}</div>
      </div>
    );
  }
}

export default Dashboard;
