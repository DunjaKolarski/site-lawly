import "./ConsultantProfilePackage.css";
import { useState } from "react";
import {
  bookingPackages,
  packageFeatures,
  applicationPackageTiers,
} from "../booking/bookingPackage";
import type { BookingPackage } from "../booking/bookingPackage";

type ConsultantProfilePackageProps = {
  onSeeTimes: (selectedPackage: BookingPackage) => void;
  collapsibleDescriptions?: boolean;
};

function ConsultantProfilePackage({
  onSeeTimes,
  collapsibleDescriptions = false,
}: ConsultantProfilePackageProps) {
  const [selectedTier, setSelectedTier] = useState(applicationPackageTiers[0]);
  const [expandedPackages, setExpandedPackages] = useState<string[]>([]);

  function handleSeeTimes(item: BookingPackage) {
    if (item.id === "full-application") {
      onSeeTimes({
        ...item,
        name: `${item.name} — ${selectedTier.name}`,
        price: selectedTier.price,
      });
    } else {
      onSeeTimes(item);
    }
  }

  return (
    <div className="consultant-profile-package">
      {bookingPackages.map((item, index) => (
        <div className="consultant-profile-package-card" key={item.id}>
          <span className="consultant-profile-package-label">
            Package #{index + 1}
          </span>

          <div className="consultant-profile-package-content">
            <h2>{item.name}</h2>

            {(item.id === "full-application" ||
              item.id === "application-review") && (
              <p className="consultant-profile-package-restriction">
                <i className="bi bi-gem" aria-hidden="true"></i>
                Only available with Professionals &amp; Former AdComms
              </p>
            )}

            <p>What's included:</p>

            <ul className="consultant-profile-package-features">
              {packageFeatures
                .slice(
                  0,
                  collapsibleDescriptions && !expandedPackages.includes(item.id)
                    ? 2
                    : item.id === "personal-statement"
                      ? 7
                      : 8,
                )
                .map((feature) => (
                  <li key={feature}>
                    <i
                      className="bi bi-check-circle-fill"
                      aria-hidden="true"
                    ></i>
                    <span>{feature}</span>
                  </li>
                ))}
            </ul>
            {collapsibleDescriptions && (
              <button
                type="button"
                className="consultant-profile-package-toggle"
                aria-expanded={expandedPackages.includes(item.id)}
                onClick={() => {
                  setExpandedPackages((previous) =>
                    previous.includes(item.id)
                      ? previous.filter((id) => id !== item.id)
                      : [...previous, item.id],
                  );
                }}
              >
                {expandedPackages.includes(item.id) ? "See Less" : "See More"}
              </button>
            )}
            {item.id !== "full-application" && (
              <p className="consultant-profile-package-time">
                Consulting Time X+ Hrs
              </p>
            )}

            {item.id === "full-application" ? (
              <fieldset className="consultant-profile-package-tiers">
                <legend>Select Package Tier</legend>

                <div className="consultant-profile-package-tier-options">
                  {applicationPackageTiers.map((tier) => (
                    <label
                      className="consultant-profile-package-tier"
                      key={tier.id}
                    >
                      <input
                        type="radio"
                        name="application-package-tier"
                        value={tier.id}
                        checked={selectedTier.id === tier.id}
                        onChange={() => setSelectedTier(tier)}
                      />

                      <span className="consultant-profile-package-tier-content">
                        <span className="consultant-profile-package-tier-heading">
                          <strong>{tier.name}</strong>
                          <span>({tier.hours})</span>
                        </span>

                        <span className="consultant-profile-package-tier-prices">
                          <span>${tier.price.toLocaleString("en-US")}</span>
                          <del>
                            ${tier.originalPrice.toLocaleString("en-US")}
                          </del>
                          <span className="consultant-profile-package-tier-saving">
                            Save $
                            {(tier.originalPrice - tier.price).toLocaleString(
                              "en-US",
                            )}
                          </span>
                        </span>
                      </span>
                    </label>
                  ))}
                </div>
              </fieldset>
            ) : (
              <p>
                <strong>${item.price.toLocaleString("en-US")}</strong>
              </p>
            )}

            <div className="consultant-profile-package-actions">
              <button
                type="button"
                className="consultant-profile-package-calendar"
                aria-label={`See available times for ${item.name}`}
                onClick={() => handleSeeTimes(item)}
              >
                <i className="bi bi-calendar-week" aria-hidden="true"></i>
              </button>

              <button
                type="button"
                className="primary-button"
                onClick={() => handleSeeTimes(item)}
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
    </div>
  );
}

export default ConsultantProfilePackage;
