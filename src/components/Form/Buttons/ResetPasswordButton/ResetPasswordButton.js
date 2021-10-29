import React, {useState} from 'react';
import {FiMail} from "react-icons/fi";
import "./ResetPasswordButton.scss";
import {useAuth} from "../../../../contexts/AuthContext";

function ResetPasswordButton({email}) {

    const {forgotPassword} = useAuth();
    const [notice, setNotice] = useState('');
    const [disabled, setDisabled] = useState(true);

    const submitPasswordResetMail = (event) => {
        event.preventDefault();
        forgotPassword(email)
            .then(() => {
                setNotice("Uw email is onderweg.")
            })
            .catch((error) => {
                const errorMessage = error.message;
                setNotice(errorMessage);
            })
    }



    return (
        <section className="reset-button-container">
            <button className="email-login-button email-reset-button"
                    onClick={submitPasswordResetMail}
                    // disabled={disabled}
            >
                <FiMail className="email-button-icon reset-email-icon"/>
                Wachtwoord resetten
            </button>
            <span className="reset-text-danger">{notice}</span>
        </section>
    );
}

export default ResetPasswordButton;