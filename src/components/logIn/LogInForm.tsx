import "./LogInForm.css";
import { Link } from "react-router-dom";

function LogInForm() {
  return (
    <section className="login">
      <div className="login-heading">
        <h1>Log In</h1>
        <Link to="/register">Sign up as an applicant</Link>
      </div>
      <form className="login-form">
        <div className="login-field">
          <label htmlFor="login-email">Email</label>
          <input id="login-email" type="email" placeholder="Email" />
        </div>
        <div className="login-field">
          <label htmlFor="login-password">Password</label>
          <input id="login-password" type="password" placeholder="Password" />
        </div>
        <Link className="login-forgot-password" to="/forgot-password">
          Forgot your password?
        </Link>
        <label className="login-remember">
          <input type="checkbox" defaultChecked />
          Remember me
        </label>
        <button type="button">Log in</button>
      </form>
      <p className="login-terms">
        By clicking Log in, you agree to the website{" "}
        <Link to="/terms">terms & conditions</Link> and our{" "}
        <Link to="/privacy">privacy policy</Link>
      </p>
    </section>
  );
}

export default LogInForm;
