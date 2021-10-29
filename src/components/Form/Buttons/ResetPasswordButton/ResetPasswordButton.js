import React, {useState} from 'react';
import {FiMail} from "react-icons/fi";
import "./ResetPasswordButton.scss";
import {useAuth} from "../../../../contexts/AuthContext";
import {useHistory} from "react-router";

function ResetPasswordButton({email}) {

    const {forgotPassword} = useAuth();
    const [error, setError] = useState('');
    const history = useHistory();

    const submitPasswordResetMail = (event) => {
        event.preventDefault();
        forgotPassword(email)
            .then(() => {
                history.push("/send-successfully");
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            })
    }



    return (
        <section className="reset-button-container">
            <button className="email-login-button email-reset-button"
                    onClick={submitPasswordResetMail}
            >
                <FiMail className="email-button-icon reset-email-icon"/>
                Wachtwoord resetten
            </button>
            <span className="reset-text-danger">{error}</span>
        </section>
    );
}

export default ResetPasswordButton;