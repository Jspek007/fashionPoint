import React, {useEffect, useState} from 'react';
import {useAuth} from "../../../../contexts/AuthContext";
import {updateEmail} from "firebase/auth";
import {FaSpinner} from "react-icons/fa";
import FunctionalButton from "../../Buttons/FunctionalButton/FunctionalButton";
import {firebaseErrors} from "../../../../utils/firebaseErrors";
import InputField from "../FormComponents/InputField";
import MyAccountForm from "../FormComponents/MyAccountForm";
import FormButtonContainer from "../FormComponents/FormButtonContainer";
import FormErrorContainer from "../FormComponents/FormErrorContainer/FormErrorContainer";

function ChangeEmailForm() {

    const auth = useAuth();
    const [currentEmail, setCurrentEmail] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [loading, isLoading] = useState(false);
    const [disabled, isDisabled] = useState(true);
    const [error, setError] = useState('');

    const checkCurrentEmail = () => {
        if (auth.currentUser.email === null) {
            return "Huidig email-address"
        }
        return auth.currentUser.email;
    }

    const validateFormOnChange = () => {
        if (currentEmail === "" || newEmail === "") {
            isDisabled(true)
        } else {
            isDisabled(false);
        }
    }

    useEffect(() => {
        validateFormOnChange();
    })

    const handleCurrentEmailChange = (event) => {
        setCurrentEmail(event.target.value);
        validateFormOnChange();
    }

    const handleNewEmailChange = (event) => {
        setNewEmail(event.target.value);
        validateFormOnChange();
    }

    const changeCurrentEmail = (event) => {
        event.preventDefault();
        isLoading(true);
        updateEmail(auth.currentUser, newEmail)
            .then(() => {
                isLoading(false);
                window.location.reload();
            })
            .catch((error) => {
                setError(firebaseErrors[error.code]);
                isLoading(false);
            })
    }

    return (
        <MyAccountForm>
            <InputField
                inputType="text"
                idValue="new-email"
                placeholder="Nieuw email-adress"
                eventHandler={handleNewEmailChange}
                formSection="my-account"
            />

            <FormErrorContainer>
                {error}
            </FormErrorContainer>

            <FormButtonContainer>
                <FunctionalButton clickHandler={changeCurrentEmail}
                                  disabled={disabled}>
                    {loading && (
                        <FaSpinner className="loading-spinner"/>
                    )}
                    {loading && <span>Verwerken...</span>}
                    {!loading && <span>Email wijzigen</span>}
                </FunctionalButton>
            </FormButtonContainer>
        </MyAccountForm>
    );
}

export default ChangeEmailForm;