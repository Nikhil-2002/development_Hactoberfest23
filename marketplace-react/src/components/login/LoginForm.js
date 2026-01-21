import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./loginForm.css";
import TextField from "../custom/TextField/TextField";
import Button from "../custom/button/Button";
import { loginDefaults, validateField } from "../../services/loginService";
import useLogin from "../../customHooks/useLogin";
import PropTypes from "prop-types";

const LoginForm = ({ onLogin, authMode }) => {
  const [fieldValues, setFieldValues] = useState(loginDefaults);
  const [enableSubmit, setEnableSubmit] = useState(false);

  const [isValid, setIsValid] = useState({
    username: { err: false, errMsg: "" },
    password: { err: false, errMsg: "" },
  });

  const { handleLogin, notification } = useLogin(onLogin);

  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    const updatedFieldValues = { ...fieldValues, [name]: value };
    setFieldValues(updatedFieldValues);

    let response = validateField(name, value);
    let valid;
    response === true
      ? (valid = { ...isValid, [name]: { err: false, errMsg: "" } })
      : (valid = {
          ...isValid,
          [name]: { err: true, errMsg: [response] },
        });
    setIsValid(valid);

    Object.values(updatedFieldValues).every((field) => field !== "") &&
    Object.values(valid).every((field) => field.err === false)
      ? setEnableSubmit(true)
      : setEnableSubmit(false);
  };

  return (
    <div className="form-container">
      {/* <div className="button-container">
                <Button class={authMode==="seller" ? " unselected" : ""}
                onClick={() => {
                    setAuthMode("buyer");
                    setFieldValues(loginDefaults);
                }}
                >
                    Login as a Buyer
                </Button>
                <Button class={authMode==="buyer" ? " unselected" : ""}
                onClick={() => {
                    setAuthMode("seller");
                    setFieldValues(loginDefaults);
                }}
                >
                    Login as a Seller
                </Button>
            </div> */}

      <div>
        <form
          className="login-form"
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin(fieldValues, authMode);
          }}
        >
          <TextField
            label="Username"
            name="username"
            value={fieldValues.username}
            validate={true}
            required={true}
            isValid={isValid.username}
            handleChange={handleFieldChange}
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            value={fieldValues.password}
            required={true}
            validate={true}
            isValid={isValid.password}
            handleChange={handleFieldChange}
          />
          <div className="last-layer">
            <div className="check-box">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>

            <Button className="text-button">Forgot password?</Button>
          </div>
          <Button type="submit" class="default-button" disabled={!enableSubmit}>
            Log In
          </Button>
        </form>
        {authMode === "seller" && (
          <div className="footer">
            <p>Not a seller?</p>
            <Link to={"/seller/register"}>Register</Link>
          </div>
        )}
      </div>
      {notification()}
    </div>
  );
};

LoginForm.propTypes = {
  onLogin: PropTypes.func.isRequired,
  authMode: PropTypes.string.isRequired,
};

export default LoginForm;
