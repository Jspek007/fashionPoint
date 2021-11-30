import React, {useEffect, useState} from 'react';
import "./ForgotPasswordPage.scss";
import FunctionalButton from "../../components/Form/Buttons/FunctionalButton/FunctionalButton";
import {useAuth} from "../../contexts/AuthContext";
import {useHistory} from "react-router";
import {FaSpinner} from "react-icons/fa";
import {firebaseErrors} from "../../utils/firebaseErrors";

function ForgotPasswordPage() {
    const history = useHistory();
    const {forgotPassword} = useAuth();
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [loading, isLoading] = useState(false);
    const [disabled, isDisabled] = useState(true);

    const validateInputField = () => {
        if (email !== '') {
            isDisabled(false);
        } else {
            isDisabled(true);
        }
    }

    const handleResetEmailChange = (event) => {
        setEmail(event.target.value);
        validateInputField();
    }

    useEffect(() => {
        validateInputField();
    }, )

    const submitPasswordResetMail = () => {
        isLoading(true);
        forgotPassword(email)
            .then(() => {
                history.push("/email-is-verzonden");
            })
            .catch((error) => {
                setError(firebaseErrors[error.code]);
                isLoading(false)
            })
    }

    return (
        <section className="forgotten-password-container">
            <section className="forgotten-password-header">
                <h1 className="welcome-message">Klein beetje paniek?</h1>
                <h5 className="secondary-text">Geen stress, wij helpen je!</h5>
            </section>

            <section className="forgotten-password-instructions">
                <h5 className="secondary-text instruction">Geef ons je email</h5>
                <h5 className="secondary-text instruction">Wij geven een mailtje terug</h5>
            </section>

            <section className="forgotten-password-input-container">
                <form>
                    <fieldset>
                        <label className="email-label" htmlFor="email-adress">
                            <input
                                className="email-input"
                                type="text"
                                id="email-adress"
                                placeholder="Email"
                                value={email}
                                onChange={handleResetEmailChange}
                            />
                        </label>
                    </fieldset>
                </form>
                <section className="error-container">
                        <span className="error-message">
                            {error}
                        </span>
                </section>

                <section className="button-container">
                    <FunctionalButton clickHandler={submitPasswordResetMail}
                                      disabled={disabled}
                    >
                        {loading && (
                            <FaSpinner className="loading-spinner"/>
                        )}
                        {loading && <span>Verwerken...</span>}
                        {!loading && <span>Resetten</span>}
                    </FunctionalButton>
                </section>
            </section>

        </section>
    );
}

export default ForgotPasswordPage;