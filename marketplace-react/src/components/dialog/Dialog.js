import React from "react";
import "./dialog.css";
import PropTypes from "prop-types";

const Dialog = ({ setShowDialog, ...props }) => {
  return (
    <>
      <div
        onClick={() => {
          setShowDialog(false);
        }}
        className="dialog-background"
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="dialog"
        >
          <div className="close-container">
            {setShowDialog !== undefined && (
              <button
                className="dialog-close"
                onClick={() => {
                  setShowDialog(false);
                }}
              >
                X
              </button>
            )}
          </div>
          {props.children}
        </div>
      </div>
    </>
  );
};

Dialog.propTypes = {
  setShowDialog: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default Dialog;
