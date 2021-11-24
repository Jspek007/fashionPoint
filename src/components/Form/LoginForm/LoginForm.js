import "./LoginForm.scss";
import FunctionalButton from "../Buttons/MyAccountButton/FunctionalButton";
import {useState} from "react";
import {useAuth} from "../../../contexts/AuthContext";
import {useHistory, useLocation} from "react-router";
import {HandleRedirectToOrBack} from "../../../helpers/HandleRedirectToOrBack/HandleRedirectToOrBack";
import {firebaseErrors} from "../../../utils/firebaseErrors";
import {FaSpinner} from "react-icons/fa";

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {login} = useAuth();
    const history = useHistory();
    const location = useLocation();
    const [loading, isLoading] = useState(false);
    const [error, setError] = useState('');

    const onSubmitLogin = async (event) => {
        event.preventDefault();
        isLoading(true);
        login(email, password)
            .then(() => {
                HandleRedirectToOrBack({ history, location })
            })
            .catch((error) => {
                isLoading(false);
                console.log(error.code);
                setError(firebaseErrors[error.code]);
            })
    }

  return (
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

      <fieldset>
        <label className="password-label" htmlFor="password">
          <input
            className="password-input"
            type="password"
            id="password"
            placeholder="Wachtwoord"
            value={password}
            onChange={(event => setPassword(event.target.value))}
          />
        </label>
      </fieldset>

      <section className="submit-login">
          <FunctionalButton clickHandler={onSubmitLogin}>
              {loading && (
                  <FaSpinner className="loading-spinner" />
              )}
              {loading && <span>U wordt ingelogd</span>}
              {!loading && <span>Inloggen</span>}
          </FunctionalButton>
      </section>
        <section className="error-container">
            <span className="error-message">
                {error}
            </span>
        </section>
    </form>
  );
}

export default LoginForm;
