import React, {useEffect, useState} from 'react';
import {useAuth} from "../../../../../contexts/AuthContext";
import {updateEmail} from "firebase/auth";
import {FaSpinner} from "react-icons/fa";
import FunctionalButton from "../../../Buttons/FunctionalButton/FunctionalButton";
import {firebaseErrors} from "../../../../../utils/firebaseErrors";

function ChangeEmailForm() {

    const auth = useAuth();
    const [currentEmail, setCurrentEmail] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [loading, isLoading] = useState(false);
    const [disabled, isDisabled] = useState(true);
    const [error, setError] = useState('');

    const checkCurrentEmail = () => {
        if (auth.currentUser.email === null) {
            return "Huidig email-address"
        }
        return auth.currentUser.email;
    }

    const validateFormOnChange = () => {
        if (currentEmail === "" || newEmail === "") {
            isDisabled(true)
        } else {
            isDisabled(false);
        }
    }

    useEffect(() => {
        validateFormOnChange();
    })

    const handleCurrentEmailChange = (event) => {
        setCurrentEmail(event.target.value);
        validateFormOnChange();
    }

    const handleNewEmailChange = (event) => {
        setNewEmail(event.target.value);
        validateFormOnChange();
    }

    const changeCurrentEmail = (event) => {
        event.preventDefault();
        isLoading(true);
        updateEmail(auth.currentUser, newEmail)
            .then(() => {
                isLoading(false);
                window.location.reload();
            })
            .catch((error) => {
                setError(firebaseErrors[error.code]);
                isLoading(false);
            })
    }

    return (
        <section className="change-credentials-container">
            <section className="change-credentials-form">
                <form className="my-account-form">
                    <input className="change-email-input" type="text" name="current-email"
                           onChange={handleCurrentEmailChange}
                           placeholder={checkCurrentEmail()}
                    />
                    <input className="change-email-input" type="text" name="new-email" placeholder="Nieuw email-address"
                           onChange={handleNewEmailChange}
                    />
                    <section className="error-container">
                        <span className="error-message">
                            {error}
                        </span>
                    </section>
                    <section className="button-container">
                        <FunctionalButton clickHandler={changeCurrentEmail}
                                          disabled={disabled}
                        >
                            {loading && (
                                <FaSpinner className="loading-spinner"/>
                            )}
                            {loading && <span>Verwerken...</span>}
                            {!loading && <span>Email wijzigen</span>}
                        </FunctionalButton>
                    </section>
                </form>
            </section>
        </section>
    );
}

export default ChangeEmailForm;