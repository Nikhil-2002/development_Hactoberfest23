const initialState = {
  cart: {},
  cartTotal: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_CART_TOTAL": {
      return {
        ...state,
        cartTotal: action.payload,
      };
    }
    case "LOAD_CART": {
      let s = JSON.parse(JSON.stringify(state));
      s.cart = {};
      for (const id of action.payload.items) {
        s.cart[id] = action.payload.count[id];
      }
      return s;
    }

    default:
      return state;
  }
};

export default cartReducer;
