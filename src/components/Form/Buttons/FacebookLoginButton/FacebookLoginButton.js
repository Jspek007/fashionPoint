import React from 'react'
import "./FacebookLoginButton.scss";
import { FaFacebook } from 'react-icons/fa'
import { useHistory, useLocation } from "react-router";
import { useAuth } from "../../../../contexts/AuthContext";

function FacebookLoginButton() {
    const history = useHistory();
    const location = useLocation();
    const {signInWithFacebook} = useAuth();

    function handleRedirectToOrBack() {
        history.replace(location.state?.from ?? '/')
    }

    return (
        <button onClick={() => {
            signInWithFacebook()
                .then(user => {
                    handleRedirectToOrBack()
                    console.log(user)
                })
                .catch(e => console.log(e.message))
        }}
                className="facebook-button-login"
        >
            <FaFacebook className="facebook-button-icon"/>
            Facebook
        </button>
    )
}

export default FacebookLoginButton
