import React, {useState} from 'react';
import {FaSpinner} from "react-icons/fa";
import {useAuth} from "../../../../../contexts/AuthContext";
import { deleteUser } from 'firebase/auth';
import "../MyAccountButtons.scss";
import {useHistory} from "react-router";

function DeleteAccountButton(props) {

    const [loading, isLoading] = useState(false);
    const [disabled, setDisabled] = useState(true);
    const [succesMessage, setSuccesMessage] = useState('');
    const auth = useAuth();
    const history = useHistory();

    const confirmDeleteUser = (event) => {
        event.preventDefault();
        const userConfirmation = prompt("Weet u het zeker?")
            if (userConfirmation === "yes") {
                deleteUser(auth.currentUser)
                    .finally(
                        history.push("/")
                    )
            }
            else {
                return false;
            }
    }

    return (
        <>
            <section className="succes-message">{succesMessage}</section>
            <section className="change-credentials-button-container">
                <button className="change-credentials-button"
                        disabled={!disabled}
                        onClick={confirmDeleteUser}
                >
                    {loading && (
                        <FaSpinner className="loading-spinner"/>
                    )}
                        Account verwijderen
                </button>
            </section>
        </>
    );
}

export default DeleteAccountButton;