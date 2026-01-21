import React from "react";
import { useNavigate } from "react-router-dom";
import "../dialog.css";
import Dialog from "../Dialog";
import Button from "../../custom/button/Button";
import PropTypes from "prop-types";

const PromptDialog = ({ isLogin, setShowDialog }) => {
  const navigate = useNavigate();

  const routeLogin = (mode) => {
    setShowDialog(false);
    navigate("/login", { state: { authMode: mode } });
  };

  const routeRegister = (mode) => {
    setShowDialog(false);
    navigate("/register", { state: { authMode: mode } });
  };

  return (
    <Dialog setShowDialog={setShowDialog}>
      {isLogin ? (
        <p>Login as a seller or buyer?</p>
      ) : (
        <p>Register as a seller or buyer?</p>
      )}
      <div id="button-container">
        <Button
          onClick={() => {
            isLogin ? routeLogin("buyer") : routeRegister("buyer");
          }}
        >
          Buyer
        </Button>
        <Button
          onClick={() => {
            isLogin ? routeLogin("seller") : routeRegister("seller");
          }}
        >
          Seller
        </Button>
      </div>
    </Dialog>
  );
};

PromptDialog.propTypes = {
  isLogin: PropTypes.bool.isRequired,
  setShowDialog: PropTypes.func.isRequired,
};

export default PromptDialog;
