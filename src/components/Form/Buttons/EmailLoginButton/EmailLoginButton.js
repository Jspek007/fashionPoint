import React from 'react'
import "./EmailLoginButton.scss";
import { FiMail } from 'react-icons/fi'

function EmailLoginButton() {
    return (
        <button className="email-login-button">
            <FiMail className="email-button-icon" />
            Email
        </button>
    )
}

export default EmailLoginButton
