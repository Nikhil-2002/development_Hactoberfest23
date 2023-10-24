import React from "react";
import "../dialog.css";
import Dialog from "../Dialog";
import PropTypes from "prop-types";

const ConfirmationDialog = ({ execute, setShowDialog }) => {

  return (
    <Dialog setShowDialog={setShowDialog}>
      <p>Are you sure you want to continue?</p>
      <div id="button-container">
        <button
        className="button"
        onClick={() => setShowDialog(false)}
        >
          Cancel
        </button>
        <button
        className="button"
        style={{backgroundColor: "rgb(234 91 91)"}}
        onClick={() => {
          execute();
          setShowDialog(false);
        }}
        >
          Yes
        </button>
      </div>
    </Dialog>
  );
};

ConfirmationDialog.propTypes = {
  execute: PropTypes.func.isRequired,
  setShowDialog: PropTypes.func.isRequired,
};

export default ConfirmationDialog;
