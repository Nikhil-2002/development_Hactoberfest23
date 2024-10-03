import { combineReducers } from "redux";
import productReducer from "./productsReducer";
import cartReducer from "./cartReducer";
import wishlistReducer from "./wishlistReducer";
import addressReducer from "./addressReducer";
import paymentReducer from "./paymentReducer";
import ordersReducer from "./ordersReducer";

const rootReducer = combineReducers({
  productReducer,
  cartReducer,
  wishlistReducer,
  addressReducer,
  paymentReducer,
  ordersReducer,
});

export default rootReducer;
