import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./Input.module.scss";

const propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default function Input({ value, onChange, onFocus, className }) {
  return (
    <input
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      className={classNames(styles.input, className)}
    />
  );
}

Input.propTypes = propTypes;
