import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateCardFormValidity } from "../../reducers/actionCreators";
import TextField from "../custom/TextField/TextField";
import {
  cardDefaults,
  validateCardFields,
} from "../../services/paymentService";
import "./payments.css";
//import PropTypes from "prop-types";

const CardForm = () => {
  const [fieldValues, setFieldValues] = useState(cardDefaults);
  const [checked, setChecked] = useState(false);
  const [isValid, setIsValid] = useState({
    name: { err: false, errMsg: "" },
    card_number: { err: false, errMsg: "" },
    valid_thru: { err: false, errMsg: "" },
    cvv: { err: false, errMsg: "" },
  });
  const dispatch = useDispatch();

  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    const updatedFieldValues = { ...fieldValues, [name]: value };
    setFieldValues(updatedFieldValues);
    let response = validateCardFields(name, value);
    response === true
      ? setIsValid({ ...isValid, [name]: { err: false, errMsg: "" } })
      : setIsValid({
          ...isValid,
          [name]: { err: true, errMsg: [response] },
        });
    console.log(updatedFieldValues);
    console.log(isValid);
    const v1 = Object.values(updatedFieldValues).every((field) => field !== "");
    const v2 = Object.values(isValid).every((field) => field.err === false);
    console.log(v1);
    console.log(v2);
    if (
      v1 &&
      v2
      // Object.values(updatedFieldValues).every((field) => field !== "") &&
      // Object.values(isValid).every((field) => field.err === false)
    ) {
      dispatch(updateCardFormValidity(true));
    } else dispatch(updateCardFormValidity(false));
  };
  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked);
  };

  const handleSubmit = (details) => {
    console.log(details);
  };

  return (
    <form
      className="add-address-form"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(fieldValues);
      }}
    >
      <TextField
        label="Name"
        name="name"
        value={fieldValues.name}
        handleChange={handleFieldChange}
        required={true}
        validate={true}
      />
      <TextField
        label="Card Number"
        name="card_number"
        value={fieldValues.card_number}
        handleChange={handleFieldChange}
        required={true}
        validate={true}
        isValid={isValid.card_number}
      />
      <div className="parallel-fields">
        <TextField
          label="Valid Thru (MM / YY)"
          name="valid_thru"
          maxLength="5"
          value={fieldValues.valid_thru}
          handleChange={handleFieldChange}
          required={true}
          validate={true}
          isValid={isValid.valid_thru}
        />
        <TextField
          label="CVV"
          name="cvv"
          type="password"
          maxLength="4"
          value={fieldValues.cvv}
          handleChange={handleFieldChange}
          required={true}
          validate={true}
          isValid={isValid.cvv}
        />
      </div>

      <div className="checkbox-container">
        <div className="check-box">
          <input
            name="save_details"
            type="checkbox"
            id="save-card-details"
            checked={checked}
            onChange={(e) => handleCheckboxChange(e)}
          />
          <label htmlFor="save-card-details">Save card details</label>
        </div>
      </div>
    </form>
  );
};

// CardForm.propTypes = {
// };

export default CardForm;
