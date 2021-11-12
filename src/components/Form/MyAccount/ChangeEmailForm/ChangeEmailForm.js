import React, {useState} from 'react';
import "./ChangeEmailForm.scss";
import ChangeEmailButton from "../../Buttons/ChangeEmailButton";

function ChangeEmailForm() {

    const [currentEmail, setCurrentEmail] = useState('');
    const [newEmail, setNewEmail] = useState('');

    return (
        <section className="change-email-container">
            <section className="change-email-form">
                <p>Wijzig uw email: </p>
                <input className="change-email-input" type="text" name="current-email"
                       placeholder="Huidig email-address"
                        onChange={(event => setCurrentEmail(event.target.value))}
                />
                <input className="change-email-input" type="text" name="new-email" placeholder="Nieuw email-address"
                        onChange={(event => setNewEmail(event.target.value))}
                />
            </section>
            <ChangeEmailButton currentEmailValue={currentEmail} newEmailValue={newEmail} />
        </section>
    );
}

export default ChangeEmailForm;