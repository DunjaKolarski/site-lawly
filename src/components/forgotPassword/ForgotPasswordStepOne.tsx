import "./ForgotPasswordStepOne.css";

type ForgotPasswordStepOneProps = {
  onNext: () => void;
};

function ForgotPasswordStepOne({ onNext }: ForgotPasswordStepOneProps) {
  return (
    <section className="forgot-password-step-one">
      <div className="forgot-password-content">
        <h1>Forgot your password?</h1>
        <form className="forgot-password-form">
          <div className="forgot-password-field">
            <label htmlFor="forgot-password-email">Email</label>
            <input id="forgot-password-email" type="email" />
          </div>
          <button type="button" onClick={onNext}>
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default ForgotPasswordStepOne;
