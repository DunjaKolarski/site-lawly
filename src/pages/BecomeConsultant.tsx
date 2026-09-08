import Header from "../components/layout/Header";
import BecomeConsultantHero from "../components/becomeConsultant/BecomeConsultantHero";
import BecomeConsultantBeYourOwnBoss from "../components/becomeConsultant/BecomeConsultantBeYourOwnBoss";
import BecomeConsultantGrowingNetwork from "../components/becomeConsultant/BecomeConsultantGrowingNetwork";
import Footer from "../components/layout/Footer";

function BecomeConsultant() {
  return (
    <>
      <Header />

      <main>
        <BecomeConsultantHero />
        <BecomeConsultantBeYourOwnBoss />
        <BecomeConsultantGrowingNetwork />
      </main>

      <Footer />
    </>
  );
}

export default BecomeConsultant;
