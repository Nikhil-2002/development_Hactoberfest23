import React, { useEffect, useState } from "react";
import "./product.css";
import * as JsSearch from "js-search";
import { useSelector } from "react-redux";
import productList from "./ProductList";
import useInfiniteScroll from "../../customHooks/useInfiniteScroll";
import BackToTop from "react-back-to-top-button";
import InfoDialog from "../dialog/infoDialog/InfoDialog";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useNavigate } from "react-router-dom";
import { updateWishlist } from "../../services/wishlistService";
import { ToastContainer } from "react-toastify";
import PropTypes from "prop-types";

const Products = ({ isAuthenticated, searchQuery, setSearchQuery }) => {
  const [showDialog, setShowDialog] = useState(false);
  const [products, setProducts] = useState(
    useSelector((state) => state.productReducer.products.byId)
  );
  const [isLoading, setIsLoading] = useInfiniteScroll(loadMoreProducts);
  const wishlist = useSelector((state) => state.wishlistReducer.wishlist);
  let params = new URL(document.location).searchParams;
  const navigate = useNavigate();
  const onProductClick = (productId) => {
    isAuthenticated
      ? navigate("/products/product?id=" + productId)
      : setShowDialog(true);
  };

  let items = new JsSearch.Search("product");
  items.addIndex("product");
  items.addIndex("tags");
  items.addDocuments(productList);

  function loadMoreProducts() {
    setTimeout(() => {
      setProducts((prevState) => [...prevState, ...productList]);
      setIsLoading(false);
    }, 1000);
  }

  useEffect(() => {
    setSearchQuery(params.get("s") || "");
  });

  useEffect(() => {
    searchQuery !== ""
      ? setProducts(items.search(searchQuery))
      : setProducts(productList);
  }, [searchQuery]);

  return (
    <div className="product-container">
      {searchQuery !== "" && <h2 className="results-title">Results</h2>}
      <section className="product-grid">
        {products &&
          Object.entries(products).map((productItem, index) => {
            return (
              <div className="product-card" key={index}>
                <img
                  src={productItem[1].image}
                  alt={productItem[1].name + " image"}
                  className="product-image product-link"
                  onClick={() => {
                    onProductClick(productItem[1].id);
                  }}
                ></img>
                <hr />
                <div className="product-info-container">
                  <div>
                    <h3
                      className="product-link"
                      onClick={() => {
                        onProductClick(productItem[1].id);
                      }}
                    >
                      {productItem[1].name}
                    </h3>
                    <p>{"Rs. " + productItem[1].price}</p>
                  </div>
                  {isAuthenticated && wishlist.includes(productItem[1].id) ? (
                    <FavoriteIcon
                      className="fav-icon"
                      style={{ color: "red" }}
                      onClick={() => updateWishlist(productItem[1].id)}
                    />
                  ) : (
                    <FavoriteBorderIcon
                      className="fav-icon"
                      onClick={() => updateWishlist(productItem[1].id)}
                    />
                  )}
                </div>
              </div>
            );
          })}
      </section>
      {isLoading && (
        <div className="loading-container">
          <div className="loading"></div>
        </div>
      )}
      {showDialog && !isAuthenticated && (
        <InfoDialog isLoggedIn={false} setShowDialog={setShowDialog} />
      )}
      <BackToTop
        showOnScrollUP
        showAt={500}
        speed={3000}
        easing="easeInOutQuint"
      >
        <button className="back-to-top-button">
          <ArrowUpwardIcon />
        </button>
      </BackToTop>
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

Products.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  searchQuery: PropTypes.string.isRequired,
  setSearchQuery: PropTypes.func.isRequired,
};

export default Products;
