import Header from "../components/layout/Header";
import BecomeConsultantHero from "../components/becomeConsultant/BecomeConsultantHero";
import BecomeConsultantBeYourOwnBoss from "../components/becomeConsultant/BecomeConsultantBeYourOwnBoss";
import BecomeConsultantGrowingNetwork from "../components/becomeConsultant/BecomeConsultantGrowingNetwork";
import BecomeConsultantToday from "../components/becomeConsultant/BecomeConsultantToday";
import Footer from "../components/layout/Footer";

function BecomeConsultant() {
  return (
    <>
      <Header />

      <main>
        <BecomeConsultantHero />
        <BecomeConsultantBeYourOwnBoss />
        <BecomeConsultantGrowingNetwork />
        <BecomeConsultantToday />
      </main>

      <Footer />
    </>
  );
}

export default BecomeConsultant;
