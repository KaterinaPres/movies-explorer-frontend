import "./SubmitButton.css";
import React from "react";

export default function SubmitButton({ label }) {
    return (
        <button type="submit" className="button submit-button">
            {label}
        </button>
    );
}