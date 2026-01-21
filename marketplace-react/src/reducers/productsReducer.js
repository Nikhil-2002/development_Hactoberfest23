const initialState = {
  products: {
    byId: {},
    allIds: [],
  },
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_PRODUCTS": {
      let s = JSON.parse(JSON.stringify(state));
      const entry = {};
      for (const item of action.payload) {
        s.products.allIds.push(item.id);
        entry[item.id] = {
          name: item.name,
          id: item.id,
          image: item.image,
          price: item.price,
          description: item.description,
          tags: item.tags,
        };
      }
      s.products.byId = entry;
      s.products.allIds = [...new Set(s.products.allIds)];
      return s;
    }

    default:
      return state;
  }
};

export default productReducer;
