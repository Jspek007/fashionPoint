import "./EmailRegisterForm.scss";
import React, {useState} from "react";
import {useAuth} from "../../../../contexts/AuthContext";
import {useHistory, useLocation} from "react-router";
import {HandleRedirectToOrBack} from "../../../../helpers/HandleRedirectToOrBack/HandleRedirectToOrBack";
import {firebaseErrors} from "../../../../utils/firebaseErrors";
import FunctionalButton from "../../Buttons/FunctionalButton/FunctionalButton";
import {FaSpinner} from "react-icons/fa";
import InputField from "../InputField";

function EmailRegisterForm() {

    const {register} = useAuth();
    const history = useHistory();
    const location = useLocation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmationError, setConfirmationError] = useState('');
    const [loading, isLoading] = useState(false);
    const [error, setError] = useState('');

    const emailValidation = () => {
        const emailRegex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
        if (!email || emailRegex.test(email) === false) {
            setEmailError("Email is niet juist");
            return false;
        }
        setEmailError('');
        return true;
    }

    const passwordValidation = () => {
        const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        if (!password || passwordRegex.test(password) === false) {
            setPasswordError("Wachtwoord dient minimaal 8 tekens lang te zijn.");
            return false;
        }
        setPasswordError('');
        return true;
    }

    const canConfirmPassword = () => {
        if (password !== passwordConfirmation) {
            setConfirmationError("Wachtwoorden zijn niet gelijk");
            return false;
        }
        setConfirmationError('')
        return true;
    }

    const formValidationCheck = (event) => {
        event.preventDefault();
        isLoading(true);
        emailValidation();
        passwordValidation();
        canConfirmPassword();

        if (emailValidation() && passwordValidation() && canConfirmPassword()) {
            signUp().then(() => {
                isLoading(false);
            })
        } else {
            isLoading(false);
        }
    }

    const signUp = async () => {
        isLoading(true);
        register(email, password)
            .then(() => {
                HandleRedirectToOrBack({history, location});
            })
            .catch((error) => {
                setError(firebaseErrors[error.code]);
                isLoading(false);
            })
    }

    return (
        <form>
            <InputField
                labelName="email"
                inputType="text"
                idValue="email-adress"
                placeholder="Email"
                value={email}
                eventHandler={(event) => setEmail(event.target.value)}
                error={emailError}
            />
            <InputField
                labelName="password"
                inputType="password"
                idValue="password"
                placeholder="Wachtwoord"
                value={password}
                eventHandler={(event) => setPassword(event.target.value)}
                error={passwordError}
            />
            <InputField
                labelName="password-confirmation"
                inputType="password"
                idValue="password-confirmation"
                placeholder="Wachtwoord bevestigen"
                value={passwordConfirmation}
                eventHandler={(event) => setPasswordConfirmation(event.target.value)}
                error={confirmationError}
            />

            {error && (
                <section className="error-container">
                            <span className="error-message">
                                {error}
                            </span>
                </section>
            )}

            <section className="button-container">
                <FunctionalButton clickHandler={formValidationCheck}>
                    {loading && (
                        <FaSpinner className="loading-spinner"/>
                    )}
                    {loading && <span>Verwerken...</span>}
                    {!loading && <span>Registreer</span>}
                </FunctionalButton>
            </section>
        </form>
    );
}

export default EmailRegisterForm;
