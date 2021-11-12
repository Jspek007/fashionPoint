import React from 'react';
import "./ChangeEmailForm.scss";

function ChangeEmailForm() {
    return (
        <section className="change-email-container">
            <section className="change-email-form">
                <p>Wijzig uw email: </p>
                <input className="change-email-input" type="text" name="current-email"
                       placeholder="Huidig email-address"/>
                <input className="change-email-input" type="text" name="new-email" placeholder="Nieuw email-address"/>
                <input className="change-email-input change-email-password-input" type="password" name="password"
                       placeholder="Wachtwoord"/>
            </section>
        </section>
    );
}

export default ChangeEmailForm;