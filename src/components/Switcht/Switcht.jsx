import "./Switcht.css";
import React from "react";

export default function Switcht({ name, label, state, handleValueChange }) {
  return (
    <label className="switch">
      <input
        className="switch__input"
        type="checkbox"
        name={name}
        checked={state}
        onChange={handleValueChange}
      />
      <span className="switch__switcher">
        <span className="switch__switcher-circle"></span>
      </span>
      {label}
    </label>
  );
}