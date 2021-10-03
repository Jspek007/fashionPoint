import React from "react";
import { Link } from "react-router-dom";

function LoginButton() {
  return (
    <Link to="/login">
      <button className="login-action-button">Inloggen</button>
    </Link>
  );
}

export default LoginButton;
