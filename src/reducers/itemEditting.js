import * as types from "../constants/ActionTypes";
import { actionAddProduct } from "../actions";

var initialState = {};

const itemEditting = (state = initialState, action) => {
  switch (action.type) {
    case types.EDIT_PRODUCT:
      return action.product;
    default:
      return state;
  }
};

export default itemEditting;
