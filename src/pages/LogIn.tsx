import Header from "../components/layout/Header";
import LogInForm from "../components/logIn/LogInForm";
import Footer from "../components/layout/Footer";

function LogIn() {
  return (
    <>
      <Header />

      <main>
        <LogInForm />
      </main>

      <Footer />
    </>
  );
}

export default LogIn;
