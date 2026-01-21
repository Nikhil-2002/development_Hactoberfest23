import productList from "../components/products/ProductList";
import { updateCartTotal, loadCart } from "../reducers/actionCreators";
import { toast } from "react-toastify";
import store from "../store";

const username = localStorage.getItem("username");
const dispatch = store.dispatch;

export const calculateTotalCost = () => {
  const cart = JSON.parse(localStorage.getItem("cart"));
  let totalCost = 0;
  if (cart[username]["items"].length === 0) {
    dispatch(updateCartTotal(0));
    return;
  }
  for (var item of productList) {
    cart[username]["items"].includes(item.id) &&
      (totalCost += parseInt(item.price) * cart[username]["count"][item.id]);
  }
  dispatch(updateCartTotal(totalCost));
};

export const addToCart = (productId) => {
  const cart = JSON.parse(localStorage.getItem("cart"));
  if (cart[username]["items"].includes(productId)) {
    cart[username]["count"][productId] += 1;
  } else {
    cart[username]["items"].push(productId);
    cart[username]["count"][productId] = 1;
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  dispatch(loadCart(cart));
  calculateTotalCost();
  toast.info("Item has been added to the Cart");
};

export const removeFromCart = (productId) => {
  const cart = JSON.parse(localStorage.getItem("cart"));
  let updatedCart = { ...cart };
  const index = updatedCart[username]["items"].indexOf(productId);
  updatedCart[username]["items"].splice(index, 1);
  delete updatedCart[username]["count"][productId];

  localStorage.setItem("cart", JSON.stringify(updatedCart));
  dispatch(loadCart(updatedCart));
  calculateTotalCost();
  toast.info("Item has been removed from the Cart");
};

export const updateItemQuantity = (productId, operation) => {
  const cart = JSON.parse(localStorage.getItem("cart"));
  let updatedCart = { ...cart };
  updatedCart[username]["count"][productId] === 1 &&
    operation === "decrement" &&
    removeFromCart(productId);
  operation === "increment"
    ? (updatedCart[username]["count"][productId] += 1)
    : (updatedCart[username]["count"][productId] -= 1);

  localStorage.setItem("cart", JSON.stringify(updatedCart));
  dispatch(loadCart(updatedCart));
  calculateTotalCost();
};

export const clearCart = () => {
  const cart = JSON.parse(localStorage.getItem("cart"));
  let clearedCart = { ...cart };
  clearedCart[username] = { items: [], count: {} };
  localStorage.setItem("cart", JSON.stringify(clearedCart));
  dispatch(loadCart(clearedCart));
  calculateTotalCost();
};
