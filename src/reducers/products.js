import * as types from "../constants/ActionTypes";

var initialState = [];

var findProduct = (products, id) => {
  var res = -1;
  products.forEach((product, index) => {
    if (product.id === id) {
      res = index;
    }
  });

  return res;
};

const products = (state = initialState, action) => {
  var index = -1;
  switch (action.type) {
    case types.FETCH_PRODUCTS:
      state = action.products;
      return [...state];
    case types.DELETE_PRODUCT:
      index = findProduct(state, action.id);
      state.splice(index, 1);
      return [...state];
    case types.ADD_PRODUCTS:
      state.push(action.product);
      return [...state];
    default:
      return [...state];
  }
};

export default products;
