import React, { useCallback, useRef, useState } from "react";
import PropTypes from "prop-types";
import Input from "../../atoms/Input";
import Button from "../../atoms/Button/Button";
import styles from "./DropdownTypeahead.module.scss";
import useOnClickOutside from "../../../hooks/useOnClickOutside";

const propTypes = {
  onSearch: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
};

function DropdownTypeahead({
  onSearch,
  onClear,
  onSelect,
  searchQuery,
  results = [],
  resultComponent: TypeaheadResult = "div",
}) {
  const [isFocused, setIsFocused] = useState(false);
  const ref = useRef(null);
  useOnClickOutside(ref, () => setIsFocused(false));

  const handleSelect = useCallback(
    (result) => {
      setIsFocused(false);
      onSelect(result);
    },
    [setIsFocused, onSelect]
  );

  return (
    <div className={styles["dropdown-typeahead-wrapper"]} ref={ref}>
      <div className={styles["input-wrapper"]}>
        <Input
          onFocus={() => setIsFocused(true)}
          onChange={(e) => onSearch(e.target.value)}
          value={searchQuery}
        />
        {searchQuery && (
          <Button className={styles["clear-button"]} onClick={onClear}>
            x
          </Button>
        )}
      </div>
      {searchQuery.length > 0 && isFocused && (
        <div className={styles["results-wrapper"]}>
          {results.length > 0 ? (
            results.map((result) => (
              <TypeaheadResult
                key={result.id}
                {...result}
                onSelect={() => handleSelect(result)}
              />
            ))
          ) : (
            <div>No results found...</div>
          )}
        </div>
      )}
    </div>
  );
}

DropdownTypeahead.propTypes = propTypes;

export default DropdownTypeahead;
