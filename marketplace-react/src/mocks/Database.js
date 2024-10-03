import productList from "../components/products/ProductList";

export const Database = {
  Buyers: [
    {
      username: "buyer-1",
      name: "Buyer 1",
      email: "buyer.1@gmail.com",
      phone: "6383030256",
      password: "!123Buyer",
    },
  ],
  Sellers: [
    {
      username: "seller-1",
      name: "Seller 1",
      email: "seller.1@gmail.com",
      phone: "6383030256",
      password: "!123Seller",
    },
  ],
};

export const Wishlist = {
  "buyer-1": [],
};

export const Cart = {
  "buyer-1": { items: [], count: {} },
};

export const Addresses = {
  "buyer-1": [],
};

export const Orders = {
  "buyer-1": [],
};

export const initializeDatabase = () => {
  localStorage.getItem("database") === null &&
    localStorage.setItem("database", JSON.stringify(Database));
  localStorage.getItem("wishlist") === null &&
    localStorage.setItem("wishlist", JSON.stringify(Wishlist));
  localStorage.getItem("cart") === null &&
    localStorage.setItem("cart", JSON.stringify(Cart));
  localStorage.getItem("products") === null &&
    localStorage.setItem("products", JSON.stringify(productList));
  localStorage.getItem("addresses") === null &&
    localStorage.setItem("addresses", JSON.stringify(Addresses));
  localStorage.getItem("orders") === null &&
    localStorage.setItem("orders", JSON.stringify(Orders));
  localStorage.getItem("default_address") === null &&
    localStorage.setItem("default_address", "");
};
