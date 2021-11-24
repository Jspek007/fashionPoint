import React from 'react';
import DeleteAccountButton from "../../Buttons/MyAccountButton/DeleteAccountButton";

function DeleteAccountForm() {
    return (
        <section className="change-credentials-container">
            <section className="change-credentials-form">
                <p>Weet u zeker dat u uw account wilt verwijderen?</p>
            </section>
            <DeleteAccountButton />
        </section>
    );
}

export default DeleteAccountForm;