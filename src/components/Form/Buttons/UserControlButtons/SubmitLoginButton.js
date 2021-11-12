import React, {useState} from "react";
import "./Buttons.scss";
import {useAuth} from "../../../../contexts/AuthContext";
import {useHistory, useLocation} from "react-router";
import {HandleRedirectToOrBack} from "../../../../helpers/HandleRedirectToOrBack/HandleRedirectToOrBack";
import {FaSpinner} from "react-icons/fa";

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
                const errorMessage = error.message;
                console.log(errorMessage)
                setError(errorMessage);
                isLoading(false);
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
