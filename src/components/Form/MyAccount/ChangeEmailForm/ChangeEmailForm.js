import React, {useState} from 'react';
import "./ChangeEmailForm.scss";
import ChangeEmailButton from "../../Buttons/ChangeEmailButton";
import {useAuth} from "../../../../contexts/AuthContext";

function ChangeEmailForm() {

    const [currentEmail, setCurrentEmail] = useState('');
    const [newEmail, setNewEmail] = useState('');

    const auth = useAuth();
    const currentUserEmail = auth.currentUser.email;

    return (
        <section className="change-email-container">
            <section className="change-email-form">
                <p>Wijzig uw email: </p>
                <input className="change-email-input" type="text" name="current-email"
                        onChange={(event => setCurrentEmail(event.target.value))}
                        value={currentUserEmail}
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