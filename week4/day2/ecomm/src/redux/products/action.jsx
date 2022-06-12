import {
  ADD_PRODUCT_CART_FAILURE,
  ADD_PRODUCT_CART_REQUEST,
  ADD_PRODUCT_CART_SUCCESS,
  FETCH_DATA_FAILURE,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  GET_SINGLE_PRODUCT_FAILURE,
  GET_SINGLE_PRODUCT_REQUEST,
  GET_SINGLE_PRODUCT_SUCCESS,
  FETCH_CART_REQUEST,
  FETCH_CART_SUCCESS,
  FETCH_CART_FAILURE,
  REMOVE_PRODUCT_CART_FAILURE,
  REMOVE_PRODUCT_CART_REQUEST,
  REMOVE_PRODUCT_CART_SUCCESS,
  AAD_ORDER_REQUEST,
  AAD_ORDER_SUCCESS,
  AAD_ORDER_FAILURE,
  EMPTY_CART_REQUEST,
  EMPTY_CART_SUCCESS,
  EMPTY_CART_FAILURE,
  FETCH_ORDER_REQUEST,
  FETCH_ORDER_SUCCESS,
  FETCH_ORDER_FAILURE,
} from "./actionTypes";
import axios from "axios";

const fetchDataRequest = (payload) => {
  return {
    type: FETCH_DATA_REQUEST,
    payload,
  };
};

const fetchDataSuccess = (payload) => {
  return {
    type: FETCH_DATA_SUCCESS,
    payload,
  };
};

const fetchDataFailure = (payload) => {
  return {
    type: FETCH_DATA_FAILURE,
    payload,
  };
};

export const fetchData = (payload) => {
  return (dispatch) => {
    dispatch(fetchDataRequest());
    axios
      .get("/products", {
        params: {
          ...payload,
        },
      })
      .then((res) => dispatch(fetchDataSuccess(res.data)))
      .catch((err) => dispatch(fetchDataFailure(err.data)));
  };
};

// request for single product datails

const getSingleProductRequest = (payload) => {
  return {
    type: GET_SINGLE_PRODUCT_REQUEST,
    payload,
  };
};

const getSingleProductSuccess = (payload) => {
  return {
    type: GET_SINGLE_PRODUCT_SUCCESS,
    payload,
  };
};

const getSingleProductFailure = (payload) => {
  return {
    type: GET_SINGLE_PRODUCT_FAILURE,
    payload,
  };
};

export const getSingleProduct = (id) => (dispatch) => {
  dispatch(getSingleProductRequest());
  axios
    .get(`/products/${id}`)
    .then((res) => dispatch(getSingleProductSuccess(res.data)))
    .catch((err) => dispatch(getSingleProductFailure(err.data)));
};

// request for add to cart

const addProductCartRequest = (payload) => {
  return {
    type: ADD_PRODUCT_CART_REQUEST,
    payload,
  };
};

const addProductCartSuccess = (payload) => {
  return {
    type: ADD_PRODUCT_CART_SUCCESS,
    payload,
  };
};

const addProductCartFailure = (payload) => {
  return {
    type: ADD_PRODUCT_CART_FAILURE,
    payload,
  };
};

export const addProductCart = (product) => (dispatch) => {
  dispatch(addProductCartRequest());
  axios
    .post(`/cart`, product)
    .then((res) => dispatch(addProductCartSuccess(res.data)))
    .catch((err) => dispatch(addProductCartFailure(err.data)));
};

// request for cart Counter or fetch cart

const fetchCartRequest = (payload) => {
  return {
    type: FETCH_CART_REQUEST,
    payload,
  };
};

const fetchCartSuccess = (payload) => {
  return {
    type: FETCH_CART_SUCCESS,
    payload,
  };
};

const fetchCartFailure = (payload) => {
  return {
    type: FETCH_CART_FAILURE,
    payload,
  };
};

export const fetchCart = (payload) => (dispatch) => {
  dispatch(fetchCartRequest());
  axios.get(`/cart`)
    .then((res) => dispatch(fetchCartSuccess(res.data)))
    .catch((err) => dispatch(fetchCartFailure(err.data)));
};

// request for delete cart item

const deleteProductCartRequest = (payload) => {
  return {
    type: REMOVE_PRODUCT_CART_REQUEST,
    payload,
  };
};

const deleteProductCartSuccess = (payload) => {
  return {
    type: REMOVE_PRODUCT_CART_SUCCESS,
    payload,
  };
};

const deleteProductCartFailure = (payload) => {
  return {
    type: REMOVE_PRODUCT_CART_FAILURE,
    payload,
  };
};

export const deleteProductCArt = (id) => (dispatch) => {
  dispatch(deleteProductCartRequest());
  axios.delete(`/cart/${id}`)
    .then((r) => {dispatch(deleteProductCartSuccess(r.data))})
    .then(() => dispatch(fetchCart()))
    .catch((err) => dispatch(deleteProductCartFailure(err.data)));
};

// request for ADD ORDER Item

const addOrderRequest = (payload) => {
  return {
    type: AAD_ORDER_REQUEST,
    payload,
  };
};

const addOrderSuccess = (payload) => {
  return {
    type: AAD_ORDER_SUCCESS,
    payload,
  };
};

const addOrderFailure = (payload) => {
  return {
    type: AAD_ORDER_FAILURE,
    payload,
  };
};

export const addOrder = (payload) => (dispatch) => {
  dispatch(addOrderRequest());
  const orderPayload=[];
  for(let product of payload){
    product && orderPayload.push(axios.post(`/orders`,product))
  }
  Promise.all(orderPayload)
  .then(()=>dispatch(addOrderSuccess()))
  .then(()=>dispatch(emptyCart(payload)))
  .then((err)=>dispatch(addOrderFailure()))
};


// request for EMPTY CART

const emptyCartRequest = (payload) => {
  return {
    type: EMPTY_CART_REQUEST,
    payload,
  };
};

const emptyCartSuccess = (payload) => {
  return {
    type: EMPTY_CART_SUCCESS,
    payload,
  };
};

const emptyCartFailure = (payload) => {
  return {
    type: EMPTY_CART_FAILURE,
    payload,
  };
};

export const emptyCart = (payload) => (dispatch) => {
  dispatch(emptyCartRequest());
  const deleteOrders=[];
  for(let obj of payload){
    let temp = dispatch(deleteProductCArt(obj.id))
    deleteOrders.push(temp);
  }
  Promise.all(deleteOrders)
  .then(()=>dispatch(emptyCartSuccess()))
  .then((err)=>dispatch(emptyCartFailure()))
};


// request for order fetch

const fetchOrderRequest = (payload) => {
  return {
    type: FETCH_ORDER_REQUEST,
    payload,
  };
};

const fetchOrderSuccess = (payload) => {
  return {
    type: FETCH_ORDER_SUCCESS,
    payload,
  };
};

const fetchOrderFailure = (payload) => {
  return {
    type: FETCH_ORDER_FAILURE,
    payload,
  };
};

export const fetchOrder = (payload) => (dispatch) => {
  dispatch(fetchOrderRequest());
  axios.get(`/orders`)
    .then((res) => dispatch(fetchOrderSuccess(res.data)))
    .catch((err) => dispatch(fetchOrderFailure(err.data)));
};
