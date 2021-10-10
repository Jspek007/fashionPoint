import React from "react";
import {Fragment} from "react";
import {Footer, Header} from "../../components/common";
import EmailRegisterForm from "../../components/Form/EmailRegisterForm/EmailRegisterForm";
import "./EmailSignUpPage.scss";
import {Link} from "react-router-dom";

function EmailSignUpPage() {
    return (
        <Fragment>
            <Header/>
            <section className="email-register-container">
                <section className="form-header">
                    <h1 className="welcome-message">Registreer via email</h1>
                    <h5 className="secondary-text">Krijg toegang tot honderden designer outlets</h5>
                </section>

                <section className="email-register-method">
                    <EmailRegisterForm/>
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
            <Footer/>
        </Fragment>
    );
}

export default EmailSignUpPage;
