import React, { useState } from "react";
import "./header.css";
import Button from "../custom/button/Button";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Dropdown from "../dropdown/Dropdown";
import Searchbar from "../searchbar/Searchbar";
import PropTypes from "prop-types";
import Logo from "../../logo/CBP Marketplace-1.png";
import SellersPortalLogo from "../../logo/CBP_Sellers_Portal.png";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const Header = ({ isAuthenticated, onLogout, setSearchQuery }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const cart = useSelector((state) => state.cartReducer.cart);
  let cartLength = Object.keys(cart).length;
  const iconLocationArray = [
    "/login",
    "/register",
    "/seller",
    "/seller/register",
  ];
  const navigate = useNavigate();

  const routeHome = () => {
    setShowDropdown(false);
    navigate("/");
    if (setSearchQuery !== undefined) setSearchQuery("");
  };

  const routeTo = (path) => {
    setShowDropdown(false);
    navigate(path);
  };

  const logout = () => {
    setShowDropdown(false);
    onLogout();
  };

  const buttonSection = () => {
    return (
      <div>
        <h5 className="dropdown-welcome">Welcome to CBP Marketplace</h5>
        <div className="button-section">
          <Button className="header-button" onClick={() => routeTo("/login")}>
            Login
          </Button>
          <Button
            className="header-button"
            onClick={() => routeTo("/register")}
          >
            Sign Up
          </Button>
        </div>
      </div>
    );
  };

  const username = () => {
    return (
      <div>
        <div className="welcome-user">
          <p>Hi</p>
          <p id="username">{localStorage.getItem("user")}</p>
        </div>
        <hr />
        <div>
          <p>Orders</p>
        </div>
        <div>
          <p onClick={() => routeTo("/wishlist")}>Wishlist</p>
        </div>
        <div>
          <p>My Profile</p>
        </div>
        <div>
          <p onClick={() => routeTo("/profile/addresses")}>Saved Addresses</p>
        </div>
      </div>
    );
  };

  return (
    <div>
      <nav className="header">
        <button
          className="icon-button"
          style={{
            textDecoration: "none",
            marginInlineStart: "20px",
          }}
          onClick={() => routeHome()}
        >
          {window.location.pathname === "/seller" ||
          window.location.pathname === "/seller/register" ? (
            <img
              className="sellers-logo"
              src={SellersPortalLogo}
              alt="CBP Sellers Portal Logo"
            />
          ) : (
            <img className="logo" src={Logo} alt="CBP Marketplace Logo" />
          )}
        </button>

        {window.location.pathname === "/" && (
          <Searchbar setSearchQuery={setSearchQuery} />
        )}

        {!iconLocationArray.includes(window.location.pathname) && (
          <div className="icons-section">
            <div className="profile-icon">
              <button
                className="icon-button"
                onClick={() => {
                  setShowDropdown(!showDropdown);
                }}
              >
                <PersonOutlineOutlinedIcon />
              </button>
              <p className="icon-title">Profile</p>
              {showDropdown && (
                <div style={{ height: 0 }}>
                  <div className="indicator profile-icon-indicator"></div>
                  <Dropdown
                    style={
                      isAuthenticated ? { right: "60px" } : { right: "0px" }
                    }
                  >
                    {isAuthenticated ? username() : buttonSection()}
                    <hr />
                    <div onClick={() => routeTo("/seller")}>
                      <p>Seller Portal</p>
                    </div>
                    <div>
                      <p>Contact us</p>
                    </div>
                    {isAuthenticated && (
                      <div
                        onClick={() => {
                          logout();
                        }}
                      >
                        <p>Logout</p>
                      </div>
                    )}
                  </Dropdown>
                </div>
              )}
            </div>

            {isAuthenticated && (
              <div className="inner-icons-section">
                <div className="wishlist-icon">
                  <button
                    className="icon-button"
                    onClick={() => {
                      setShowDropdown(false);
                      navigate("/wishlist");
                    }}
                  >
                    <FavoriteBorderIcon />
                  </button>
                  <p className="icon-title">Wishlist</p>
                  {window.location.pathname === "/wishlist" && (
                    <div className="indicator"></div>
                  )}
                </div>
                <div className="cart-icon">
                  <button
                    className="icon-button"
                    onClick={() => {
                      setShowDropdown(false);
                      navigate("/cart");
                    }}
                  >
                    <ShoppingCartOutlinedIcon />
                  </button>
                  {cartLength > 0 && (
                    <div className="cart-length">{cartLength}</div>
                  )}
                  <p className="icon-title">Cart</p>
                  {window.location.pathname === "/cart" && (
                    <div className="indicator"></div>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
      </nav>
    </div>
  );
};

Header.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  onLogout: PropTypes.func.isRequired,
  setSearchQuery: PropTypes.func,
};

export default Header;
