import "./ButtonToggle.css";
import React from "react";

function ButtonToggle({
  name,
  label,
  state,
  handleValueChange,
  handleShortFilmsSearch,
}) {
  return (
    <label className="toggle">
      <input
        className="toggle__input"
        type="checkbox"
        name={name}
        checked={state}
        onChange={handleValueChange}
        onInput={handleShortFilmsSearch}
      />
      <span className="toggle__switcher">
        <span className="toggle__switcher-circle"></span>
      </span>
      {label}
    </label>
  );
}

export default ButtonToggle;