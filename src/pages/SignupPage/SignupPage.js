import React from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Footer, Header } from "../../components/common";
import EmailLoginButton from "../../components/Form/Buttons/EmailLoginButton";
import FacebookLoginButton from "../../components/Form/Buttons/FacebookLoginButton";
import GoogleLoginButton from "../../components/Form/Buttons/GoogleLoginButton/GoogleLoginButton";
import "./SignupPage.scss";

function SignupPage() {
  return (
    <Fragment>
      <Header />
      <section className="signup-container">
        <section className="signup-message-container">
          <h2 className="signup-text">Aanmelden</h2>
          <h4 className="signup-extra-text">
            Krijg toegang tot onze fashion outlets
          </h4>
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
        <p className="terms-information-container">
          Door u aan te melden, gaat u akkoord met onze{" "}
          <Link to="/algemene-voorwaarden" className="link">
            algemene voorwaarden
          </Link>
        </p>

        <section className="already-customer-container">
          <section>
            <p>
              Al wel een account?{" "}
              <Link to="/login" className="link">
                Inloggen
              </Link>
            </p>
          </section>
        </section>
      </section>
      <Footer />
    </Fragment>
  );
}

export default SignupPage;
