import "./BookingCheckout.css";
import logo from "../../assets/logo.png";
import profileImage from "../../assets/profile2.png";

type BookingCheckoutProps = {
  selectedSlot: {
    dayLabel: string;
    time: string;
  };
  onBack: () => void;
  onBook?: () => void;
};

function BookingCheckout({
  selectedSlot,
  onBack,
  onBook,
}: BookingCheckoutProps) {
  return (
    <section className="booking-checkout">
      <div className="booking-checkout-overview">
        <div className="booking-checkout-overview-content">
          <div className="booking-powered">
            <span>Powered by</span>
            <img src={logo} alt="Lawly" />
          </div>

          <h1>15-Minute Strategy Session with</h1>

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
                <p>15-Minute Consulting Session with Cynthia</p>
                <strong>{selectedSlot.time}</strong>
                <span>15 minutes</span>
              </div>
            </div>
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
            <span>$25</span>
          </div>

          <div className="booking-checkout-price-row booking-checkout-fee">
            <span>Processing Fee</span>
            <span>$0</span>
          </div>

          <div className="booking-checkout-discount">
            <input
              type="text"
              aria-label="Discount code or gift card"
              placeholder="Discount code or gift card"
            />
            <button type="button">Apply</button>
          </div>

          <div className="booking-checkout-total">
            <div className="booking-checkout-price-row">
              <strong>Total</strong>
              <strong>$25</strong>
            </div>

            <p>
              Your Strategy Session price of $25 will be credited to any future
              purchase from Cynthia.
            </p>
          </div>
        </div>

        <form
          className="booking-checkout-form"
          onSubmit={(event) => {
            event.preventDefault();
            onBook?.();
          }}
        >
          <h2>Card Details</h2>

          <p className="booking-checkout-demo">
            Demo booking — use test details only. No payment will be taken.
          </p>

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

          <button type="submit" className="primary-button" disabled={!onBook}>
            Book
          </button>
        </form>

        <div className="booking-checkout-terms">
          <h2>Terms</h2>

          <p>The Lawly Experience Guarantee protects you with every booking.</p>

          <p>
            Refund policy: Refunds are available within 14 days of purchase.
            Credit can be issued if the order has not expired yet.
          </p>

          <p>
            Expiration terms: consulting is valid for X days before expiring.
          </p>
        </div>
      </div>
    </section>
  );
}

export default BookingCheckout;
