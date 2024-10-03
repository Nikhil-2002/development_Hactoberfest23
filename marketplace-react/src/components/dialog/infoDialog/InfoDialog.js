import React from "react";
import "../dialog.css";
import Dialog from "../Dialog";
import PropTypes from "prop-types";

const InfoDialog = ({ isLoggedIn, setShowDialog }) => {
  return (
    <Dialog setShowDialog={setShowDialog}>
      {!isLoggedIn && <p>Please register or login to view the details</p>}
    </Dialog>
  );
};

InfoDialog.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  setShowDialog: PropTypes.func.isRequired,
};

export default InfoDialog;
