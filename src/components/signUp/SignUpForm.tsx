import "./SignUpForm.css";
import { Link } from "react-router-dom";

function SignUpForm() {
  return (
    <section className="signup">
      <div className="signup-heading">
        <h1>Sign up as an applicant</h1>
        <p>
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </div>
      <div className="signup-content">
        <button className="signup-google" type="button">
          <i className="bi bi-google"></i>
          Sign up with Google
        </button>
        <div className="signup-divider">
          <span></span>
          <p>or</p>
          <span></span>
        </div>
        <form className="signup-form">
          <input type="text" placeholder="Full name" aria-label="Full name" />
          <input type="email" placeholder="Email" aria-label="Email" />
          <input type="password" placeholder="Password" aria-label="Password" />
          <label className="signup-remember">
            <input type="checkbox" defaultChecked />
            Remember me
          </label>
          <button type="button">Sign up</button>
        </form>
        <p className="signup-terms">
          By clicking Create Account, you agree to the website{" "}
          <Link to="/terms">terms & conditions</Link> and our{" "}
          <Link to="/privacy">privacy policy</Link>
        </p>
      </div>
    </section>
  );
}

export default SignUpForm;
