import * as types from "../constants/ActionTypes";
import callAPI from "../utils/CallAPI";
export const actionFetchProducts = (products) => {
  return {
    type: types.FETCH_PRODUCTS,
    products,
  };
};

export const actionFetchProductsRequest = () => {
  return (dispatch) => {
    return callAPI("products", "GET", null).then((res) => {
      dispatch(actionFetchProducts(res.data));
    });
  };
};

export const actionDeleteProductRequest = (id) => {
  return (dispatch) => {
    return callAPI(`products/${id}`, "DELETE", null).then((res) => {
      dispatch(actionDeleteProduct(id));
    });
  };
};

export const actionDeleteProduct = (id) => {
  return {
    type: types.DELETE_PRODUCT,
    id,
  };
};
export const actionAddProductRequest = (product) => {
  return (dispatch) => {
    return callAPI("products", "POST", {
      name: product.name,
      price: product.price,
      status: product.status,
    }).then((res) => {
      dispatch(actionAddProduct(res.data));
    });
  };
};
export const actionAddProduct = (product) => {
  return {
    type: types.ADD_PRODUCTS,
    product,
  };
};

export const actionGetProductRequest = (id) => {
    return dispatch => {
        return callAPI(`products/${id}`, "GET", null).then((res) => {
            dispatch(actionGetProduct(res.data));
          });
    }
  };
  

export const actionGetProduct = (product) => {
  return {
    type: types.EDIT_PRODUCT,
    product,
  };
};
