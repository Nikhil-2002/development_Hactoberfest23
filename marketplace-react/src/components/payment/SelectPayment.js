import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateSelectedPayment } from "../../reducers/actionCreators";
import { updateCurrentOrder } from "../../services/orderService";
import PaymentsIcon from "@mui/icons-material/Payments";
import "./payments.css";
import CardForm from "./CardForm";
import { useNavigate } from "react-router-dom";

const SelectPayment = () => {
  const payments = useSelector((state) => state.paymentReducer.paymentMethods);
  const selected = useSelector((state) => state.paymentReducer.selectedPayment);
  const isFormValid = useSelector(
    (state) => state.paymentReducer.cardFormValid
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const proceedToSummary = () => {
    updateCurrentOrder("payment", { mode: selected });
    navigate("/order-summary");
  };

  const PaymentComponent = () => {
    return (
      <div className="card">
        {selected === "cod" ? (
          <p>Amount will be collected at the time of Delivery</p>
        ) : (
          <CardForm />
        )}
      </div>
    );
  };

  return (
    <section className="stack">
      <h3>Please select a payment method</h3>
      <div>
        <div className="payment-options-row">
          {Object.keys(payments).map((id, index) => {
            return (
              <div
                key={index}
                className={
                  "payment-option " + (selected === id ? "selected " : "")
                }
                onClick={() => dispatch(updateSelectedPayment(id))}
              >
                {id === "card" ? (
                  <svg
                    width={"1.4em"}
                    height={"1.4em"}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 4a2 2 0 012-2h12a2 2 0 012 2H0zm0 2v6a2 2 0 002 2h12a2 2 0 002-2V6H0zm3 5a1 1 0 011-1h1a1 1 0 110 2H4a1 1 0 01-1-1z"></path>
                  </svg>
                ) : (
                  <PaymentsIcon />
                )}
                {payments[id]}
              </div>
            );
          })}
        </div>
        <PaymentComponent />
        <div className="proceed-button-container">
          <button
            className="button proceed-button"
            disabled={!(selected === "cod" || isFormValid)}
            onClick={() => proceedToSummary()}
          >
            Proceed
          </button>
        </div>
      </div>
    </section>
  );
};

export default SelectPayment;
