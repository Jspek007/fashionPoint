import React, {useState} from 'react';
import FunctionalButton from "../../Buttons/FunctionalButton/FunctionalButton";
import {useAuth} from "../../../../contexts/AuthContext";
import {useHistory} from "react-router";
import {deleteUser} from "firebase/auth";
import {FaSpinner} from "react-icons/fa";

function DeleteAccountForm() {

    const [loading, isLoading] = useState(false);
    const auth = useAuth();
    const history = useHistory();

    const confirmDeleteUser = (event) => {
        event.preventDefault();
        const userConfirmation = prompt("Weet u het zeker? Ja om verwijdering te bevestigen.")
        if (userConfirmation === "Ja" || userConfirmation === "ja") {
            isLoading(true);
            deleteUser(auth.currentUser)
                .finally(
                    history.push("/")
                )
        } else {
            isLoading(false);
            return false;
        }
    }

    return (
        <section className="change-credentials-container">
            <section className="change-credentials-form">
                <form>
                    <p className="my-account-item-title">Weet u zeker dat u uw account wilt verwijderen?</p>
                    <section className="button-container">
                        <FunctionalButton clickHandler={confirmDeleteUser}>
                            {loading && (
                                <FaSpinner className="loading-spinner"/>
                            )}
                            {loading && <span>Uw account wordt verwijderd</span>}
                            {!loading && <span>Account verwijderen</span>}
                        </FunctionalButton>
                    </section>
                </form>
            </section>
        </section>
    );
}

export default DeleteAccountForm;