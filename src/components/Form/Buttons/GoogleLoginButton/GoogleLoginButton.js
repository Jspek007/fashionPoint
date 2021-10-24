import React from 'react'
import "./GoogleLoginButton.scss";
import {FcGoogle} from 'react-icons/fc'
import GoogleLogin from 'react-google-login';
import {useAuth} from "../../../../contexts/AuthContext";
import {useHistory, useLocation} from "react-router";

function GoogleLoginButton() {
    const history = useHistory();
    const location = useLocation();
    const {signInWithGoogle, login} = useAuth();

    function handleRedirectToOrBack() {
        history.replace(location.state?.from ?? '/profile')
    }

    return (
        <button onClick={() =>
            signInWithGoogle()
                .then(user => {
                    handleRedirectToOrBack()
                    console.log(user)
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
