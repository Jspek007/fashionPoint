import React, { useEffect, useState } from "react";
import { useAuth } from "../../../../contexts/AuthContext";
import { FaSpinner } from "react-icons/fa";
import FunctionalButton from "../../Buttons/FunctionalButton/FunctionalButton";
import { firebaseErrors } from "../../../../utils/firebaseErrors";
import InputField from "../FormComponents/InputField";
import MyAccountForm from "../FormComponents/MyAccountForm";
import FormButtonContainer from "../FormComponents/FormButtonContainer";
import FormErrorContainer from "../FormComponents/FormErrorContainer/FormErrorContainer";
import Modal from "../../../common/Modal/Modal";
import {
  reauthenticateWithCredential,
  EmailAuthProvider,
  updateEmail,
} from "firebase/auth";

function ChangeEmailForm() {
  const auth = useAuth();
  const user = auth.currentUser;
  const [newEmail, setNewEmail] = useState("");
  const [loading, isLoading] = useState(false);
  const [disabled, isDisabled] = useState(true);
  const [error, setError] = useState("");
  const [succesMessage, setSuccesMessage] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [password, setPassword] = useState("");

  const validateFormOnChange = () => {
    if (newEmail === "") {
      isDisabled(true);
    } else {
      isDisabled(false);
    }
  };

  useEffect(() => {
    validateFormOnChange();
  });

  const handleNewEmailChange = (event) => {
    setNewEmail(event.target.value);
    validateFormOnChange();
  };

  const handleChangeEmailEvent = (event) => {
    event.preventDefault();
    isLoading(true);
    changeEmail();
  };

  const confirmReAuthentication = (event) => {
    event.preventDefault();
    // Get the current user credentials and the old password
    const credential = EmailAuthProvider.credential(user.email, password);

    // Give the user credentials with the reauthentication to confirm this
    reauthenticateWithCredential(auth.currentUser, credential)
      .then(() => {
        setModalOpen(false);
        changeEmail();
      })
      .catch((error) => {
        setError(firebaseErrors[error.code]);
        isLoading(false);
        setModalOpen(false);
      });
  };

  const changeEmail = () => {
    updateEmail(user, newEmail)
      .then(() => {
        isLoading(false);
        setError("");
        setSuccesMessage("Uw email is aangepast.");
      })
      .catch((error) => {
        if (error.code === "auth/requires-recent-login") {
          setModalOpen(true);
        } else {
          setSuccesMessage("");
          setError(firebaseErrors[error.code]);
          isLoading(false);
        }
      });
  };

  return (
    <MyAccountForm>
      <InputField
        inputType="text"
        idValue="new-email"
        placeholder="Nieuw email-adress"
        eventHandler={handleNewEmailChange}
        formSection="my-account"
      />

      {succesMessage && <span className="succes-message">{succesMessage}</span>}
      <FormErrorContainer>{error}</FormErrorContainer>

      <FormButtonContainer>
        <FunctionalButton
          clickHandler={handleChangeEmailEvent}
          disabled={disabled}
        >
          {loading && <FaSpinner className="loading-spinner" />}
          {loading && <span>Verwerken...</span>}
          {!loading && <span>Email wijzigen</span>}
        </FunctionalButton>
      </FormButtonContainer>
      {modalOpen && (
        <Modal modalBody="U dient opnieuw in te loggen om uw gegevens te wijzigen">
          <section className="reauthentication-modal">
            <span>Geef uw wachtwoord op</span>
            <InputField
              inputType="password"
              placeholder="Uw wachtwoord"
              idValue="confirmPassword"
              eventHandler={(event) => setPassword(event.target.value)}
            />
            <FormErrorContainer>{error}</FormErrorContainer>
            <FunctionalButton clickHandler={confirmReAuthentication} primary>
              <span>Bevestigen</span>
            </FunctionalButton>
          </section>
        </Modal>
      )}
    </MyAccountForm>
  );
}

export default ChangeEmailForm;
