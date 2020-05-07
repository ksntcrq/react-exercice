import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
};

export default function Input({ value, onChange, className }) {
  return <input value={value} onChange={onChange} className={className} />;
}

Input.propTypes = propTypes;
