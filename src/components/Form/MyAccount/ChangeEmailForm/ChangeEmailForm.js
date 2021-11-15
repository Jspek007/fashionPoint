import React, {useState} from 'react';
import ChangeEmailButton from "../../Buttons/MyAccountButtons/ChangeEmailButton";
import {useAuth} from "../../../../contexts/AuthContext";

function ChangeEmailForm() {

    const [currentEmail, setCurrentEmail] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const auth = useAuth();

    return (
        <section className="change-credentials-container">
            <section className="change-credentials-form">
                <p>Wijzig uw email: </p>
                <input className="change-email-input" type="text" name="current-email"
                        onChange={(event => setCurrentEmail(event.target.value))}
                        value={auth.currentUser.email}
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