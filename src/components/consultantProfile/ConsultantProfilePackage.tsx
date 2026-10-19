import "./ConsultantProfilePackage.css";
import { bookingPackages, packageFeatures } from "../booking/bookingPackage";
import type { BookingPackage } from "../booking/bookingPackage";

type ConsultantProfilePackageProps = {
  onSeeTimes: (selectedPackage: BookingPackage) => void;
};

function ConsultantProfilePackage({
  onSeeTimes,
}: ConsultantProfilePackageProps) {
  return (
    <div className="consultant-profile-package">
      {bookingPackages.map((item, index) => (
        <div className="consultant-profile-package-card" key={item.id}>
          <span className="consultant-profile-package-label">
            Package #{index + 1}
          </span>

          <div className="consultant-profile-package-content">
            <h2>{item.name}</h2>

            <p>What's included:</p>

            <ul className="consultant-profile-package-features">
              {packageFeatures.map((feature) => (
                <li key={feature}>
                  <i className="bi bi-check-circle-fill" aria-hidden="true"></i>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <p>
              <strong>${item.price.toLocaleString("en-US")}</strong>
            </p>

            <div className="consultant-profile-package-actions">
              <button
                type="button"
                className="consultant-profile-package-calendar"
                aria-label={`See available times for ${item.name}`}
                onClick={() => onSeeTimes(item)}
              >
                <i className="bi bi-calendar-week" aria-hidden="true"></i>
              </button>

              <button
                type="button"
                className="primary-button"
                onClick={() => onSeeTimes(item)}
              >
                See times
              </button>
            </div>

            <p className="consultant-profile-package-refund">
              <i className="bi bi-shield-check" aria-hidden="true"></i>
              Full Refund Guarantee
            </p>
          </div>
        </div>
      ))}

      <button type="button" className="consultant-profile-package-more">
        Scroll to see more
        <i className="bi bi-chevron-down" aria-hidden="true"></i>
      </button>
    </div>
  );
}

export default ConsultantProfilePackage;
