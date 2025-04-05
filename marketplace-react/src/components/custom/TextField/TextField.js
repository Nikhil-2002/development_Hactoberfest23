import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import "./textField.css";

const TextField = ({
  name,
  value,
  label,
  type,
  handleChange,
  isValid,
  ...props
}) => {
  const [focused, setFocused] = useState(false);
  const [showLabel, setShowLabel] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showError, setShowError] = useState(false);
  const [validateError, setValidateError] = useState(false);

  if (!isValid) isValid = { err: false, errMsg: "" };

  useEffect(() => {
    if (validateError) setShowError(isValid.err);
    value !== "" ? setShowLabel(true) : setShowLabel(false);
  }, [validateError, isValid.err, value]);

  const togglePasswordVisibility = (event) => {
    event.preventDefault();
    setShowPassword(!showPassword);
  };

  return (
    <div
      className={
        "text-field" + (focused ? " focus" : "") + (showError ? " error" : "")
      }
    >
      {showLabel && <p className="field-label">{label}</p>}
      <div className="label-container"></div>
      <div>
        <input
          id={name}
          type={
            type !== "password" ? type || "text" : !showPassword ? type : "text"
          }
          name={name}
          autoComplete={name}
          placeholder={label}
          value={value}
          required={props.required}
          maxLength={props.maxLength && props.maxLength}
          style={props.style}
          onChange={(e) => {
            handleChange(e);
          }}
          onFocus={() => {
            setFocused(true);
          }}
          onBlur={() => {
            setFocused(false);
            setValidateError(true);
            setShowError(isValid.err);
          }}
        />
        {type === "password" && (
          <button
            className="toggle-password-button"
            onClick={(e) => {
              togglePasswordVisibility(e);
            }}
          >
            {showPassword ? (
              <VisibilityOff className="toggle-icon" />
            ) : (
              <Visibility className="toggle-icon" />
            )}
          </button>
        )}
        <div className="line">
          <div></div>
        </div>
      </div>
      {props.validate ? (
        <div className="error-container">
          {showError && <p className="error-message">{isValid.errMsg}</p>}
        </div>
      ) : (
        <div style={{ height: "10px", border: "none" }}></div>
      )}
    </div>
  );
};

TextField.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  required: PropTypes.bool,
  handleChange: PropTypes.func.isRequired,
  validate: PropTypes.bool,
  maxLength: PropTypes.node,
  style: PropTypes.object,
  isValid: PropTypes.object,
};

export default TextField;
