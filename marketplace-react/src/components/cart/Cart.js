import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  updateItemQuantity,
  removeFromCart,
  calculateTotalCost,
  clearCart,
} from "../../services/cartService";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import "./cart.css";
import { updateClearCart } from "../../reducers/actionCreators";
import { updateCurrentOrder } from "../../services/orderService";

const Cart = () => {
  const cart = useSelector((state) => state.cartReducer.cart);
  const cartTotal = useSelector((state) => state.cartReducer.cartTotal);
  const productList = useSelector(
    (state) => state.productReducer.products.byId
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    calculateTotalCost();
  }, []);

  let products = Object.keys(productList)
    .filter((key) => Object.keys(cart).includes(key))
    .reduce((obj, key) => {
      obj[key] = productList[key];
      return obj;
    }, {});

  const proceedToCheckout = () => {
    updateCurrentOrder("items", cart);
    updateCurrentOrder("cost", cartTotal);
    dispatch(updateClearCart(true));
    navigate("/select-address");
  };

  return (
    <section className="stack">
      <h2>Your Cart</h2>
      {Object.entries(products).length === 0 ? (
        <div className="empty-container">
          <ProductionQuantityLimitsIcon className="empty-icon" />
          <p>Your cart is empty. Add items to checkout.</p>
        </div>
      ) : (
        <div>
          {Object.entries(products).map((product, index) => {
            return (
              <div className="cart-item-container" key={index}>
                <div className="cart-item" key={index}>
                  <img
                    className="cart-image"
                    src={product[1].image}
                    alt={product[1].name + " image"}
                  ></img>
                  <div>
                    <h3 className="cart-product-title">{product[1].name}</h3>
                    <h5 className="quantity-title">Quantity</h5>
                    <div className="cart-item-quantity-container">
                      <button
                        className="button cart-qty-button"
                        onClick={() =>
                          updateItemQuantity(product[1].id, "decrement")
                        }
                      >
                        -
                      </button>
                      <p className="cart-item-quantity">
                        {cart[product[1].id]}
                      </p>
                      {/* <input
                                                className="cart-item-quantity"
                                                defaultValue={cart[username]["count"][product.id]}
                                                >
                                                </input> */}
                      <button
                        className="button cart-qty-button"
                        onClick={() =>
                          updateItemQuantity(product[1].id, "increment")
                        }
                      >
                        +
                      </button>
                    </div>
                    <button
                      className=" button cart-remove-button"
                      onClick={() => removeFromCart(product[1].id)}
                    >
                      Remove
                    </button>
                  </div>
                  <h3 className="cart-item-price">
                    {"Rs. " + product[1].price}
                  </h3>
                </div>
              </div>
            );
          })}
          <button
            className="button cart-remove-button"
            onClick={() => {
              clearCart();
              toast.info("Cart has been cleared")
            }}
          >
            Clear cart
          </button>
          <div className="total-cost-container">
            <h3>Total Cost : Rs. {cartTotal}</h3>
          </div>
          <div>
            <h3>Deliver to</h3>
            <div>
              <button>Change</button>
            </div>
          </div>
          <div className="proceed-button-container">
            <button
            className="button proceed-button"
            onClick={() => proceedToCheckout()}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
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

export default Cart;
