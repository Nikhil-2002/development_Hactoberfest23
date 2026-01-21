import React, { useState } from "react";
import { Alert } from "@mui/material";
import Fade from "@mui/material/Fade";

export default (onLogin) => {
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [success, setSuccess] = useState("");

  const notification = () => {
    if (showError) {
      return (
        <Fade in={showError}>
          <Alert
            severity="error"
            onClose={() => {
              setShowError(false);
            }}
          >
            {errorMsg}
          </Alert>
        </Fade>
      );
    }
    if (showSuccess) {
      return (
        <Fade in={showSuccess}>
          <Alert
            severity="success"
            onClose={() => {
              setShowSuccess(false);
            }}
          >
            {success}
          </Alert>
        </Fade>
      );
    }
  };

  const handleLogin = (values, authMode) => {
    let { username, password } = values;
    username = username.trim();
    const response = onLogin(username, password, authMode);
    if (response === true) {
      setShowError(false);
      window.location.pathname = "/";
      //alert("Login Successful")
      setSuccess("Login Successful");
      setShowSuccess(true);
    } else {
      setErrorMsg("Enter valid credentials");
      //alert("Enter valid credentials");
      setShowError(true);
    }
  };

  return {
    notification: notification,
    handleLogin: handleLogin,
  };
};
