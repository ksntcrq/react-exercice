import React from "react";
import PropTypes from "prop-types";
import Input from "../../atoms/Input";
import Button from "../../atoms/Button/Button";
import styles from "./DropdownTypeahead.module.scss";

const propTypes = {
  onSearch: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
};

function DropdownTypeahead({
  onSearch,
  onClear,
  searchQuery,
  results = [],
  resultComponent: TypeaheadResult = "div",
}) {
  return (
    <div className={styles.dropdownTypeaheadWrapper}>
      <div className={styles.inputWrapper}>
        <Input onChange={(e) => onSearch(e.target.value)} value={searchQuery} />
        {searchQuery && (
          <Button className={styles.clearButton} onClick={onClear}>
            x
          </Button>
        )}
      </div>
      {results.length > 0 && (
        <div className={styles.resultsWrapper}>
          {results.map((result) => (
            <TypeaheadResult key={result.id} result={result} />
          ))}
        </div>
      )}
    </div>
  );
}

DropdownTypeahead.propTypes = propTypes;

export default DropdownTypeahead;
