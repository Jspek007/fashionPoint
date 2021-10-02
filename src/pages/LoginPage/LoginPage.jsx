import React, { Fragment } from "react";
import LoginForm from "../../components/common/Form/LoginForm";
import "./LoginPage.scss";

function LoginPage() {
  return (
    <Fragment>
      <section className="login-container">
        <section className="form-header">
          <h1 className="welcome-message">Welkom terug!</h1>
          <h5 className="secondary-text">Login met je favoriete methode</h5>
        </section>

        <section className="login-method-container">
          <section className="third-party-methods">
            <h2 className="third-party-login-text">Eenvoudig inloggen</h2>
            Hier zouden facebook en google moeten komen om in te loggen
          </section>
          <section className="email-form-login">
            <h2 className="email-login">E-mail</h2>
            <LoginForm />
          </section>
        </section>
      </section>
    </Fragment>
  );
}

export default LoginPage;
