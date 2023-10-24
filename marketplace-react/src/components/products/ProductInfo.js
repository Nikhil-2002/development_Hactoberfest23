import React from "react";
import productList from "./ProductList";
import "./productInfo.css";
import { useSearchParams, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { addToCart } from "../../services/cartService";
import { updateCurrentOrder } from "../../services/orderService";
import "react-toastify/dist/ReactToastify.css";

const ProductInfo = () => {
  const [searchParams] = useSearchParams();
  const productId = searchParams.get("id");
  const navigate = useNavigate();

  const product = productList.filter((product) => {
    return product.id === productId;
  })[0];

  const proceedToCheckout = () => {
    updateCurrentOrder("items", {[product.id]:1});
    updateCurrentOrder("cost", product.price);
    navigate("/select-address");
  };

  return (
    <div className="product-info">
      <div className="image">
        <img
          src={product.image}
          alt={product.name + "image"}
          height="400"
        ></img>
      </div>
      <div className="info">
        <h1>{product.name}</h1>

        <hr />
        <h2>Rs. {product.price}</h2>
        <p style={{ color: "green", marginTop: "0px" }}>
          inclusive of all taxes
        </p>

        <h2>Description:</h2>
        <p style={{ color: "smoke" }}>{product.description}</p>

        <div className="Bottom-box">
          <h3>Services and Policies</h3>
          <table>
            <tr className="delivery">
              <td>
                <div>
                  <img
                    className="icon"
                    src="https://img3.urbanic.com/6feec6d2be224096a72a3a0eb3e07bd5"
                    alt=""
                  />
                  <p className="delivery-option">
                    Cash on delivery available in most areas
                  </p>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div>
                  <img
                    className="icon"
                    src="https://img3.urbanic.com/2c9fa5132edb47b0a8bcbfb1c0f6fcbb"
                    alt=""
                  />
                  <p className="delivery-option">
                    Free shipping on the selected products!
                  </p>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div>
                  <img
                    className="icon"
                    src="https://img3.urbanic.com/bffae7de707a498c9251a4c9da5c9b24"
                    alt=""
                  />
                  <p className="delivery-option">
                    10 days easy returns with free pick up!
                  </p>
                </div>
              </td>
            </tr>
          </table>
        </div>
        <div className="productinfo-button-container">
          <button
            className="button product-page-button"
            onClick={() => {
              addToCart(product.id);
            }}
          >
            Add to Cart
          </button>
          <button 
          className="button product-page-button buy-now-button"
          onClick={() => proceedToCheckout()}
          >
            Buy Now
          </button>
        </div>
      </div>

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
    </div>
  );
};

export default ProductInfo;
