import { useState } from "react";
import Header from "../components/layout/Header";
import ForgotPasswordStepOne from "../components/forgotPassword/ForgotPasswordStepOne";
import ForgotPasswordStepTwo from "../components/forgotPassword/ForgotPasswordStepTwo";
import Footer from "../components/layout/Footer";

function ForgotPassword() {
  const [step, setStep] = useState(1);

  return (
    <>
      <Header />

      <main>
        {step === 1 ? (
          <ForgotPasswordStepOne onNext={() => setStep(2)} />
        ) : (
          <ForgotPasswordStepTwo onBack={() => setStep(1)} />
        )}
      </main>

      <Footer />
    </>
  );
}

export default ForgotPassword;
