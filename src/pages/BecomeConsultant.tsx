import Header from "../components/layout/Header";
import BecomeConsultantHero from "../components/becomeConsultant/BecomeConsultantHero";
import BecomeConsultantBeYourOwnBoss from "../components/becomeConsultant/BecomeConsultantBeYourOwnBoss";
import Footer from "../components/layout/Footer";

function BecomeConsultant() {
  return (
    <>
      <Header />

      <main>
        <BecomeConsultantHero />
        <BecomeConsultantBeYourOwnBoss />
      </main>

      <Footer />
    </>
  );
}

export default BecomeConsultant;
