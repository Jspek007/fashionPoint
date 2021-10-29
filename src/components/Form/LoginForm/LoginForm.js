import "./LoginForm.scss";
import SubmitLoginButton from "../Buttons/UserControlButtons/SubmitLoginButton";
import {useState} from "react";

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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
        <SubmitLoginButton email={email} password={password} />
      </section>
    </form>
  );
}

export default LoginForm;
