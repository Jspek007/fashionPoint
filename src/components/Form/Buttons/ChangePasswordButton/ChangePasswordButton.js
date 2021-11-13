import React, {useState} from 'react';
import "./ChangePasswordButton.scss";
import {useAuth} from "../../../../contexts/AuthContext";
import {FaSpinner} from "react-icons/fa";
import {updatePassword} from "firebase/auth";

function ChangePasswordButton({newPasswordValue}) {

    const [loading, isLoading] = useState(false);
    const [disabled, setDisabled] = useState(true);
    const [succesMessage, setSuccesMessage] = useState('');
    const auth = useAuth();

    const onSubmitChangePassword = (event) => {
        event.preventDefault();
        isLoading(true);
        updatePassword(auth.currentUser, newPasswordValue)
            .then(() => {
                setSuccesMessage("Uw wachtwoord is gewijzigd")
                isLoading(false);
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
                isLoading(false);
            })
    }

    return (
        <>
            <section className="succes-message">{succesMessage}</section>
            <section className="change-credentials-button-container">
                <button className="change-credentials-button"
                        onClick={onSubmitChangePassword}
                        disabled={!disabled}>
                    {loading && (
                        <FaSpinner className="loading-spinner"/>
                    )}
                    {loading && <span>Verwerken...</span>}
                    {!loading && <span>Wachtwoord wijzigen</span>}

                </button>
            </section>
        </>
    );
}

export default ChangePasswordButton;