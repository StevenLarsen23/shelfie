import React, { Component } from "react";
import axios from "axios";
import './Form.css'
import ImgsViewer from 'react-images-viewer'

class Form extends Component {
  constructor() {
    super();
    this.state = {
      img: "",
      name: "",
      price: 0,
    };
    this.handleImgChange = this.handleImgChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.baseState = this.state;
  }

componentDidUpdate(prevProps) {
  const {img, name, price} = this.props.currentProduct
  if (this.props.currentProduct.id !== undefined && prevProps.currentProduct.id !== this.props.currentProduct.id) {
      this.setState({img, name, price})
  }
}

  handleImgChange = (e) => {
    this.setState({ img: e.target.value });
  };
  handleNameChange = (e) => {
    this.setState({ name: e.target.value });
  };
  handlePriceChange = (e) => {
    this.setState({ price: e.target.value });
  };
  handleReset = () => {
    this.setState(this.baseState);
  };

  createProduct() {
    axios
      .post("/api/product", this.state)
      .then((res) => {
        this.setState({
          img: res.data.img,
          name: res.data.name,
          price: res.data.price,
        });
      })
      .catch((err) => console.log(err));
  }

  handleAdd = (e) => {
      
      if(this.props.currentProduct.id) {
        this.props.editProduct(e, this.props.currentProduct.id, {
            img: this.state.img,
            name: this.state.name,
            price: this.state.price,
          })
          this.setState(this.baseState)
      } else {
        this.createProduct()
      }
  }

  render() {
    return (
      <form className='form'>
        <img className='preview-img' value={this.props.img}></img>
        <p>Image URL:</p>
        <input className='input'
          value={this.state.img}
          onChange={this.handleImgChange}
        />
        <p>Product Name:</p>
        <input className='input'
      
          value={this.state.name}
          onChange={this.handleNameChange}
        />
        <p>Price:</p>
        <input className='input'
          value={this.state.price}
          onChange={this.handlePriceChange}
        />
        <div className='form-buttons'>
        <button className='form-button' onClick={this.handleReset}>Cancel</button>
        <button className='form-button' onClick={() => this.createProduct()}>Add to Inventory</button>
        <button className='form-button' onClick={(e) => this.handleAdd(e)}>Save Changes</button>
        </div>
      </form>
    );
  }
}

export default Form;
