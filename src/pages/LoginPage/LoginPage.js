import React, { Fragment } from "react";
import LoginForm from "../../components/common/Form/LoginForm";
import "./LoginPage.scss";
import FacebookLoginButton from "../../components/common/Form/Buttons/FacebookLoginButton";
import GoogleLoginButton from "../../components/common/Form/Buttons/GoogleLoginButton/GoogleLoginButton";
import { Usp } from "../../components/common";
import { NavLink } from "react-router-dom";

function LoginPage() {
  return (
    <Fragment>
      <Usp />
      <section className="login-container">
        <section className="form-header">
          <h1 className="welcome-message">Fijn dat je er weer bent</h1>
          <h5 className="secondary-text">Login op je eigen manier</h5>
        </section>

        <section className="login-method-container">
          <section className="third-party-methods">
            <h2 className="third-party-login-text">Kies voor eenvoud</h2>
            <section className="third-party-login-buttons">
              <FacebookLoginButton />
              <GoogleLoginButton />
            </section>
          </section>
          <section className="email-form-login">
            <h2 className="email-login">Of per email</h2>
            <LoginForm />
            <p className="register-container">
              Toch nog geen account?{" "}
              <NavLink to="/aanmelden"> Aanmelden</NavLink>
            </p>
          </section>
        </section>
      </section>
    </Fragment>
  );
}

export default LoginPage;
