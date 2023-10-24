import { loadWishlist } from "../reducers/actionCreators";
import { toast } from "react-toastify";
import store from "../store";

const username = localStorage.getItem("username");
const wishlist = JSON.parse(localStorage.getItem("wishlist"));
const dispatch = store.dispatch;

export const updateWishlist = (productId) => {
  let updatedWishlist = { ...wishlist };
  let addProduct = true;
  updatedWishlist[username].forEach((item, index) => {
    if (item === productId) {
      updatedWishlist[username].splice(index, 1);
      addProduct = false;
      toast.info("Item has been removed from the Wishlist");
    }
  });
  if (addProduct) {
    updatedWishlist[username].push(productId);
    toast.info("Item has been added to the Wishlist");
  }
  localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  dispatch(loadWishlist(updatedWishlist));
};

export const removeFromWislist = (productId) => {
  let updatedWishlist = { ...wishlist };
  let index = updatedWishlist[username].indexOf(productId);
  if (index > -1) updatedWishlist[username].splice(index, 1);
  localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  dispatch(loadWishlist(updatedWishlist));
  toast.info("Item has been removed from the Wishlist");
};
