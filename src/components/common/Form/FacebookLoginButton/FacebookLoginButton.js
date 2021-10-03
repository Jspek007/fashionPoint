import React from 'react'
import "./FacebookLoginButton.scss";
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { FaFacebook } from 'react-icons/fa'

function FacebookLoginButton() {

    const facebookResponse = (response) => {
        console.log(response)
      }


    return (
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
    )
}

export default FacebookLoginButton
