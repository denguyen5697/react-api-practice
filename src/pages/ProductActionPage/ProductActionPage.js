import React, { Component } from "react";
import ProductsList from "../../components/ProductsList/ProductsList";
import ProductItem from "../../components/ProductItem/ProductItem";
import callApi from "../../utils/CallAPI";
import { Link } from "react-router-dom";
import {
  actionAddProductRequest,
  actionGetProductRequest,
} from "../../actions/index";
import { connect } from "react-redux";
import itemEditting from "../../reducers/itemEditting";

class ProductActionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txtName: "",
      id: "",
      txtPrice: "",
      chkbStatus: "",
    };
  }
  componentDidMount() {
    var { match } = this.props;
    if (match) {
      var id = match.params.id;
      // console.log(id);
      // callApi(`products/${id}`, "GET", null).then((res) => {
      //   var data = res.data;
      //   this.setState({
      //     id: data.id,
      //     txtName: data.name,
      //     txtPrice: data.price,
      //     chkbStatus: data.status,
      //   });
      // });
      this.props.onEditProduct(id);
      console.log("CPNDM");
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.itemEditting) {
      var { itemEditting } = nextProps;
      this.setState({
        id: itemEditting.id,
        txtName: itemEditting.name,
        txtPrice: itemEditting.price,
        chkbStatus: itemEditting.status,
      });
    }
  }
  onChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };
  onSave = (e) => {
    e.preventDefault();
    console.log(this.state);
    var { history } = this.props;
    var { txtName, txtPrice, chkbStatus, id } = this.state;
    var product = {
      id: id,
      name: txtName,
      price: txtPrice,
      status: chkbStatus,
    };
    if (id) {
      callApi(`products/${id}`, "PUT", {
        name: txtName,
        price: txtPrice,
        status: chkbStatus,
      }).then((res) => {
        history.goBack();
      });
    } else {
      this.props.onAddProduct(product);
      history.goBack();
    }
  };
  render() {
    var { txtName, txtPrice, chkbStatus } = this.state;
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <form onSubmit={this.onSave}>
          <div className="form-group">
            <label>Product Name: </label>
            <input
              type="text"
              className="form-control"
              name="txtName"
              value={txtName}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>Product Price: </label>
            <input
              type="number"
              className="form-control"
              name="txtPrice"
              value={txtPrice}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>Product Status: </label>
          </div>

          <div className="checkbox">
            <label>
              <input
                type="checkbox"
                name="chkbStatus"
                value={chkbStatus}
                onChange={this.onChange}
                checked={chkbStatus}
              />
              In Stock
            </label>
          </div>

          <button type="submit" className="btn btn-primary mr-10">
            Save
          </button>
          <Link to="/products-list" className="btn btn-warning">
            Back
          </Link>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    itemEditting: itemEditting,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddProduct: (product) => {
      dispatch(actionAddProductRequest(product));
    },
    onEditProduct: (id) => {
      dispatch(actionGetProductRequest(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage);
