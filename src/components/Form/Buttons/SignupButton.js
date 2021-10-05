import React from "react";
import { Link } from "react-router-dom";
import "./Buttons.scss";

function SignupButton() {
  return (
    <Link to="/aanmelden">
      <button className="sign-up-action-button">Aanmelden</button>
    </Link>
  );
}

export default SignupButton;
