import React, {useState} from 'react';
import ChangeEmailButton from "../../Buttons/MyAccountButtons/ChangeEmailButton";
import {useAuth} from "../../../../contexts/AuthContext";

function ChangeEmailForm() {

    const [currentEmail, setCurrentEmail] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const auth = useAuth();

    const checkCurrentEmail = () => {
        if (auth.currentUser.email === null) {
            return "Huidig email-address"
        }
        return auth.currentUser.email;
    }

    return (
        <section className="change-credentials-container">
            <section className="change-credentials-form">
                <p>Wijzig uw email: </p>
                <input className="change-email-input" type="text" name="current-email"
                        onChange={(event => setCurrentEmail(event.target.value))}
                        placeholder={checkCurrentEmail()}
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