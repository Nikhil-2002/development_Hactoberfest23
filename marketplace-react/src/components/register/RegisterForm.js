import React, { useState } from "react";
import "../login/loginForm.css";
import TextField from "../custom/TextField/TextField";
import Button from "../custom/button/Button";
import {
  registerDefaults,
  validateField,
} from "../../services/registerService";
import useRegister from "../../customHooks/useRegister";
import PropTypes from "prop-types";

const RegisterForm = ({ onRegister, authMode }) => {
  const [fieldValues, setFieldValues] = useState(registerDefaults);
  const [checked, setChecked] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [enableSubmit, setEnableSubmit] = useState(false);

  const { handleRegister, notification } = useRegister(onRegister);

  const [isValid, setIsValid] = useState({
    name: { err: false, errMsg: "" },
    username: { err: false, errMsg: "" },
    phone: { err: false, errMsg: "" },
    email: { err: false, errMsg: "" },
    password: { err: false, errMsg: "" },
    confirmPassword: { err: false, errMsg: "" },
  });

  const handleCheckChange = (event) => {
    setChecked(event.target.checked);
    if (isFormValid) {
      event.target.checked ? setEnableSubmit(true) : setEnableSubmit(false);
    }
  };

  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    const updatedFieldValues = { ...fieldValues, [name]: value };
    setFieldValues(updatedFieldValues);
    let response =
      name === "confirmPassword"
        ? validateField(name, value, fieldValues.password)
        : validateField(name, value);
    response === true
      ? setIsValid({ ...isValid, [name]: { err: false, errMsg: "" } })
      : setIsValid({
          ...isValid,
          [name]: { err: true, errMsg: [response] },
        });
    if (
      Object.values(updatedFieldValues).every((field) => field !== "") &&
      Object.values(isValid).every((field) => field.err === false)
    ) {
      setIsFormValid(true);
    }
  };

  return (
    <div className="form-container">
      {/* <div className="button-container">
                <Button class={authMode==="seller" ? "unselected" : ""}
                onClick={() => {
                    setAuthMode("buyer");
                    setFieldValues(registerDefaults);
                }}
                >
                    Register as a Buyer
                </Button>
                <Button class={authMode==="buyer" ? " unselected" : ""}
                onClick={() => {
                    setAuthMode("seller");
                    setFieldValues(registerDefaults);
                }}
                >
                    Register as a Seller
                </Button>
            </div> */}
      <form
        className="register-form"
        onSubmit={(e) => {
          e.preventDefault();
          handleRegister(fieldValues, authMode);
        }}
      >
        <TextField
          label="Name"
          name="name"
          value={fieldValues.name}
          required={true}
          validate={true}
          isValid={isValid.name}
          handleChange={handleFieldChange}
        />
        <TextField
          label="Username"
          name="username"
          value={fieldValues.username}
          required={true}
          validate={true}
          isValid={isValid.username}
          handleChange={handleFieldChange}
        />
        <TextField
          label="Email"
          name="email"
          value={fieldValues.email}
          required={true}
          validate={true}
          isValid={isValid.email}
          handleChange={handleFieldChange}
        />
        <TextField
          label="Phone"
          name="phone"
          type="tel"
          value={fieldValues.phone}
          required={true}
          validate={true}
          isValid={isValid.phone}
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
        <TextField
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          value={fieldValues.confirmPassword}
          required={true}
          validate={true}
          isValid={isValid.confirmPassword}
          handleChange={handleFieldChange}
        />
        <div className="check-box agree-terms">
          <input
            type="checkbox"
            checked={checked}
            onChange={(e) => handleCheckChange(e)}
            id="agree-terms"
            data-testid="agreeTermsCheckbox"
          />
          <label htmlFor="agree-terms" data-testid="agreeTermsLabel">
            I have read and agree to the terms
          </label>
        </div>
        <Button
          type="submit"
          disabled={!enableSubmit}
          datatestid="submitButton"
        >
          Sign In
        </Button>
      </form>
      {notification()}
    </div>
  );
};

RegisterForm.propTypes = {
  onRegister: PropTypes.func.isRequired,
  authMode: PropTypes.string.isRequired,
};

export default RegisterForm;
