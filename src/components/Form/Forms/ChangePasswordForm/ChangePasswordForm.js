import React, { useEffect, useState } from "react";
import FunctionalButton from "../../Buttons/FunctionalButton/FunctionalButton";
import { useAuth } from "../../../../contexts/AuthContext";
import { updatePassword, reauthenticateWithCredential } from "firebase/auth";
import { FaSpinner } from "react-icons/fa";
import { firebaseErrors } from "../../../../utils/firebaseErrors";
import InputField from "../FormComponents/InputField";
import MyAccountForm from "../FormComponents/MyAccountForm";
import FormErrorContainer from "../FormComponents/FormErrorContainer/FormErrorContainer";
import FormButtonContainer from "../FormComponents/FormButtonContainer";

function ChangePasswordForm() {
  const [newPassword, setNewPassword] = useState("");
  const [loading, isLoading] = useState(false);
  const [succesMessage, setSuccesMessage] = useState("");
  const [error, setError] = useState("");
  const [disabled, isDisabled] = useState(true);

  const auth = useAuth();

  const formValidation = () => {
    if (!newPassword) {
      isDisabled(true);
    } else {
      isDisabled(false);
    }
  };

  useEffect(() => {
    formValidation();
  });

  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value);
    formValidation();
  };

  const changePassword = async (event) => {
    event.preventDefault();
    isLoading(true);
    updatePassword(auth.currentUser, newPassword)
      .then(() => {
        setSuccesMessage("Uw wachtwoord is aangepast!");
        isLoading(false);
        console.log(succesMessage);
      })
      .catch((error) => {
        setError(firebaseErrors[error.code]);
        isLoading(false);
      });
  };

  return (
    <MyAccountForm>
      <InputField
        inputType="password"
        idValue="new-password"
        placeholder="Nieuw wachtwoord"
        eventHandler={handleNewPasswordChange}
        formSection="my-account"
      />

      <FormErrorContainer>{error}</FormErrorContainer>

      <FormButtonContainer>
        <FunctionalButton clickHandler={changePassword} disabled={disabled}>
          {loading && <FaSpinner className="loading-spinner" />}
          {loading && <span>Verwerken...</span>}
          {!loading && <span>Wachtwoord wijzigen</span>}
        </FunctionalButton>
      </FormButtonContainer>
    </MyAccountForm>
  );
}

export default ChangePasswordForm;
