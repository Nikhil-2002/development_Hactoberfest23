const initialState = {
  wishlist: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_WISHLIST": {
      let s = JSON.parse(JSON.stringify(state));
      s.wishlist = [];
      for (const id of action.payload) {
        s.wishlist.push(id);
      }
      return s;
    }

    default:
      return state;
  }
};

export default cartReducer;
