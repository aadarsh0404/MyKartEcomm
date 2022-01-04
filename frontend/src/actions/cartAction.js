import { ADD_TO_CART, REMOVE_CART_ITEM, SAVE_SHIPPING_INFO } from "../constants/cartConstant";
import axios from "axios";

// Add to cart
export const addItemsToCart = (id, quantity) => async (dispatch, getState) => {
  const { data } = await axios.get(
    `http://localhost:4000/api/v1/product/${id}`
  );

  dispatch({
    type: ADD_TO_CART,
    payload: {
      product: data.product._id,
      name: data.product.name,
      price: data.product.price,
      image: data.product.images[0].url,
      stock: data.product.Stock,
      quantity,
    },
  });

  // save cart data in local storage so on refreshing it doesn't dissapear
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};


// Remove from cart
export const removeItemFromCart = (id) => async (dispatch, getState) => {
  dispatch({
    type:REMOVE_CART_ITEM,
    payload:id
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
}

// Shipping Info
export const saveShippingInfo = (data) => async (dispatch) => {
  dispatch({
    type: SAVE_SHIPPING_INFO,
    payload: data
  });

  localStorage.setItem("shippingInfo", JSON.stringify(data));
}