import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { initializeDatabase } from "./mocks/Database";
import { useDispatch } from "react-redux";
import {
  loadProducts,
  loadWishlist,
  loadCart,
  loadAddresses,
  loadCurrentOrder,
} from "./reducers/actionCreators";
import useAuth from "./customHooks/useAuth";
import RootRouter from "./components/router/Router";

function App() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useAuth();

  initializeDatabase();

  const products = JSON.parse(localStorage.getItem("products"));
  dispatch(loadProducts(products));
  if (isAuthenticated) {
    const cart = JSON.parse(localStorage.getItem("cart"));
    const wishlist = JSON.parse(localStorage.getItem("wishlist"));
    const addresses = JSON.parse(localStorage.getItem("addresses"));
    const currentOrder = JSON.parse(localStorage.getItem("current_order"));
    dispatch(loadWishlist(wishlist));
    dispatch(loadCart(cart));
    dispatch(loadAddresses(addresses));
    dispatch(loadCurrentOrder(currentOrder));
  }

  return (
    <BrowserRouter>
      <RootRouter />
    </BrowserRouter>
  );
}

export default App;
