import "./ConsultantProfileFAQ.css";
import { useRef } from "react";

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
  {
    id: 5,
    question: "What is the refund policy?",
  },
  {
    id: 6,
    question: "Should I offer 15 minute strategy sessions?",
  },
];

const answer =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

function ConsultantProfileFAQ() {
  const drag = useRef({
    active: false,
    moved: false,
    startY: 0,
    startScroll: 0,
  });

  return (
    <section className="consultant-profile-faq">
      <h2>FAQ's</h2>

      <div
        className="consultant-profile-faq-container"
        onPointerDown={(event) => {
          if (
            event.pointerType !== "mouse" ||
            event.button !== 0 ||
            window.matchMedia("(max-width: 767px)").matches
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
              "consultant-profile-faq-dragging",
            );
          }

          event.currentTarget.scrollTop = drag.current.startScroll - distance;
        }}
        onPointerUp={(event) => {
          drag.current.active = false;
          event.currentTarget.classList.remove(
            "consultant-profile-faq-dragging",
          );

          if (event.currentTarget.hasPointerCapture(event.pointerId)) {
            event.currentTarget.releasePointerCapture(event.pointerId);
          }
        }}
        onPointerCancel={(event) => {
          drag.current.active = false;
          drag.current.moved = false;
          event.currentTarget.classList.remove(
            "consultant-profile-faq-dragging",
          );
        }}
        onLostPointerCapture={(event) => {
          drag.current.active = false;
          event.currentTarget.classList.remove(
            "consultant-profile-faq-dragging",
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
