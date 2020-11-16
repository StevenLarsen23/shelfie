import React, {Component} from 'react';
import axios from 'axios';

class Form extends Component {
    constructor() {
        super();
        this.state = {
            img: '',
            name: '',
            price: 0
        }
        this.handleImgChange = this.handleImgChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePriceChange = this.handlePriceChange.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.baseState = this.state;

    }

   handleImgChange = (e) => {
       this.setState({img: e.target.value});
       
   }
   handleNameChange = (e) => {
       this.setState({name: e.target.value});
       
   }
   handlePriceChange = (e) => {
       this.setState({price: e.target.value});
       
   }
   handleReset = () => {
       this.setState(this.baseState)
   }

   createProduct() {
    axios
    .post("/api/product", this.state)
    .then((res) => {
      this.setState({img: res.data.img, name: res.data.name, price: res.data.price });
    })
    .catch((err) => console.log(err));
  }


    render() {

        return(
            <form>
                <input placeholder='Image URL' value={this.state.value} onChange={this.handleImgChange}/>
                <input placeholder='Product Name' value={this.state.value} onChange={this.handleNameChange}/>
                <input placeholder='Price' value={this.state.value} onChange={this.handlePriceChange}/>
                <button onClick={this.handleReset}>Cancel</button>
                <button onClick={() => this.createProduct()}>Add to Inventory</button>
            </form>
        );
    }
}

export default Form