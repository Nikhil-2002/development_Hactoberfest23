import React, { useState } from "react";
import { Alert } from "@mui/material";
import Fade from "@mui/material/Fade";

export default (onRegister) => {
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [success, setSuccess] = useState("");

  const Notification = () => {
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

  const handleRegister = (values, authMode) => {
    const { name, username, email, phone, password } = values;
    let details = {
      username: username,
      name: name,
      email: email,
      phone: phone,
      password: password,
    };
    details.username = details.username.trim();
    details.email = details.email.trim().toLowerCase();

    //console.log(details)

    const response = onRegister(details, authMode);
    if (response === true) {
      setShowError(false);
      authMode === "buyer"
        ? (window.location.pathname = "/login")
        : (window.location.pathname = "/seller");
      setSuccess("Registration Successful, Login to continue");
      setShowSuccess(true);
      //alert("Registration Successful, Login to continue");
    } else {
      setErrorMsg("Registration failed: " + response);
      setShowError(true);
      //alert("Registration failed: " + response);
    }
  };

  return {
    notification: Notification,
    handleRegister: handleRegister,
  };
};
