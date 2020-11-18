import React, { Component } from "react";
import axios from "axios";

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

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.product !== this.state.product) {
//       console.log("Product has been updated");
//     }
//   }

componentDidUpdate(prevProps) {
    const {img, name, price} = this.props.currentProduct
    if (prevProps.currentProduct.name !== this.state.name) {
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

//   editProduct() {
//     axios
//       .put(`/api/product/${this.props.id}`, this.state)
//       .then((res) => {
//         this.setState({
//           img: res.data.img,
//           name: res.data.name,
//           price: res.data.price,
//         });
//       })
//       .catch((err) => console.log(err));
//   }

  handleAdd = (e) => {
      
      if(this.props.currentProduct.id) {
        this.props.editProduct(e, this.props.currentProduct.id, {
            img: this.state.img,
            name: this.state.name,
            price: this.state.price,
          })
      } else {
        this.createProduct()
      }
  }

  render() {
    return (
      <form>
        <input
          placeholder="Image URL"
          value={this.state.img}
          onChange={this.handleImgChange}
        />
        <input
          placeholder="Product Name"
          value={this.state.name}
          onChange={this.handleNameChange}
        />
        <input
          placeholder="Price"
          value={this.state.price}
          onChange={this.handlePriceChange}
        />
        <button onClick={this.handleReset}>Cancel</button>
        <button onClick={(e) => this.handleAdd(e)}>Submit</button>
        <button onClick={() => this.createProduct()}>Add to Inventory</button>
      </form>
    );
  }
}

export default Form;
