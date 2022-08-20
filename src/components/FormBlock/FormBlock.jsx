import "./FormBlock.css";
import React from "react";

export default function FormBlock({ onSubmit, children }) {
    return (
        <form className="form" onSubmit={onSubmit}>
            {children}
        </form>
    );
}