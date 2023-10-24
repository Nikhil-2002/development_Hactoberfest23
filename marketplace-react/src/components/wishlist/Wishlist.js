import React from "react";
import HeartBrokenIcon from "@mui/icons-material/HeartBroken";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addToCart } from "../../services/cartService";
import { removeFromWislist } from "../../services/wishlistService";
import "./wishlist.css";
import { useSelector } from "react-redux";

const Wishlist = () => {
  const wishlist = useSelector((state) => state.wishlistReducer.wishlist);
  const productList = useSelector(
    (state) => state.productReducer.products.byId
  );
  let products = [];

  products = Object.keys(productList)
    .filter((key) => wishlist.includes(key))
    .reduce((obj, key) => {
      obj[key] = productList[key];
      return obj;
    }, {});

  return (
    <section className="stack">
      <h2>Your Wishlist</h2>
      {Object.entries(products).length === 0 ? (
        <div className="empty-container">
          <HeartBrokenIcon className="empty-icon" />
          <p>Your wishlist is empty. Start adding items.</p>
        </div>
      ) : (
        Object.entries(products).map((product, index) => {
          return (
            <div className="wishlist-item-container" key={index}>
              <div className="wishlist-item" key={index}>
                <img
                  className="wishlist-image"
                  src={product[1].image}
                  alt={product[1].name + "image"}
                ></img>
                <h4>{product[1].name}</h4>
                <p>{"Rs. " + product[1].price}</p>
              </div>
              <div className="wishlist-button-section">
                <button
                  className="button wishlist-item-button"
                  onClick={() => addToCart(product[1].id)}
                >
                  Add to Cart
                </button>
                <button
                  className="button wishlist-item-button remove-button"
                  onClick={() => removeFromWislist(product[1].id)}
                >
                  Remove
                </button>
              </div>
            </div>
          );
        })
      )}
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        theme="dark"
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </section>
  );
};

export default Wishlist;
