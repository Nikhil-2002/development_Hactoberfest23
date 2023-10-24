import React from "react";
import "./dropdown.css";
import PropTypes from "prop-types";

const Dropdown = (props) => {
  return (
    <div className="dropdown" style={props.style}>
      {props.children}
    </div>
  );
};

Dropdown.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object.isRequired,
};

export default Dropdown;
