import React, {useState} from 'react';
import "./ForgotPasswordPage.scss";
import ResetPasswordButton from "../../components/Form/Buttons/ResetPasswordButton";

function ForgotPasswordPage() {
    const [email, setEmail] = useState('');

    return (
        <section className="forgotten-password-container">
            <section className="forgotten-password-header">
                <h1 className="welcome-message">Klein beetje paniek?</h1>
                <h5 className="secondary-text">Geen stress, wij helpen je!</h5>
            </section>

            <section className="forgotten-password-instructions">
                <h5 className="secondary-text instruction">Geef ons je email</h5>
                <h5 className="secondary-text instruction">Wij geven een mailtje terug</h5>
            </section>

            <section className="forgotten-password-input-container">
                <form>
                    <fieldset>
                        <label className="email-label" htmlFor="email-adress">
                            <input
                                className="email-input"
                                type="text"
                                id="email-adress"
                                placeholder="Email"
                                value={email}
                                onChange={(event => setEmail(event.target.value))}
                            />
                        </label>
                    </fieldset>
                </form>
                <ResetPasswordButton email={email}/>
            </section>

        </section>
    );
}

export default ForgotPasswordPage;