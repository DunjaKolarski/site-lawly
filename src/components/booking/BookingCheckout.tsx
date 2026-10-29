import "./BookingCheckout.css";
import logo from "../../assets/logo.png";
import profileImage from "../../assets/profile2.png";
import { useId, useState } from "react";
import { getSessionTimeRange } from "./bookingTime";
import { getConsultingPrice } from "./bookingPrice";
import type { BookingPackage } from "./bookingPackage";
import linkVisaCard from "../../assets/link-visa-card.png";

type BookingCheckoutProps = {
  bookingType?: "strategy" | "hourly" | "package";
  selectedPackage: BookingPackage;
  sessionDuration?: number;
  selectedHours?: number;
  consultantCredit?: number;
  selectedSlot: {
    dayLabel: string;
    time: string;
  };
  onBack: () => void;
  onBook?: () => void;
  submitLabel?: string;
  showFooter?: boolean;
};

function BookingCheckout({
  bookingType = "strategy",
  selectedPackage,
  sessionDuration = 15,
  selectedHours = 1,
  consultantCredit = 0,
  selectedSlot,
  onBack,
  onBook,
  submitLabel = "Book",
  showFooter = false,
}: BookingCheckoutProps) {
  const paymentFormId = useId();

  const [discountCode, setDiscountCode] = useState("");
  const [discountStatus, setDiscountStatus] = useState<
    "idle" | "applied" | "invalid"
  >("idle");

  const subtotal =
    bookingType === "package"
      ? selectedPackage.price
      : bookingType === "hourly"
        ? getConsultingPrice(selectedHours)
        : 25;
  const discount = discountStatus === "applied" ? subtotal * 0.2 : 0;
  const appliedCredit =
    bookingType !== "strategy"
      ? Math.min(consultantCredit, subtotal - discount)
      : 0;
  const total = subtotal - discount - appliedCredit;
  return (
    <>
      <section
        className={
          bookingType !== "strategy"
            ? "booking-checkout booking-checkout-hourly"
            : "booking-checkout"
        }
      >
        <div className="booking-checkout-overview">
          <div className="booking-checkout-overview-content">
            <div className="booking-powered">
              <span>Powered by</span>
              <img src={logo} alt="Lawly" />
            </div>

            <h1>
              {bookingType === "package"
                ? selectedPackage.name
                : bookingType === "hourly"
                  ? "Hourly Consulting with"
                  : "15-Minute Strategy Session with"}
            </h1>

            <div className="booking-checkout-photo">
              <img src={profileImage} alt="Cynthia" />
              <span>Pro</span>
            </div>

            <div className="booking-checkout-consultant">
              <h2>Cynthia</h2>

              <div className="booking-checkout-rating">
                <i className="bi bi-star-fill" aria-hidden="true"></i>
                <span>5.0</span>
                <small>(10)</small>
              </div>
            </div>

            <div className="booking-checkout-session">
              <h2>Session Details</h2>
              <div className="booking-checkout-session-card">
                <div className="booking-checkout-session-day">
                  <span>{selectedSlot.dayLabel}</span>
                </div>
                <div className="booking-checkout-session-info">
                  <p>
                    {sessionDuration}-Minute{" "}
                    {bookingType === "strategy" ? "Strategy" : "Consulting"}{" "}
                    Session with Cynthia
                  </p>
                  <strong>
                    {getSessionTimeRange(selectedSlot.time, sessionDuration)}
                  </strong>
                </div>
              </div>
              {bookingType !== "strategy" && (
                <p className="booking-checkout-note">
                  Session balances cover both live sessions and offline work
                  performed by your consultant, including document edits and
                  written feedback. Offline work time will be deducted from the
                  remaining balance.
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="booking-checkout-payment">
          <button
            type="button"
            className="booking-checkout-back"
            aria-label="Back to available times"
            onClick={onBack}
          >
            <i className="bi bi-chevron-left" aria-hidden="true"></i>
          </button>

          <div className="booking-checkout-price">
            <div className="booking-checkout-price-row">
              <span>Subtotal</span>
              <span>${subtotal}</span>
            </div>

            <div className="booking-checkout-price-row booking-checkout-fee">
              <span>Processing Fee</span>
              <span>$0</span>
            </div>
            {appliedCredit > 0 && (
              <div className="booking-checkout-price-row">
                <span>Consultant Credit</span>
                <span>${appliedCredit.toFixed(2)}</span>
              </div>
            )}
            <form
              className="booking-checkout-discount-form"
              onSubmit={(event) => {
                event.preventDefault();

                const code = discountCode.trim().toUpperCase();

                setDiscountStatus(code === "CYNTHIA" ? "applied" : "invalid");
              }}
            >
              <div className="booking-checkout-discount">
                <input
                  type="text"
                  aria-label="Discount code or gift card"
                  aria-invalid={discountStatus === "invalid"}
                  aria-describedby="booking-discount-status"
                  placeholder="Discount code or gift card"
                  value={discountCode}
                  onChange={(event) => {
                    setDiscountCode(event.target.value);
                    setDiscountStatus("idle");
                  }}
                />

                <button type="submit">Apply</button>
              </div>

              <div id="booking-discount-status" role="status">
                {discountStatus === "applied" && (
                  <p className="booking-checkout-discount-success">
                    <span>Discount code “CYNTHIA” applied (20%)</span>
                    <span>-${discount.toFixed(2)}</span>
                  </p>
                )}

                {discountStatus === "invalid" && (
                  <p className="booking-checkout-discount-error">
                    Discount code invalid
                  </p>
                )}
              </div>
            </form>

            <div className="booking-checkout-total">
              <div className="booking-checkout-price-row">
                <strong>Total</strong>
                <strong>${total.toFixed(2)}</strong>
              </div>

              {bookingType === "strategy" && !showFooter && (
                <p>
                  Your Strategy Session price of $25 will be credited to any
                  future purchase from Cynthia.
                </p>
              )}
            </div>
          </div>

          <form
            id={paymentFormId}
            className="booking-checkout-form"
            onSubmit={(event) => {
              event.preventDefault();
              onBook?.();
            }}
          >
            <h2>Card Details</h2>

            <label className="booking-checkout-saved-card">
              <input type="checkbox" aria-label="Select saved card preview" />
              <img src={linkVisaCard} alt="Link Visa ending in 0316" />
            </label>

            <div className="booking-checkout-card-fields">
              <i className="bi bi-credit-card" aria-hidden="true"></i>

              <input
                type="text"
                inputMode="numeric"
                aria-label="Card number"
                placeholder="Card Number"
                className="booking-checkout-card-number"
                autoComplete="off"
                maxLength={23}
                required
              />

              <input
                type="text"
                inputMode="numeric"
                aria-label="Expiration date, month and year"
                placeholder="MM/YY"
                autoComplete="off"
                maxLength={5}
                required
              />

              <input
                type="text"
                inputMode="numeric"
                aria-label="Card security code"
                placeholder="CVC"
                autoComplete="off"
                maxLength={4}
                required
              />

              <input
                type="text"
                aria-label="Postal code"
                placeholder="ZIP"
                autoComplete="off"
                maxLength={10}
                required
              />
            </div>

            {!showFooter && (
              <button
                type="submit"
                className="primary-button"
                disabled={!onBook}
              >
                {submitLabel}
              </button>
            )}
          </form>

          <div className="booking-checkout-terms">
            <h2>Terms</h2>

            <p>
              The Lawly Experience Guarantee protects you with every booking.
            </p>

            <p>
              Refund policy: Refunds are available within 14 days of purchase.
              Credit can be issued if the order has not expired yet.
            </p>

            <p className="booking-checkout-expiration">
              Expiration terms: consulting is valid for X days before expiring.
            </p>
          </div>
        </div>
      </section>

      {showFooter && (
        <div className="schedule-checkout-footer">
          <p>
            {bookingType === "strategy"
              ? "Your Strategy Session price of $25 will be credited to any future purchase from Cynthia."
              : "You will be refunded for any unused hours."}
          </p>

          <button
            type="submit"
            form={paymentFormId}
            className="primary-button"
            disabled={!onBook}
          >
            {submitLabel}
          </button>
        </div>
      )}
    </>
  );
}

export default BookingCheckout;
