import React, {useState} from 'react';
import {useAuth} from "../../../../../contexts/AuthContext";
import {updateEmail} from "firebase/auth";
import {FaSpinner} from "react-icons/fa";
import "../FunctionalButton.scss";
import {useHistory} from "react-router";

function ChangeEmailButton({newEmailValue}) {

    const [loading, isLoading] = useState(false);

    const auth = useAuth();
    const history = useHistory();


    const onSubmitChangeEmail = (event) => {
        event.preventDefault();
        isLoading(true);
        updateEmail(auth.currentUser, newEmailValue)
            .then(() => {
                isLoading(false);
                window.location.reload();
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            })
    }

    return (
        <section className="change-credentials-button-container">
            <button className="change-credentials-button"
                    onClick={onSubmitChangeEmail}
                    disabled={loading}>
                {loading && (
                    <FaSpinner className="loading-spinner" />
                )}
                {loading && <span>Verwerken...</span>}
                {!loading && <span>Email wijzigen</span>}
            </button>
        </section>
    );
}

export default ChangeEmailButton;