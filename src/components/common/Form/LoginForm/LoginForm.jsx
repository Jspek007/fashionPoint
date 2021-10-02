import React, { useState } from "react";
import "./LoginForm.scss";
import { useForm } from "react-hook-form";

function LoginForm() {
  return (
    <form>
      <fieldset>
        <label className="email-label" htmlFor="email-adress">
          <input
            className="email-input"
            type="text"
            id="email-adress"
            placeholder="E-mail adress"
          />
        </label>
      </fieldset>

      <fieldset>
        <label className="password-label" htmlFor="password">
          <input
            className="password-input"
            type="password"
            id="password"
            placeholder="Wachtwoord"
          />
        </label>
      </fieldset>
    </form>
  );
}

export default LoginForm;
