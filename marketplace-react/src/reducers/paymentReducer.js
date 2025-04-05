const initialState = {
  paymentMethods: {
    cod: "Cash On Delivery",
    card: "Credit/Debit Cards",
  },
  savedCards: [],
  selectedPayment: "cod",
  cardFormValid: false,
};

const paymentReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_SAVED_CARDS":
      return {
        ...state,
        savedCards: [...state.savedCards, action.payload],
      };
    case "UPDATE_SELECTED_PAYMENT":
      return {
        ...state,
        selectedPayment: action.payload,
      };
    case "UPDATE_CARD_FORM_VALIDITY":
      return {
        ...state,
        cardFormValid: action.payload,
      };

    default:
      return state;
  }
};

export default paymentReducer;
