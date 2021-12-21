import React from 'react'
import "./GoogleLoginButton.scss";
import {FcGoogle} from 'react-icons/fc'
import {useAuth} from "../../../../../contexts/AuthContext";
import {useHistory, useLocation} from "react-router";
import {handleRedirectToOrBack} from "../../../../../helpers/HandleRedirectToOrBack/handleRedirectToOrBack";

function GoogleLoginButton() {
    const history = useHistory();
    const location = useLocation();
    const {signInWithGoogle} = useAuth();

    return (
        <button onClick={() =>
            signInWithGoogle()
                .then(() => {
                    handleRedirectToOrBack({history, location})
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
