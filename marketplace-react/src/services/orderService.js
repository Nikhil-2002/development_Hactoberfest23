import { loadCurrentOrder, updateOrders } from "../reducers/actionCreators";
import store from "../store";

const username = localStorage.getItem("username");
const dispatch = store.dispatch;

const createOrderId = () => {
  return (Math.random() + 1).toString(36).substring(2) + new Date().valueOf();
};

export const updateCurrentOrder = (name, value) => {
  const currentOrder = JSON.parse(localStorage.getItem("current_order"));
  currentOrder[name] = value;
  localStorage.setItem("current_order", JSON.stringify(currentOrder));
  dispatch(loadCurrentOrder(currentOrder));
};

export const placeOrder = (order) => {
  const orders = JSON.parse(localStorage.getItem("orders"));
  const orderId = createOrderId();
  orders[username].push({ [orderId]: order });
  localStorage.setItem("orders", JSON.stringify(orders));
  dispatch(updateOrders(orders));
  localStorage.setItem("current_order", "{}");
};
