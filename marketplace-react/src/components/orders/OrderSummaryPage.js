import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../../services/cartService";
import { placeOrder } from "../../services/orderService";
import Dialog from "../dialog/Dialog";
import "./orders.css";

const OrderSummary = () => {
  const order = useSelector((state) => state.ordersReducer.currentOrder);
  const deleteCart = useSelector((state) => state.ordersReducer.clearCart);
  const address = useSelector((state) => state.addressReducer.addresses)[
    order.shippingAddress
  ];
  const paymentMethod = useSelector(
    (state) => state.paymentReducer.paymentMethods
  )[order.payment.mode];
  const cart = order.items;
  const totalCost = order.cost;
  const productList = useSelector(
    (state) => state.productReducer.products.byId
  );
  const [showDialog, setShowDialog] = useState(false);
  const [showLoading, setShowLoading] = useState(true);
  const navigate = useNavigate();

  let products = Object.keys(productList)
    .filter((key) => Object.keys(cart).includes(key))
    .reduce((obj, key) => {
      obj[key] = productList[key];
      return obj;
    }, {});

  const proceedToPlaceOrder = () => {
    placeOrder(order);
    if (deleteCart) clearCart();
    setShowDialog(true);
    setTimeout(() => setShowLoading(false), 2000);
    setTimeout(() => {
      setShowDialog(false);
      navigate("/");
    }, 4000);
  };

  return (
    <section className="stack">
      <h2>Order Summary</h2>
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
                    {/* <button
                        className="button cart-qty-button"
                        onClick={() =>
                          updateItemQuantity(product[1].id, "decrement")
                        }
                      >
                        -
                      </button> */}
                    <p className="cart-item-quantity">{cart[product[1].id]}</p>
                    {/* <button
                        className="button cart-qty-button"
                        onClick={() =>
                          updateItemQuantity(product[1].id, "increment")
                        }
                      >
                        +
                      </button> */}
                  </div>
                  {/* <button
                      className=" button cart-remove-button"
                      onClick={() => removeFromCart(product[1].id)}
                    >
                      Remove
                    </button> */}
                </div>
                <h3 className="cart-item-price">{"Rs. " + product[1].price}</h3>
              </div>
            </div>
          );
        })}
        <div className="total-cost-container">
          <h3>Total Cost : Rs. {totalCost}</h3>
        </div>
      </div>
      <div>
        <h2>Shipping Address</h2>
        <div className="individual-address-container">
          <div>
            <h4>{address.name}</h4>
            <p>{address.flat}</p>
            <p>{address.area}</p>
            <p>
              {address.city}, {address.state}
            </p>
            <p>Pincode: {address.pincode}</p>
            <div className="address-ph">
              <p>Phone Number: </p>
              <h4>{address.phone}</h4>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2>Payment</h2>
        <div className="individual-address-container">{paymentMethod}</div>
      </div>
      <div className="proceed-button-container">
        <button
          className="button proceed-button"
          onClick={() => proceedToPlaceOrder()}
        >
          Place Order
        </button>
      </div>
      {showDialog && (
        <Dialog>
          {showLoading ? (
            <div
              className="loading-container"
              style={{ marginBlockEnd: "25px" }}
            >
              <div className="loading"></div>
              <p>Please wait...</p>
            </div>
          ) : (
            <p className="order-placed-message">
              Order placed successfully! Thank you!
            </p>
          )}
        </Dialog>
      )}
    </section>
  );
};

export default OrderSummary;
