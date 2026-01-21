export const login = (username, password, authMode) => {
  let mode;
  authMode === "buyer" ? (mode = "Buyers") : (mode = "Sellers");
  const database = JSON.parse(localStorage.getItem("database"));
  for (const user of database[mode]) {
    if (user.username === username) {
      if (user.password === password) {
        localStorage.setItem("username", username);
        localStorage.setItem("user", user.name);
        localStorage.setItem("mode", authMode);
        localStorage.setItem("current_order", "{}");
        return true;
      }
    }
  }
  return "Please enter valid credentials";
};

export const register = (details, authMode) => {
  let mode;
  authMode === "buyer" ? (mode = "Buyers") : (mode = "Sellers");
  let database = JSON.parse(localStorage.getItem("database"));
  let wishlist = JSON.parse(localStorage.getItem("wishlist"));
  let cart = JSON.parse(localStorage.getItem("cart"));
  let addresses = JSON.parse(localStorage.getItem("addresses"));
  let orders = JSON.parse(localStorage.getItem("orders"));
  const userArray = database[mode];
  if (userArray.some((user) => user.username === details.username))
    return "Username already exists, try a different one";
  if (userArray.some((user) => user.email === details.email))
    return "An account with this email already exists";
  if (userArray.some((user) => user.phone === details.phone))
    return "An account with this phone number already exists";

  database[mode].push(details);
  wishlist[userArray.username] = [];
  cart[userArray.username] = { items: [], count: {} };
  addresses[userArray.username] = [];
  orders[userArray.username] = [];

  localStorage.setItem("database", JSON.stringify(database));
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
  localStorage.setItem("cart", JSON.stringify(cart));
  localStorage.setItem("addresses", JSON.stringify(addresses));
  localStorage.setItem("orders", JSON.stringify(orders));

  return true;
};

export const isLoggedIn = () => {
  return localStorage.getItem("user") !== null;
};

export const logout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("username");
  localStorage.removeItem("mode");
};
