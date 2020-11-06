import React, { Component } from "react";
import Product from "../Product/Product";

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
        <div>
          <Product key={i} />
          <div>{`${e.image} ${e.name} ${e.price}`}</div>
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
