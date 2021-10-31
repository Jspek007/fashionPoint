import React from 'react'
import "./FacebookLoginButton.scss";
import {FaFacebook} from 'react-icons/fa'
import {useHistory, useLocation} from "react-router";
import {useAuth} from "../../../../contexts/AuthContext";
import {HandleRedirectToOrBack} from "../../../../helpers/HandleRedirectToOrBack/HandleRedirectToOrBack";

function FacebookLoginButton() {
    const history = useHistory();
    const location = useLocation();
    const {signInWithFacebook} = useAuth();

    return (
        <button onClick={() => {
            signInWithFacebook()
                .then(user => {
                    HandleRedirectToOrBack({history, location})
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
