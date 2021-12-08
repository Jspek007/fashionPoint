import React, {useState} from "react";
import {useAuth} from "../../../../contexts/AuthContext";
import {firebaseErrors} from "../../../../utils/firebaseErrors";
import FunctionalButton from "../../Buttons/FunctionalButton/FunctionalButton";
import {FaSpinner} from "react-icons/fa";
import InputField from "../FormComponents/InputField";
import {HandleRedirectToOrBack} from "../../../../helpers/HandleRedirectToOrBack/HandleRedirectToOrBack";
import {useHistory, useLocation} from "react-router";

function EmailRegisterForm() {

    const {register} = useAuth();
    const history = useHistory();
    const location = useLocation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, isLoading] = useState(false);
    const [error, setError] = useState('');

    const submitRegister = (event) => {
        isLoading(true);
        event.preventDefault();
        register(email, password)
            .then(() => {
                HandleRedirectToOrBack({history, location});
                isLoading(false);
            })
            .catch((error) => {
                setError(firebaseErrors[error.code]);
                isLoading(false);
            })
    }


return (
    <form>
        <InputField
            labelName="email"
            inputType="text"
            idValue="email-adress"
            placeholder="Email"
            value={email}
            eventHandler={(event) => setEmail(event.target.value)}
        />
        <InputField
            labelName="password"
            inputType="password"
            idValue="password"
            placeholder="Wachtwoord"
            value={password}
            eventHandler={(event) => setPassword(event.target.value)}
        />

        {error && (
            <section className="error-container">
                            <span className="error-message">
                                {error}
                            </span>
            </section>
        )}

        <section className="button-container">
            <FunctionalButton clickHandler={submitRegister}>
                {loading && (
                    <FaSpinner className="loading-spinner"/>
                )}
                {loading && <span>Verwerken...</span>}
                {!loading && <span>Registreer</span>}
            </FunctionalButton>
        </section>
    </form>
);
}

export default EmailRegisterForm;
