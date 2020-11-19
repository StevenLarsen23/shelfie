import React, { Component } from "react";
import './Dashboard.css';

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
            <div className='product'>
            <div className="product-info">
            <p className="product-name">{`${e.name}`}</p>
            <p className="product-price">{`$${e.price}`}</p>
            </div>
            <div className='func-buttons'>
            <button className='func-button' onClick={() => this.props.deleteProduct(e.id)}>Delete</button>
            <button className='func-button' onClick={() => this.props.setProduct(e)}>Edit</button>
            </div>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div>
        <div>{products}</div>
      </div>
    );
  }
}

export default Dashboard;
