import React, {useState} from "react";
import "../UserControlButton/UserControlButton.scss";
import {useAuth} from "../../../../contexts/AuthContext";
import {useHistory, useLocation} from "react-router";
import {HandleRedirectToOrBack} from "../../../../helpers/HandleRedirectToOrBack/HandleRedirectToOrBack";
import {FaSpinner} from "react-icons/fa";
import {firebaseErrors} from "../../../../utils/firebaseErrors";

function SubmitLoginButton({email, password}) {

    const {login} = useAuth();
    const history = useHistory();
    const location = useLocation();
    const [loading, isLoading] = useState(false);
    const [error, setError] = useState('');

    const onSubmitLogin = async (event) => {
        event.preventDefault();
        isLoading(true);
        login(email, password)
            .then(() => {
                HandleRedirectToOrBack({ history, location })
            })
            .catch((error) => {
                isLoading(false);
                console.log(error.code);
                setError(firebaseErrors[error.code]);
            })
    }

    return (
        <>
        <section>
            <button className="submit-login-button"
                    onClick={onSubmitLogin}
                    disabled={loading}>
                {loading && (
                    <FaSpinner className="loading-spinner" />
                    )}
                {loading && <span>U wordt ingelogd</span>}
                {!loading && <span>Inloggen</span>}
            </button>
        </section>
            <section className="error-container">
                <span className="error-message">
                    {error}
                </span>
            </section>
            </>
    );
}

export default SubmitLoginButton;
