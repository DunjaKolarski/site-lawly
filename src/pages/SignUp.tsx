import Header from "../components/layout/Header";
import SignUpForm from "../components/signUp/SignUpForm";
import Footer from "../components/layout/Footer";

function SignUp() {
  return (
    <>
      <Header />

      <main>
        <SignUpForm />
      </main>

      <Footer />
    </>
  );
}

export default SignUp;
