import React, { Fragment } from "react";
import LoginForm from "../../components/common/Form/LoginForm";
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import GoogleLogin from 'react-google-login';
import "./LoginPage.scss";
import { FaFacebook } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'

const facebookResponse = (response) => {
  console.log(response)
}

const googleResponse = (response) => {
  console.log(response)
}

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
           <section className="third-party-login-buttons">
            <FacebookLogin 
              appId="" //Unknown for now
              autoLoad
              callback={facebookResponse}
              render={renderProps => (
                <button onClick={renderProps.onClick}
                        className="facebook-button-login"
                >
                  <FaFacebook className="facebook-button-icon" />
                  Login met Facebook
                </button>
              )} 
            />

            <GoogleLogin
              clientId="" //Unknown for now
              buttonText="Login met Google"
              onSuccess={googleResponse}
              onFailure={googleResponse}
              cookiePolicy={'single_host_origin'}
              render={renderProps => (
                <button onClick={renderProps.onClick}
                        className="google-button-login"
                        >
                        <FcGoogle className="google-button-icon" />
                        Login met Google   
                        </button>
              )}
            />
</section>
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
