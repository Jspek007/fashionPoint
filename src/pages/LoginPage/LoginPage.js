import React, { Fragment } from "react";
import LoginForm from "../../components/Form/LoginForm";
import "./LoginPage.scss";
import FacebookLoginButton from "../../components/Form/Buttons/FacebookLoginButton";
import GoogleLoginButton from "../../components/Form/Buttons/GoogleLoginButton/GoogleLoginButton";
import { Header, Footer } from "../../components/common";
import { NavLink } from "react-router-dom";

function LoginPage() {
  return (
    <Fragment>
      <Header />
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
          </section>
        </section>
        <p className="alternative-register-container">
          Toch nog geen account?{" "}
          <NavLink to="/aanmelden" className="link">&nbsp;&nbsp;Aanmelden</NavLink>
        </p>
      </section>
      <Footer />
    </Fragment>
  );
}

export default LoginPage;
