import "./BecomeConsultantFAQ.css";

const questions = [
  {
    id: 1,
    question: "How much of a percentage does the platform take?",
    answer:
      "Consultants keep 75% of each session payment. As you work with more clients, you can keep an even larger share of your earnings.",
  },
  {
    id: 2,
    question: "What should I start my hourly pricing at?",
    answer:
      "Start with a rate that reflects your experience and the support you offer. You can compare similar consultant profiles and adjust your pricing as you gain experience and reviews.",
  },
  {
    id: 3,
    question: "Can I make my own schedule & availability?",
    answer:
      "Yes, you choose the days and times that work for you. Set your availability around your studies, work, and other commitments.",
  },
  {
    id: 4,
    question: "How long does it take for my consultant profile to be verified?",
    answer:
      "Verification time can vary depending on the information provided. Complete your profile and submit the requested details to help the review process move smoothly.",
  },
  {
    id: 6,
    question: "What is the refund policy?",
    answer:
      "If you have a concern about a session or payment, contact our support team with your booking details so they can help you explore the available options.",
    mobileOnly: true,
  },
  {
    id: 5,
    question: "Should I offer 15 minute strategy sessions?",
    answer:
      "Short strategy sessions are a useful way to meet new students, discuss their goals, and help them decide what support they need before booking a longer session.",
  },
];

function BecomeConsultantFAQ() {
  return (
    <section className="become-consultant-faq">
      <h2>FAQ’s</h2>
      <div className="become-consultant-faq-container">
        {questions.map((item) => (
          <details
            className={`become-consultant-faq-item${item.mobileOnly ? " become-consultant-faq-mobile" : ""}`}
            key={item.id}
          >
            <summary>
              {item.question}
              <i className="bi bi-plus" aria-hidden="true"></i>
              <i className="bi bi-dash" aria-hidden="true"></i>
            </summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export default BecomeConsultantFAQ;
