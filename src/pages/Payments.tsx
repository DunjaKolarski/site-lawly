import "./Payments.css";
import EventsHeader from "../components/events/EventsHeader";
import EventsSideBar from "../components/events/EventsSideBar";
import Footer from "../components/layout/Footer";
import visaCard from "../assets/visa-card.png";
import jeremyImage from "../assets/jeremy-messages.png";
import cynthiaImage from "../assets/profile2.png";
import titusImage from "../assets/titus-messages.png";

function Payments() {
  const hasPaymentDetails = true;

  const credits = [
    {
      id: "jeremy",
      name: "Jeremy R.",
      image: jeremyImage,
      amount: 25,
      expiresIn: 4,
    },
    {
      id: "cynthia",
      name: "Cynthia J.",
      image: cynthiaImage,
      amount: 25,
      expiresIn: 8,
    },
    {
      id: "titus",
      name: "Titus K.",
      image: titusImage,
      amount: 35,
      expiresIn: 13,
    },
  ];
  return (
    <>
      <EventsHeader />

      <div className="payments-layout">
        <EventsSideBar />

        <main className="payments-content">
          <h1>
            {hasPaymentDetails ? "Payments & Credit" : "Credits & Payment"}
          </h1>

          <div className="payments-sections">
            <section className="payments-methods">
              <h2>Payment Methods</h2>
              <p>
                Add and manage your payment methods using our secure payment
                system.
              </p>

              {hasPaymentDetails ? (
                <>
                  <p className="payments-method-status">
                    Default payment method
                  </p>

                  <div className="payments-card">
                    <img
                      src={visaCard}
                      alt="Visa"
                      className="payments-card-logo"
                    />

                    <div className="payments-card-details">
                      <p>Visa</p>
                      <p>Credit card ending in •••• 0316</p>
                    </div>
                  </div>
                </>
              ) : (
                <p className="payments-method-status">No payment method.</p>
              )}

              <button type="button" className="payments-stripe-button">
                <span>stripe</span>
                Manage on Stripe
              </button>
            </section>

            <section className="payments-credits">
              <h2>Your Credits</h2>
              <p>
                Credits expire 14 days from the date of your strategy session.
              </p>

              {hasPaymentDetails ? (
                <div className="payments-credits-list">
                  {credits.map((credit) => (
                    <div className="payments-credit" key={credit.id}>
                      <img src={credit.image} alt={credit.name} />

                      <div className="payments-credit-details">
                        <p className="payments-credit-amount">
                          ${credit.amount} Credit
                        </p>
                        <p>With {credit.name}</p>
                        <p className="payments-credit-expiration">
                          Expires in {credit.expiresIn} days
                        </p>
                      </div>

                      <button type="button" className="primary-button">
                        See offerings
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="payments-credits-empty">
                  You have no active credits.
                </div>
              )}
            </section>
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
}

export default Payments;
