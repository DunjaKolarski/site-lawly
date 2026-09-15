import "./ForgotPasswordStepTwo.css";

type ForgotPasswordStepTwoProps = {
  onBack: () => void;
};

function ForgotPasswordStepTwo({ onBack }: ForgotPasswordStepTwoProps) {
  return (
    <section className="forgot-password-step-two">
      <div className="forgot-password-message">
        <h1>Check your email</h1>
        <p>
          It may take up to 10 minutes to arrive. If you don't receive
          instructions shortly, please check your email's spam or junk folder.
        </p>
        <div className="forgot-password-resend">
          <p>If this does not work, try re-sending your request.</p>
          <button type="button" onClick={onBack}>
            Re-send request
          </button>
        </div>
      </div>
    </section>
  );
}

export default ForgotPasswordStepTwo;
