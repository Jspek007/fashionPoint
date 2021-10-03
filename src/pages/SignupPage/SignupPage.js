import React from "react";
import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import {
  Footer,
  Header,
  LegalTermsBanner,
  PaymentMethods,
  Usp,
} from "../../components/common";
import DeliveryInformation from "../../components/common/DeliveryInformation";
import EmailLoginButton from "../../components/common/Form/Buttons/EmailLoginButton";
import FacebookLoginButton from "../../components/common/Form/Buttons/FacebookLoginButton";
import GoogleLoginButton from "../../components/common/Form/Buttons/GoogleLoginButton/GoogleLoginButton";
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
            <EmailLoginButton />
          </section>
        </section>
        <p className="terms-information-container">
          Door u aan te melden, gaat u akkoord met onze{" "}
          <NavLink to="/algemene-voorwaarden" className="link-to-terms">
            algemene voorwaarden
          </NavLink>
        </p>

        <section className="already-customer-container">
          <section>
            <p>
              Al wel een account? <NavLink to="/login">Inloggen</NavLink>
            </p>
          </section>
        </section>
      </section>
      <PaymentMethods />
      <DeliveryInformation />
      <Footer />
      <LegalTermsBanner />
    </Fragment>
  );
}

export default SignupPage;
