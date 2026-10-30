import type { SelectedSlot } from "../booking/BookingSession";
import { getSessionTimeRange } from "../booking/bookingTime";
import { getConsultingPrice } from "../booking/bookingPrice";
import {
  bookingPackages,
  applicationPackageTiers,
} from "../booking/bookingPackage";
import type { BookingPackage } from "../booking/bookingPackage";
import { useRef } from "react";

type ScheduleSelectionProps = {
  selectedSlot: SelectedSlot;
  sessionDuration: number;
  selectedHours: number;
  onSelectHours: (hours: number) => void;
  onBack: () => void;
  onNext: () => void;
  purchaseType: "hourly" | "package";
  onPurchaseTypeChange: (type: "hourly" | "package") => void;
  selectedPackage: BookingPackage;
  onSelectPackage: (selectedPackage: BookingPackage) => void;
};

function ScheduleSelection({
  selectedSlot,
  sessionDuration,
  selectedHours,
  onSelectHours,
  onBack,
  onNext,
  purchaseType,
  onPurchaseTypeChange,
  selectedPackage,
  onSelectPackage,
}: ScheduleSelectionProps) {
  const drag = useRef({
    active: false,
    moved: false,
    startY: 0,
    startScroll: 0,
  });

  return (
    <>
      <div className="schedule-session-content schedule-selection-content">
        <div className="schedule-session-overview">
          <h3>Add time to your balance</h3>
          <p className="schedule-selection-description">
            You don't have any time with this consultant.
          </p>

          <div className="schedule-selection-session-heading">
            <h4>Your Session</h4>
            <button
              type="button"
              aria-label="Change session time"
              onClick={onBack}
            >
              <i className="bi bi-pencil" aria-hidden="true"></i>
            </button>
          </div>

          <div className="schedule-session-summary">
            <div className="schedule-session-summary-day">
              {selectedSlot.dayLabel}
            </div>
            <div className="schedule-session-summary-info">
              <p>{sessionDuration}-Minute Consulting Session with Cynthia</p>
              <strong>
                {getSessionTimeRange(selectedSlot.time, sessionDuration)}
              </strong>
            </div>
          </div>
        </div>

        <div className="schedule-selection">
          <h4>Select a quantity of consulting time</h4>

          <div className="schedule-selection-tabs">
            <button
              type="button"
              className={purchaseType === "hourly" ? "primary-button" : ""}
              aria-pressed={purchaseType === "hourly"}
              onClick={() => onPurchaseTypeChange("hourly")}
            >
              Hourly
            </button>

            <button
              type="button"
              className={purchaseType === "package" ? "primary-button" : ""}
              aria-pressed={purchaseType === "package"}
              onClick={() => onPurchaseTypeChange("package")}
            >
              Packages
            </button>
          </div>
          {purchaseType === "hourly" && (
            <div
              className="schedule-selection-hours"
              role="region"
              aria-label="Consulting hours"
              tabIndex={0}
              onPointerDown={(event) => {
                if (
                  event.pointerType !== "mouse" ||
                  event.button !== 0 ||
                  window.innerWidth <= 767
                ) {
                  return;
                }

                drag.current = {
                  active: true,
                  moved: false,
                  startY: event.clientY,
                  startScroll: event.currentTarget.scrollTop,
                };
              }}
              onPointerMove={(event) => {
                if (!drag.current.active) return;

                const distance = event.clientY - drag.current.startY;

                if (!drag.current.moved && Math.abs(distance) < 5) return;

                if (!drag.current.moved) {
                  drag.current.moved = true;
                  event.currentTarget.setPointerCapture(event.pointerId);
                  event.currentTarget.classList.add(
                    "schedule-selection-dragging",
                  );
                }

                event.currentTarget.scrollTop =
                  drag.current.startScroll - distance;
              }}
              onPointerUp={(event) => {
                drag.current.active = false;
                event.currentTarget.classList.remove(
                  "schedule-selection-dragging",
                );

                if (event.currentTarget.hasPointerCapture(event.pointerId)) {
                  event.currentTarget.releasePointerCapture(event.pointerId);
                }
              }}
              onPointerCancel={(event) => {
                drag.current.active = false;
                drag.current.moved = false;
                event.currentTarget.classList.remove(
                  "schedule-selection-dragging",
                );
              }}
              onLostPointerCapture={(event) => {
                drag.current.active = false;
                event.currentTarget.classList.remove(
                  "schedule-selection-dragging",
                );
              }}
              onPointerLeave={() => {
                if (!drag.current.moved) {
                  drag.current.active = false;
                }
              }}
              onClickCapture={(event) => {
                if (drag.current.moved && event.detail > 0) {
                  event.preventDefault();
                  event.stopPropagation();
                  drag.current.moved = false;
                }
              }}
            >
              {[0.5, 1, 2, 3, 4, 5, 6, 7, 8].map((hours) => {
                const price = getConsultingPrice(hours);
                const savings = hours * 66 - price;

                return (
                  <label className="schedule-selection-option" key={hours}>
                    <input
                      type="radio"
                      name="schedule-hours"
                      value={hours}
                      checked={selectedHours === hours}
                      disabled={hours * 60 < sessionDuration}
                      onChange={() => onSelectHours(hours)}
                    />

                    <span>
                      {hours === 0.5
                        ? "30 minutes"
                        : `${hours} ${hours === 1 ? "hour" : "hours"}`}
                    </span>

                    {savings > 0 && (
                      <small className="schedule-selection-saving">
                        Save ${savings}
                      </small>
                    )}

                    <span className="schedule-selection-price">${price}</span>
                  </label>
                );
              })}
            </div>
          )}
          {purchaseType === "package" && (
            <div className="schedule-selection-packages">
              {bookingPackages.slice(0, 3).map((item) => (
                <div key={item.id}>
                  <label className="schedule-selection-option">
                    <input
                      type="radio"
                      name="schedule-package"
                      value={item.id}
                      checked={selectedPackage.id === item.id}
                      onChange={() =>
                        onSelectPackage(
                          item.id === "statement-review"
                            ? {
                                ...item,
                                price: applicationPackageTiers[0].price,
                              }
                            : item,
                        )
                      }
                    />

                    <span className="schedule-selection-package-info">
                      <span>{item.name}</span>
                      <small>Consulting Time X+ Hrs</small>
                    </span>

                    <span className="schedule-selection-price">
                      $
                      {(selectedPackage.id === item.id
                        ? selectedPackage.price
                        : item.id === "statement-review"
                          ? applicationPackageTiers[0].price
                          : item.price
                      ).toLocaleString("en-US")}
                    </span>
                  </label>

                  {item.id === "statement-review" &&
                    selectedPackage.id === item.id && (
                      <div className="schedule-selection-tiers">
                        {applicationPackageTiers.map((tier) => (
                          <label
                            className="schedule-selection-tier"
                            key={tier.id}
                          >
                            <input
                              type="radio"
                              name="schedule-package-tier"
                              value={tier.id}
                              checked={selectedPackage.price === tier.price}
                              onChange={() =>
                                onSelectPackage({ ...item, price: tier.price })
                              }
                            />

                            <span className="schedule-selection-tier-info">
                              <span>
                                {tier.name} <small>({tier.hours})</small>
                              </span>

                              <span className="schedule-selection-tier-prices">
                                <span>
                                  ${tier.price.toLocaleString("en-US")}
                                </span>
                                <del>
                                  ${tier.originalPrice.toLocaleString("en-US")}
                                </del>
                                <span className="schedule-selection-tier-saving">
                                  Save $
                                  {(
                                    tier.originalPrice - tier.price
                                  ).toLocaleString("en-US")}
                                </span>
                              </span>
                            </span>
                          </label>
                        ))}
                      </div>
                    )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="schedule-checkout-footer schedule-selection-footer">
        {purchaseType === "hourly" && (
          <p>You will be refunded for any unused hours.</p>
        )}
        <button type="button" className="primary-button" onClick={onNext}>
          Next
        </button>
      </div>
    </>
  );
}

export default ScheduleSelection;
