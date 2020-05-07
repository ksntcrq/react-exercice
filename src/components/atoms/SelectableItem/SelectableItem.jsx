import React from "react";
import classNames from "classnames";
import styles from "./SelectableItem.module.scss";
import PropTypes from "prop-types";

const propTypes = {
  component: PropTypes.number,
  onSelect: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  isHighlighted: PropTypes.bool,
};

function SelectableItem({
  component: Component = "div",
  onSelect,
  isHighlighted = false,
  children,
}) {
  return (
    <Component
      onClick={onSelect}
      className={classNames(styles.item, {
        [styles.highlighted]: isHighlighted,
      })}
    >
      {children}
    </Component>
  );
}

SelectableItem.propTypes = propTypes;

export default SelectableItem;
