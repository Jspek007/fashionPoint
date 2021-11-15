import React, {useState} from 'react';
import ChangePasswordButton from "../../Buttons/MyAccountButtons/ChangePasswordButton";

function ChangePasswordForm() {
    const [currentPassword, setCurrentPassword ] = useState('');
    const [newPassword, setNewPassword] = useState('');


    return (
        <section className="change-credentials-container">
            <section className="change-credentials-form">
                <p>Wijzig uw wachtwoord: </p>
                <input className="change-password-input" type="password" name="current-password"
                       placeholder="Huidig wachtwoord"
                       onChange={(event => setCurrentPassword(event.target.value))}

                />
                <input className="change-password-input" type="password" name="new-email" placeholder="Nieuw wachtwoord"
                       onChange={(event => setNewPassword(event.target.value))}
                />
            </section>
            <ChangePasswordButton currentPasswordValue={currentPassword} newPasswordValue={newPassword} />
        </section>
    );
}

export default ChangePasswordForm;