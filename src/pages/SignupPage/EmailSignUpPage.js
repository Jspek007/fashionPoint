import React from "react";
import { Fragment } from "react";
import { Header } from "../../components/common";
import EmailRegisterForm from "../../components/Form/EmailRegisterForm/EmailRegisterForm";

function EmailSignUpPage() {
  return (
    <Fragment>
      <Header />
      <EmailRegisterForm />
    </Fragment>
  );
}

export default EmailSignUpPage;
