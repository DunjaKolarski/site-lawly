import "./ConsultantProfileFAQ.css";

const questions = [
  {
    id: 1,
    question: "How much of a percentage does the platform take?",
  },
  {
    id: 2,
    question: "What should I start my hourly pricing at?",
  },
  {
    id: 3,
    question: "Can I make my own schedule & availability?",
  },
  {
    id: 4,
    question: "How long does it take for my consultant profile to be verified?",
  },
];

const answer =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

function ConsultantProfileFAQ() {
  return (
    <section className="consultant-profile-faq">
      <h2>FAQ's</h2>

      <div className="consultant-profile-faq-container">
        {questions.map((item) => (
          <details
            className="consultant-profile-faq-item"
            key={item.id}
            open={item.id === 1 || item.id === 4}
          >
            <summary>
              {item.question}
              <i className="bi bi-plus" aria-hidden="true"></i>
              <i className="bi bi-dash" aria-hidden="true"></i>
            </summary>
            <p>{answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export default ConsultantProfileFAQ;
