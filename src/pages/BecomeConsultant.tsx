import Header from "../components/layout/Header";
import BecomeConsultantHero from "../components/becomeConsultant/BecomeConsultantHero";
import BecomeConsultantBeYourOwnBoss from "../components/becomeConsultant/BecomeConsultantBeYourOwnBoss";
import BecomeConsultantGrowingNetwork from "../components/becomeConsultant/BecomeConsultantGrowingNetwork";
import BecomeConsultantToday from "../components/becomeConsultant/BecomeConsultantToday";
import BecomeConsultantFeatures from "../components/becomeConsultant/BecomeConsultantFeatures";
import BecomeConsultantFAQ from "../components/becomeConsultant/BecomeConsultantFAQ";
import BecomeConsultantHelp from "../components/becomeConsultant/BecomeConsultantHelp";
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
        <BecomeConsultantFeatures />
        <BecomeConsultantFAQ />
        <BecomeConsultantHelp />
      </main>

      <Footer />
    </>
  );
}

export default BecomeConsultant;
