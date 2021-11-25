import React from "react";
import "./RedirectButton.scss";

function RedirectButton(props) {
  return (
      <button type="button" className="user-control-button">
          {props.callToAction}
      </button>
  );
}

export default RedirectButton;
