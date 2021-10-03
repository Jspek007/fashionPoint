import React from 'react'
import "./GoogleLoginButton.scss";
import { FcGoogle } from 'react-icons/fc'
import GoogleLogin from 'react-google-login';

function GoogleLoginButton() {

    const googleResponse = (response) => {
        console.log(response)
      }

    return (
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
                  Google 
                  </button>
        )}
      />
    )
}

export default GoogleLoginButton
