import React from "react";
import "../RedirectButton/RedirectButton.scss";
import "./FunctionalButton.scss";

function FunctionalButton(props) {
  return (
    <button
      type="submit"
      className="functional-button"
      onClick={props.clickHandler}
      disabled={props.disabled || false}
    >
      {props.children}
    </button>
  );
}

export default FunctionalButton;
