import React, { Component } from "react";
import ProductsList from "../../components/ProductsList/ProductsList";
import ProductItem from "../../components/ProductItem/ProductItem";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {actionFetchProductsRequest, actionDeleteProductRequest} from '../../actions/index';
class ProductsListPage extends Component {
  constructor(props) {
    super(props);
    
  }
  componentDidMount() {
    this.props.fetchAllProducts();
  }
  onDelete = (id) => {
    // var {products} = this.state;
    // callApi(`products/${id}`, "DELETE", null).then((res) => {
      
    //   if (res.status === 200){
    //     var index = this.findProduct(products, id);
    //     if (index !== -1){
    //       products.splice(index, 1);
    //       this.setState({
    //         products: products
    //       });
    //     }
    //   }
    // });
    this.props.onDeleteProduct(id);
  };
  findProduct = (products, id) => {
    var res = -1;
    products.forEach((product, index)=> {
      if (product.id === id){
        res = index;
      }
    })

    return res;
  }
  render() {
    // var {products} = this.props;
    var { products } = this.props;

    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <Link to="/products/add" className="btn btn-info mb-10">
          Add Product
        </Link>

        <ProductsList>{this.showProducts(products)}</ProductsList>
      </div>
    );
  }
  showProducts = (products) => {
    var result = null;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return <ProductItem key={index} product={product} index={index} onDelete={this.onDelete}/>;
      });
    }
    return result;
  };
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchAllProducts: () => {
      dispatch(actionFetchProductsRequest());
    },
    onDeleteProduct: (id) => {
      dispatch(actionDeleteProductRequest(id));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsListPage);
