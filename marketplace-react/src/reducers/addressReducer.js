const initialState = {
  addresses: [],
  defaultAddress: {},
  selectedAddress: {},
  editAddress: false
};

const addressReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_ADDRESSES": {
      let s = JSON.parse(JSON.stringify(state));
      s.addresses = [];
      for (const address of action.payload) {
        s.addresses.push(address);
      }
      return s;
    }
    case "UPDATE_SELECTED_ADDRESS":
      return {
        ...state,
        selectedAddress: action.payload,
      };

    case "UPDATE_EDIT_ADDRESS":
      return {
        ...state,
        editAddress: action.payload,
      };
    case "UPDATE_DEFAULT_ADDRESS":
      return {
        ...state,
        defaultAddress: action.payload,
      };

    default:
      return state;
  }
};

export default addressReducer;
