import "./EventsReview.css";
import { useEffect, useRef, useState } from "react";
import hostImage from "../../assets/profile2.png";
import EventsReviewConfirmation from "./EventsReviewConfirmation";

type EventsReviewProps = {
  onClose: () => void;
};

function EventsReview({ onClose }: EventsReviewProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [rating, setRating] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    dialogRef.current?.showModal();
  }, []);

  return (
    <dialog
      className={
        isSubmitted ? "events-review events-review-submitted" : "events-review"
      }
      ref={dialogRef}
      onClose={onClose}
      aria-labelledby="events-review-title"
    >
      <button
        className="events-review-close"
        type="button"
        aria-label="Close"
        onClick={() => dialogRef.current?.close()}
      >
        <i className="bi bi-x-lg"></i>
      </button>
      <div className="events-review-heading">
        <h4 id="events-review-title">
          <span>
            Thank you for joining
            <span className="events-review-title-colon">:</span>
          </span>{" "}
          <strong>Drafting The Perfect Essay</strong>
        </h4>
        <div className="events-review-host">
          <p>Hosted by:</p>
          <img src={hostImage} alt="Cynthia L." />
          <span>Cynthia L.</span>
        </div>
      </div>
      {isSubmitted ? (
        <EventsReviewConfirmation />
      ) : (
        <div className="events-review-content">
          <h4>Leave a review for Cynthia</h4>

          <div className="events-review-rating">
            <div
              className="events-review-stars"
              role="group"
              aria-label="Rating"
            >
              {[1, 2, 3, 4, 5].map((number) => (
                <button
                  key={number}
                  type="button"
                  className={
                    number <= rating ? "events-review-star-active" : ""
                  }
                  aria-label={`${number} ${number === 1 ? "star" : "stars"}`}
                  aria-pressed={rating === number}
                  onClick={() => setRating(number)}
                >
                  <i className="bi bi-star-fill" aria-hidden="true"></i>
                </button>
              ))}
            </div>

            <p>Select a star rating</p>
          </div>
          <label className="events-review-anonymous">
            <input type="checkbox" />
            Keep my review anonymous
          </label>
          <button
            className="primary-button"
            type="button"
            disabled={rating === 0}
            onClick={() => {
              setIsSubmitted(true);
              dialogRef.current?.focus();
            }}
          >
            Submit
          </button>
        </div>
      )}
    </dialog>
  );
}

export default EventsReview;
