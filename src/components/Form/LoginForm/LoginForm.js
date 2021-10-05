import "./LoginForm.scss";
import SubmitLoginButton from "../Buttons/SubmitLoginButton";

function LoginForm() {
  return (
    <form>
      <fieldset>
        <label className="email-label" htmlFor="email-adress">
          <input
            className="email-input"
            type="text"
            id="email-adress"
            placeholder="Email"
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
          />
        </label>
      </fieldset>

      <section className="submit-login">
        <SubmitLoginButton />
      </section>
    </form>
  );
}

export default LoginForm;
