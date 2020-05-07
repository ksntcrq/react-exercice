import React, { useCallback, useRef, useState } from "react";
import PropTypes from "prop-types";
import Input from "../../atoms/Input";
import Button from "../../atoms/Button/Button";
import styles from "./DropdownTypeahead.module.scss";
import useOnClickOutside from "../../../hooks/useOnClickOutside";
import useKeyboardNavigation from "../../../hooks/useKeyboardNavigation";

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

  const wrapperRef = useRef(null);

  const [highlightedResult, setHighlightedResult] = useState(null);

  const handleArrowDownKey = useCallback(() => {
    if (results.length) {
      setHighlightedResult((prevHighlightedResult) =>
          prevHighlightedResult === results.length ? 1 : prevHighlightedResult + 1
      );
    }
  }, [setHighlightedResult, results]);

  const handleArrowUpKey = useCallback(() => {
    if (results.length) {
      setHighlightedResult((prevHighlightedResult) =>
          prevHighlightedResult === 1 ? results.length : prevHighlightedResult - 1
      );
    }
  }, [setHighlightedResult, results]);

  const handleSelect = useCallback(
    (result) => {
      setHighlightedResult(null);
      setIsFocused(false);
      onSelect(result);
    },
    [setIsFocused, onSelect]
  );

  const handleEnterKey = useCallback(() => {
    handleSelect(results[highlightedResult - 1]);
  }, [handleSelect, results, highlightedResult]);

  useKeyboardNavigation(wrapperRef, {
    handleArrowDownKey,
    handleArrowUpKey,
    handleEnterKey,
  });

  const handleBlur = useCallback(() => {
    setIsFocused(false);
    setHighlightedResult(null);
  }, [setIsFocused, setHighlightedResult]);

  useOnClickOutside(wrapperRef, handleBlur);

  return (
    <div className={styles["dropdown-typeahead-wrapper"]} ref={wrapperRef}>
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
            results.map((result, index) => (
              <TypeaheadResult
                key={result.id}
                {...result}
                isHighlighted={highlightedResult === index + 1}
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
