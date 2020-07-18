import React, { Component } from "react";
import callApi from "../../utils/CallAPI";
import {Link} from 'react-router-dom';
class ProductItem extends Component {
  onDelete = (id) => {
    if (confirm('Are you sure to Delete?')){ //eslint-disable-line
      // console.log(id);
      this.props.onDelete(id);
    }
  }
  render() {
    var { product, index } = this.props;
    var statusName = product.status ? "In Stock" : "Out Stock";
    var statusClass = product.status ? "warning" : "default";
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td>
          <span className={`label label-${statusClass}`}>{statusName}</span>
        </td>
        <td>
          <Link to={`/products/${product.id}/edit`} className="btn btn-success mr-10">
            Edit
          </Link>

          <button
            type="button"
            className="btn btn-danger"
            onClick={() => this.onDelete(product.id)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default ProductItem;
