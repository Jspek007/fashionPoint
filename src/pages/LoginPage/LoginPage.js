import React, { Fragment } from "react";
import LoginForm from "../../components/Form/Forms/LoginForm";
import "./LoginPage.scss";
import FacebookLoginButton from "../../components/Form/Buttons/LoginProviderButtons/FacebookLoginButton";
import GoogleLoginButton from "../../components/Form/Buttons/LoginProviderButtons/GoogleLoginButton/GoogleLoginButton";
import { Link } from "react-router-dom";
import Title from "../../components/common/Content/TextComponents/Title/Title";
import SubTitle from "../../components/common/Content/TextComponents/SubTitle/SubTitle";

function LoginPage() {
  return (
    <Fragment>
      <section className="login-container">
        <section className="form-header">
            <Title text="Fijn dat je er weer bent!" />
            <SubTitle text="Login op je eigen manier" />
        </section>

        <section className="login-method-container">
          <section className="third-party-methods">
            <SubTitle text="Kies voor eenvoud" />
            <section className="third-party-login-buttons">
              <FacebookLoginButton />
              <GoogleLoginButton />
            </section>
          </section>
          <section className="email-form-login">
            <SubTitle text="Of per email" />
            <LoginForm />
          </section>
        </section>
          <p className="alternative-register-container">
              Wachtwoord vergeten? <Link to="/wachtwoord-vergeten" className="link">&nbsp;&nbsp;Klik hier</Link>
          </p>
        <p className="alternative-register-container">
          Toch nog geen account?{" "}
          <Link to="/aanmelden" className="link">&nbsp;&nbsp;Aanmelden</Link>
        </p>
      </section>
    </Fragment>
  );
}

export default LoginPage;
