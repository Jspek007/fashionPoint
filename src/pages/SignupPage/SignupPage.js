import React from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import EmailLoginButton from "../../components/Form/Buttons/LoginProviderButtons/EmailLoginButton";
import FacebookLoginButton from "../../components/Form/Buttons/LoginProviderButtons/FacebookLoginButton";
import GoogleLoginButton from "../../components/Form/Buttons/LoginProviderButtons/GoogleLoginButton/GoogleLoginButton";
import "./SignupPage.scss";
import Title from "../../components/common/Content/TextComponents/Title/Title";
import SubTitle from "../../components/common/Content/TextComponents/SubTitle/SubTitle";

function SignupPage() {
  return (
    <Fragment>
      <section className="signup-container">
        <section className="signup-message-container">
          <Title text="Aanmelden" />
          <SubTitle text="Krijg toegang tot onze fashion outlets" />
        </section>
        <section className="actions-container">
          <section className="action-buttons-container">
            <FacebookLoginButton />
            <GoogleLoginButton />
            <Link to="/email-register" className="nav-link">
              <EmailLoginButton />
            </Link>
          </section>
        </section>
        <section className="info-section">
          <p>
            Lees eerst onze{" "}
            <Link to="/algemene-voorwaarden" className="link">
              algemene voorwaarden
            </Link>
          </p>
          <p>
            Al wel een account?{" "}
            <Link to="/login" className="link">
              Inloggen
            </Link>
          </p>
        </section>
      </section>
    </Fragment>
  );
}

export default SignupPage;
