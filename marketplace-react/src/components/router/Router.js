import React, { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "../../App.css";
import useAuth from "../../customHooks/useAuth";
import Header from "../header/Header";
import LoginForm from "../login/LoginForm";
import RegisterForm from "../register/RegisterForm";
import Products from "../products/Products";
import Wishlist from "../wishlist/Wishlist";
import Cart from "../cart/Cart";
import ProductInfo from "../products/ProductInfo";
import PropTypes from "prop-types";
import MyAddresses from "../addresses/MyAddresses";
import SelectAddress from "../addresses/SelectAddress";
import SelectPayment from "../payment/SelectPayment";
import OrderSummary from "../orders/OrderSummaryPage";

const RootRouter = () => {
  const { handleLogin, handleRegister, handleLogout, isAuthenticated } =
    useAuth();
  const [searchQuery, setSearchQuery] = useState("");

  const ProtectedRoute = ({ children, redirectTo }) => {
    return isAuthenticated ? children : <Navigate to={redirectTo} />;
  };

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <div>
            <Header
              isAuthenticated={isAuthenticated}
              onLogout={handleLogout}
              setSearchQuery={setSearchQuery}
            />
            <div className="container">
              <Products
                isAuthenticated={isAuthenticated}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
              />
            </div>
          </div>
        }
      />
      <Route
        exact
        path="/login"
        element={
          <div>
            <Header isAuthenticated={isAuthenticated} onLogout={handleLogout} />
            <div className="container">
              <LoginForm
                onLogin={handleLogin}
                isAuthenticated={isAuthenticated}
                authMode={"buyer"}
              />
            </div>
          </div>
        }
      />
      <Route
        exact
        path="/seller"
        element={
          <div>
            <Header isAuthenticated={isAuthenticated} onLogout={handleLogout} />
            <div className="container">
              <LoginForm
                onLogin={handleLogin}
                isAuthenticated={isAuthenticated}
                authMode={"seller"}
              />
            </div>
          </div>
        }
      />
      <Route
        exact
        path="/register"
        element={
          <div>
            <Header isAuthenticated={isAuthenticated} onLogout={handleLogout} />
            <div className="container">
              <RegisterForm
                onRegister={handleRegister}
                isAuthenticated={isAuthenticated}
                authMode={"buyer"}
              />
            </div>
          </div>
        }
      />
      <Route
        exact
        path="/seller/register"
        element={
          <div>
            <Header isAuthenticated={isAuthenticated} onLogout={handleLogout} />
            <div className="container">
              <RegisterForm
                onRegister={handleRegister}
                isAuthenticated={isAuthenticated}
                authMode={"seller"}
              />
            </div>
          </div>
        }
      />
      <Route
        exact
        path="/wishlist"
        element={
          <ProtectedRoute redirectTo={"/"}>
            <div>
              <Header
                isAuthenticated={isAuthenticated}
                onLogout={handleLogout}
              />
              <div className="container">
                <Wishlist />
              </div>
            </div>
          </ProtectedRoute>
        }
      />
      <Route
        exact
        path="/cart"
        element={
          <ProtectedRoute redirectTo={"/"}>
            <div>
              <Header
                isAuthenticated={isAuthenticated}
                onLogout={handleLogout}
              />
              <div className="container">
                <Cart />
              </div>
            </div>
          </ProtectedRoute>
        }
      />
      <Route
        exact
        path="/profile/addresses"
        element={
          <ProtectedRoute redirectTo={"/"}>
            <div>
              <Header
                isAuthenticated={isAuthenticated}
                onLogout={handleLogout}
              />
              <div className="container">
                <MyAddresses />
              </div>
            </div>
          </ProtectedRoute>
        }
      />
      <Route
        exact
        path="/select-address"
        element={
          <ProtectedRoute redirectTo={"/"}>
            <div>
              <Header
                isAuthenticated={isAuthenticated}
                onLogout={handleLogout}
              />
              <div className="container">
                <SelectAddress />
              </div>
            </div>
          </ProtectedRoute>
        }
      />
      <Route
        exact
        path="/select-payment"
        element={
          <ProtectedRoute redirectTo={"/"}>
            <div>
              <Header
                isAuthenticated={isAuthenticated}
                onLogout={handleLogout}
              />
              <div className="container">
                <SelectPayment />
              </div>
            </div>
          </ProtectedRoute>
        }
      />
      <Route
        exact
        path="/order-summary"
        element={
          <ProtectedRoute redirectTo={"/"}>
            <div>
              <Header
                isAuthenticated={isAuthenticated}
                onLogout={handleLogout}
              />
              <div className="container">
                <OrderSummary />
              </div>
            </div>
          </ProtectedRoute>
        }
      />
      <Route
        path="/products/:id"
        element={
          <ProtectedRoute redirectTo={"/"}>
            <div>
              <Header
                isAuthenticated={isAuthenticated}
                onLogout={handleLogout}
              />
              <div className="container">
                <ProductInfo isAuthenticated={isAuthenticated} />
              </div>
            </div>
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

RootRouter.propTypes = {
  children: PropTypes.node,
  redirectTo: PropTypes.string,
};

export default RootRouter;
