import React, {useState} from 'react';
import "./ChangeEmailButton.scss";
import {useAuth} from "../../../../contexts/AuthContext";
import {updateEmail} from "firebase/auth";
import {FaSpinner} from "react-icons/fa";

function ChangeEmailButton({newEmailValue}) {

    const [loading, isLoading] = useState(false);

    const auth = useAuth();


    const onSubmitChangeEmail = (event) => {
        event.preventDefault();
        isLoading(true);
        updateEmail(auth.currentUser, newEmailValue)
            .then(() => {
                // window.location.reload(true);
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            })
    }

    return (
        <section className="change-email-button-container">
            <button className="change-email-button"
                    onClick={onSubmitChangeEmail}
                    disabled={loading}>
                {loading && (
                    <FaSpinner className="loading-spinner" />
                )}
                {loading && <span>Email wordt gewijzigd</span>}
                {!loading && <span>Email wijzigen</span>}
            </button>
        </section>
    );
}

export default ChangeEmailButton;