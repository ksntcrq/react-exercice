import React from "react";
import PropTypes from "prop-types";
import styles from "./SelectableInstitution.module.scss";
import SelectableItem from "../../atoms/SelectableItem/SelectableItem";

const propTypes = {
  onSelect: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  countryName: PropTypes.string.isRequired,
  isHighlighted: PropTypes.bool,
};

function SelectableInstitution({ onSelect, name, countryName, isHighlighted }) {
  return (
    <SelectableItem onSelect={onSelect} isHighlighted={isHighlighted}>
      {name}{" "}
      {countryName && <span className={styles.country}>({countryName})</span>}
    </SelectableItem>
  );
}

SelectableInstitution.propTypes = propTypes;

export default SelectableInstitution;
