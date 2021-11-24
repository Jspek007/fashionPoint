import React from "react";
import "./UserControlButton.scss";

function UserControlButton(props) {
  return (
      <button type="button" className="user-control-button">
          {props.callToAction}
      </button>
  );
}

export default UserControlButton;
