import React from "react";
import "./Buttons.scss";
import {useAuth} from "../../../../contexts/AuthContext";
import {useHistory, useLocation} from "react-router";
import {HandleRedirectToOrBack} from "../../../../helpers/HandleRedirectToOrBack/HandleRedirectToOrBack";

function SubmitLoginButton({email, password}) {

    const {login} = useAuth();
    const history = useHistory();
    const location = useLocation();

    const onSubmitLogin = async (event) => {
        event.preventDefault();
        login(email, password)
            .then(() => {
                HandleRedirectToOrBack({ history, location })
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage)
            })
    }

    return (
        <div>
            <button className="submit-login-button"
                    onClick={onSubmitLogin}
            >Inloggen
            </button>
        </div>
    );
}

export default SubmitLoginButton;
