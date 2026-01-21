import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { updateSelectedAddress } from "../../reducers/actionCreators";
import { updateCurrentOrder } from "../../services/orderService";
import "./address.css";

const SelectAddress = () => {
  const addresses = useSelector((state) => state.addressReducer.addresses);
  const selected = useSelector((state) => state.addressReducer.selectedAddress);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const proceedToPayment = () => {
    updateCurrentOrder("shippingAddress", selected);
    navigate("/select-payment");
  };

  return (
    <section className="stack">
      <h3>Please select shipping address to continue</h3>
      {addresses.length === 0 ? (
        <div className="empty-container">
          {/* <ProductionQuantityLimitsIcon className="empty-icon" /> */}
          <p>
            You don&apos;t have any address saved. Please{" "}
            <Link to={"/profile/addresses"}>add</Link> to continue
          </p>
        </div>
      ) : (
        <div>
          {addresses.map((address, index) => {
            return (
              <div
                key={index}
                className={
                  "individual-address-container " +
                  (selected === index ? "selected" : "")
                }
                onClick={() => dispatch(updateSelectedAddress(index))}
              >
                <div>
                  <h4>{address.name}</h4>
                  <p>{address.flat}</p>
                  <p>{address.area}</p>
                  <p>
                    {address.city}, {address.state}
                  </p>
                  <p>Pincode: {address.pincode}</p>
                  <div className="address-ph">
                    <p>Phone Number: </p>
                    <h4>{address.phone}</h4>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="proceed-button-container">
            <button
              className="button proceed-button"
              disabled={addresses.length === 0}
              onClick={() => proceedToPayment()}
            >
              Proceed
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default SelectAddress;
