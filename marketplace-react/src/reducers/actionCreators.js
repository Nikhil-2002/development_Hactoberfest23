const username = localStorage.getItem("username");

export const loadProducts = (products) => {
  return {
    type: "LOAD_PRODUCTS",
    payload: products,
  };
};

export const loadCart = (cart) => {
  return {
    type: "LOAD_CART",
    payload: cart[username],
  };
};

export const loadWishlist = (wishlist) => {
  return {
    type: "LOAD_WISHLIST",
    payload: wishlist[username],
  };
};

export const updateCartTotal = (total) => {
  return {
    type: "UPDATE_CART_TOTAL",
    payload: total,
  };
};

export const loadAddresses = (addresses) => {
  return {
    type: "LOAD_ADDRESSES",
    payload: addresses[username],
  };
};

export const updateSelectedAddress = (id) => {
  return {
    type: "UPDATE_SELECTED_ADDRESS",
    payload: id,
  };
};

export const updateEditAddress = (value) => {
  return {
    type: "UPDATE_EDIT_ADDRESS",
    payload: value,
  };
};

export const updateDefaultAddress = (address) => {
  return {
    type: "UPDATE_DEFAULT_ADDRESS",
    payload: address,
  };
};

export const updateSavedCards = (card) => {
  return {
    type: "UPDATE_SAVED_CARDS",
    payload: card,
  };
};

export const updateSelectedPayment = (payment) => {
  return {
    type: "UPDATE_SELECTED_PAYMENT",
    payload: payment,
  };
};

export const updateCardFormValidity = (validity) => {
  return {
    type: "UPDATE_CARD_FORM_VALIDITY",
    payload: validity,
  };
};

export const updateOrders = (orders) => {
  return {
    type: "UPDATE_ORDERS",
    payload: orders[username],
  };
};

export const createOrder = (items, cost) => {
  return {
    type: "CREATE_ORDER",
    payload: {
      items: items,
      cost: cost,
    },
  };
};

export const loadCurrentOrder = (currentOrder) => {
  return {
    type: "LOAD_CURRENT_ORDER",
    payload: currentOrder,
  };
};

export const updateClearCart = (value) => {
  return {
    type: "UPDATE_CLEAR_CART",
    payload: value,
  };
};
