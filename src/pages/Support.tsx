import Header from "../components/layout/Header";
import SupportHero from "../components/support/SupportHero";
import SupportQuestions from "../components/support/SupportQuestions";
import Footer from "../components/layout/Footer";

function Support() {
  return (
    <>
      <Header />

      <main>
        <SupportHero />
        <SupportQuestions />
      </main>

      <Footer />
    </>
  );
}

export default Support;
