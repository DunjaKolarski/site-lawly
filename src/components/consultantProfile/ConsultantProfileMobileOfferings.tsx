import "./ConsultantProfileMobileOfferings.css";
import ConsultantProfileStrategy from "./ConsultantProfileStrategy";
import ConsultantProfileConsulting from "./ConsultantProfileConsulting";
import ConsultantProfilePackage from "./ConsultantProfilePackage";
import type { BookingPackage } from "../booking/bookingPackage";

type ConsultantProfileMobileOfferingsProps = {
  onBack: () => void;
  onStrategy: () => void;
  onConsulting: () => void;
  onPackage: (selectedPackage: BookingPackage) => void;
};

function ConsultantProfileMobileOfferings({
  onBack,
  onStrategy,
  onConsulting,
  onPackage,
}: ConsultantProfileMobileOfferingsProps) {
  return (
    <section className="consultant-profile-mobile-offerings">
      <button
        type="button"
        className="consultant-profile-mobile-offerings-back"
        aria-label="Back to profile"
        onClick={onBack}
      >
        <i className="bi bi-chevron-left" aria-hidden="true"></i>
      </button>

      <div className="consultant-profile-mobile-offerings-list">
        <ConsultantProfileStrategy onSeeTimes={onStrategy} />
        <ConsultantProfileConsulting onSeeTimes={onConsulting} />
        <ConsultantProfilePackage
          onSeeTimes={onPackage}
          collapsibleDescriptions
        />
      </div>
    </section>
  );
}

export default ConsultantProfileMobileOfferings;
