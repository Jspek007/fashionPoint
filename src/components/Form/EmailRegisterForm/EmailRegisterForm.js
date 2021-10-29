import "./EmailRegisterForm.scss";
import React, {useState} from "react";
import AuthContextProvider, {useAuth} from "../../../contexts/AuthContext";
import {useHistory, useLocation} from "react-router";
import {getAuth, onAuthStateChanged, updateProfile} from "firebase/auth";

function EmailRegisterForm() {

    const {register} = useAuth();
    const history = useHistory();
    const location = useLocation();


    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmationError, setConfirmationError] = useState('');
    const [disabled, setDisabled] = useState(true);
    const [submitError, setSubmitError] = useState('');
    const setDisplayName = (firstname + " " + lastname);

    function handleRedirectToOrBack() {
        history.replace(location.state?.from ?? '/')
    }

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

    const formValidationCheck = () => {
        if (emailValidation() && passwordValidation() && canConfirmPassword()) {
            setDisabled(false);
            return true;
        } else {
            setDisabled(true);
            return false;
        }
    }

    const setDisplayNameOnEmailRegister = () => {
        const auth = getAuth();
        onAuthStateChanged(auth, user => {
            if (user) {
                updateProfile(auth.currentUser, {
                    displayName: setDisplayName
                })
                handleRedirectToOrBack();
            }
        })
            .catch((error) => {
                console.error(error);
            })
    }

    const signUp = async (event) => {
        event.preventDefault();
        register(email, password)
            .then(() => {
                setDisplayNameOnEmailRegister();
            })
            .catch((error) => {
                const errorMessage = error.message;
                setSubmitError(errorMessage);
            })
    }

    // const signUp = (event) => {
    //     event.preventDefault();
    //
    //     try {
    //         const user = register(email, password)
    //         if (user) {
    //             handleRedirectToOrBack();
    //         }
    //     }
    //     catch (error) {
    //         console.error(error);
    //         setSubmitError(error.message)
    //     }
    // }


    return (
        <AuthContextProvider>
            <form
                onKeyUp={formValidationCheck}
            >
                <fieldset>
                    <label className="email-label" htmlFor="email-adress">
                        <input
                            className="email-input"
                            type="text"
                            id="first-name"
                            placeholder="Voornaam"
                            value={firstname}
                            onChange={(event) => setFirstName(event.target.value)}
                        />
                        <span className="text-danger">{emailError}</span>
                    </label>
                </fieldset>

                <fieldset>
                    <label className="email-label" htmlFor="email-adress">
                        <input
                            className="email-input"
                            type="text"
                            id="lastname"
                            placeholder="Achternaam"
                            value={lastname}
                            onChange={(event) => setLastName(event.target.value)}
                        />
                        <span className="text-danger">{emailError}</span>
                    </label>
                </fieldset>

                <fieldset>
                    <label className="email-label" htmlFor="email-adress">
                        <input
                            className="email-input"
                            type="text"
                            id="email-adress"
                            placeholder="Email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            onBlur={(event => emailValidation(event))}
                            onFocus={() => setEmailError('')}
                        />
                        <span className="text-danger">{emailError}</span>
                    </label>
                </fieldset>

                <fieldset>
                    <label className="password-label" htmlFor="password">
                        <input
                            className="password-input"
                            type="password"
                            id="password"
                            placeholder="Wachtwoord"
                            value={password}
                            onChange={(event => setPassword(event.target.value))}
                            onBlur={(event => passwordValidation(event))}
                            onFocus={() => setPasswordError('')}
                        />
                        <span className="text-danger">{passwordError}</span>
                    </label>
                </fieldset>

                <fieldset>
                    <label className="password-confirmation-label" htmlFor="password">
                        <input
                            className="password-input"
                            type="password"
                            id="password"
                            placeholder="Wachtwoord bevestigen"
                            value={passwordConfirmation}
                            onChange={(event => setPasswordConfirmation(event.target.value))}
                            onBlur={(event => canConfirmPassword(event))}

                            onFocus={() => setConfirmationError('')}
                        />
                        <span className="text-danger">{confirmationError}</span>
                    </label>
                </fieldset>

                <section className="submit-register">
                    <section className="email-signup-button-container">
                        <button
                            onClick={signUp}
                            className="email-signup-button"
                            disabled={disabled}>
                            Creëer een account
                        </button>
                    </section>
                    <span className="text-danger">{submitError}</span>
                </section>
            </form>
        </AuthContextProvider>
    );
}

export default EmailRegisterForm;
