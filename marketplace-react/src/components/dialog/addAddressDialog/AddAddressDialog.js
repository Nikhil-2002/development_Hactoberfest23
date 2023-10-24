import React, { useState } from "react";
import TextField from "../../custom/TextField/TextField";
import Dialog from "../Dialog";
import "./addAddressDialog.css";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { addAddress, editAddress } from "../../../services/addressService";
import { useDispatch } from "react-redux";
import { updateEditAddress } from "../../../reducers/actionCreators";

const AddAddressDialog = ({ setOpenDialog, edit, currentAddress }) => {
  const defaultValues = {
    name: "",
    phone: "",
    flat: "",
    area: "",
    landmark: "",
    city: "",
    state: "",
    pincode: "",
    default_address: false,
  };
  const states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttarakhand",
    "Uttar Pradesh",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli",
    "Daman and Diu",
    "Delhi",
    "Lakshadweep",
    "Puducherry",
  ];
  const [fieldValues, setFieldValues] = useState(
    edit ? currentAddress : defaultValues
  );
  const dispatch = useDispatch();
  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    const updatedFieldValues = { ...fieldValues, [name]: value };
    setFieldValues(updatedFieldValues);
  };
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    const updatedFieldValues = { ...fieldValues, [name]: checked };
    setFieldValues(updatedFieldValues);
  };
  const handleAddressSubmit = (address) => {
    if (!address.phone.match(/^\d{10}$/)) {
      toast.error("Please enter a valid phone number");
      return;
    }
    if (!address.pincode.match(/^\d{6}$/)) {
      toast.error("Please enter a valid pincode");
      return;
    }
    edit ? editAddress(currentAddress, address) : addAddress(address);
    setOpenDialog(false);
    dispatch(updateEditAddress(false));
  };

  return (
    <Dialog setShowDialog={() => {
      setOpenDialog(false);
      dispatch(updateEditAddress(false));
      }}
      >
      <form
        className="add-address-form"
        onSubmit={(e) => {
          e.preventDefault();
          handleAddressSubmit(fieldValues);
        }}
      >
        <TextField
          label="Name"
          name="name"
          value={fieldValues.name}
          handleChange={handleFieldChange}
          required={true}
          validate={false}
        />
        <TextField
          label="Mobile Number"
          name="phone"
          type="tel"
          maxLength="10"
          value={fieldValues.phone}
          handleChange={handleFieldChange}
          required={true}
          validate={false}
        />
        <TextField
          label="Flat, Building, Appartment"
          name="flat"
          value={fieldValues.flat}
          handleChange={handleFieldChange}
          required={true}
          validate={false}
        />
        <TextField
          label="Area, Street, Village"
          name="area"
          value={fieldValues.area}
          handleChange={handleFieldChange}
          required={true}
          validate={false}
        />
        <TextField
          label="Landmark (Optional)"
          name="landmark"
          value={fieldValues.landmark}
          handleChange={handleFieldChange}
          validate={false}
        />
        <div className="parallel-fields">
          <TextField
            label="City, Town"
            name="city"
            value={fieldValues.city}
            handleChange={handleFieldChange}
            required={true}
            validate={false}
          />
          <select
            name="state"
            className="state-select"
            value={fieldValues.state}
            onChange={(e) => handleFieldChange(e)}
            required={true}
          >
            <option value={""}>Choose a state</option>
            {states.map((state, index) => {
              return (
                <option key={index} value={state}>
                  {state}
                </option>
              );
            })}
          </select>
        </div>
        <TextField
          label="Pincode"
          name="pincode"
          type="tel"
          maxLength="6"
          value={fieldValues.pincode}
          handleChange={handleFieldChange}
          required={true}
          validate={false}
        />
        <div className="address-actions-container">
          <div className="check-box">
            <input
              name="default_address"
              type="checkbox"
              id="set-as-default-address"
              checked={fieldValues.default_address}
              onChange={(e) => handleCheckboxChange(e)}
            />
            <label htmlFor="set-as-default-address">Set as default</label>
          </div>
          <button className="button sumbit-address-button" type="submit">
            Save
          </button>
        </div>
      </form>
    </Dialog>
  );
};

AddAddressDialog.propTypes = {
  setOpenDialog: PropTypes.func.isRequired,
  currentAddress: PropTypes.object,
  edit: PropTypes.bool.isRequired,
};

export default AddAddressDialog;
