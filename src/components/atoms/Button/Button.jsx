import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default function Button({
  type = "button",
  onChange,
  className,
  children,
}) {
  return (
    <button type={type} onChange={onChange} className={className}>
      {children}
    </button>
  );
}

Button.propTypes = propTypes;
