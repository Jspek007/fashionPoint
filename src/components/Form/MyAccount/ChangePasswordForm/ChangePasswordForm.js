import React, {useEffect, useState} from 'react';
import FunctionalButton from "../../Buttons/FunctionalButton/FunctionalButton";
import {useAuth} from "../../../../contexts/AuthContext";
import {updatePassword, reauthenticateWithCredential} from "firebase/auth";
import {FaSpinner} from "react-icons/fa";
import {firebaseErrors} from "../../../../utils/firebaseErrors";

function ChangePasswordForm() {
    const [newPassword, setNewPassword] = useState('');
    const [loading, isLoading] = useState(false);
    const [succesMessage, setSuccesMessage] = useState('');
    const [error, setError] = useState('');
    const [disabled, isDisabled] = useState(true);

    const auth = useAuth();

    const formValidation = () => {
        if (!newPassword) {
            isDisabled(true);
        } else {
            isDisabled(false);
        }
    }

    useEffect(() => {
        formValidation();
    })

    const handleNewPasswordChange = (event) => {
        setNewPassword(event.target.value);
        formValidation();
    }

    const changePassword = async (event) => {
        event.preventDefault();
        isLoading(true);
        updatePassword(auth.currentUser, newPassword)
            .then(() => {
                setSuccesMessage("Uw wachtwoord is aangepast!")
                isLoading(false);
                console.log(succesMessage);
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
                    <input className="change-password-input" type="password" name="new-password"
                           placeholder="Nieuw wachtwoord"
                           onChange={handleNewPasswordChange}
                           autoComplete={"new-password"}
                    />
                </form>
                <section className="error-container">
                <span className="error-message">
                    {error}
                </span>
                </section>
                <section className="button-container">
                    <FunctionalButton clickHandler={changePassword}
                                      disabled={disabled}
                    >
                        {loading && (
                            <FaSpinner className="loading-spinner"/>
                        )}
                        {loading && <span>Verwerken...</span>}
                        {!loading && <span>Wachtwoord wijzigen</span>}
                    </FunctionalButton>
                </section>
            </section>
        </section>
    );
}

export default ChangePasswordForm;