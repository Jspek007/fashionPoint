import React from 'react'
import "./GoogleLoginButton.scss";
import {FcGoogle} from 'react-icons/fc'
import {useAuth} from "../../../../contexts/AuthContext";
import {useHistory, useLocation} from "react-router";
import {HandleRedirectToOrBack} from "../../../../helpers/HandleRedirectToOrBack/HandleRedirectToOrBack";

function GoogleLoginButton() {
    const history = useHistory();
    const location = useLocation();
    const {signInWithGoogle} = useAuth();

    return (
        <button onClick={() =>
            signInWithGoogle()
                .then(() => {
                    HandleRedirectToOrBack({history, location})
                })
                .catch(e => console.log(e.message))
        }
                className="google-button-login"
        >
            <FcGoogle className="google-button-icon"/>
            Google
        </button>
    )
}

export default GoogleLoginButton
