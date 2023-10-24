const initialState = {
  orders: {},
  currentOrder: {
    items: {},
    cost: 0,
    shippingAddress: 0,
    payment: {},
  },
  clearCart: false,
};

const ordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_ORDERS":
      return {
        ...state,
        orders: action.payload,
      };
    case "CREATE_ORDER":
      return {
        ...state,
        currentOrder: {
          ...state.currentOrder,
          items: action.payload.items,
          cost: action.payload.cost,
        },
      };
    case "LOAD_CURRENT_ORDER":
      return {
        ...state,
        currentOrder: action.payload,
      };

    case "UPDATE_CLEAR_CART":
      return {
        ...state,
        clearCart: action.payload,
      };

    default:
      return state;
  }
};

export default ordersReducer;
