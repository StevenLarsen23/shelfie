import React, {Component} from 'react';

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productInfo: {}
        }
    }
    render() {
        return(
            <div>
                Product
            </div>
        );
    }
}

export default Product