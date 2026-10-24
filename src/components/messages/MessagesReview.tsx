import "./MessagesReview.css";
import cynthia from "../../assets/profile2.png";
import { useState } from "react";
import EventsHeader from "../events/EventsHeader";

const reviewAreas = [
  {
    name: "Knowledge",
    description: "How knowledgeable was Cynthia?",
  },
  {
    name: "Value",
    description: "Did you feel Cynthia's price for her services was fair?",
  },
  {
    name: "Responsiveness",
    description: "Did Cynthia communicate timely and effectively",
  },
  {
    name: "Supportiveness",
    description: "Did Cynthia help you achieve your desired goals?",
  },
];

function MessagesReview() {
  const [overallRating, setOverallRating] = useState(0);

  const [step, setStep] = useState(1);
  const [areaRatings, setAreaRatings] = useState<Record<string, number>>({});

  const [headline, setHeadline] = useState("");
  const [review, setReview] = useState("");

  return (
    <div className="messages-review">
      <div className="messages-review-mobile-header">
        <EventsHeader />
      </div>

      <header className="messages-review-header">
        <img src={cynthia} alt="" />
        <h2 id="messages-review-title">Leave a Review for Cynthia</h2>

        <form method="dialog">
          <button type="submit" aria-label="Close review">
            <i className="bi bi-x-lg" aria-hidden="true"></i>
          </button>
        </form>
      </header>

      <div className="messages-review-content">
        <p className="messages-review-step">Step {step} of 3</p>

        {step === 1 && (
          <>
            <h3>Rate your overall experience with Cynthia</h3>

            <div className="messages-review-rating">
              <div
                className="messages-review-stars"
                role="group"
                aria-label="Overall rating"
              >
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    className={
                      star <= overallRating
                        ? "messages-review-star-selected"
                        : ""
                    }
                    aria-label={`Rate ${star} out of 5`}
                    aria-pressed={star === overallRating}
                    onClick={() => setOverallRating(star)}
                  >
                    <i className="bi bi-star-fill" aria-hidden="true"></i>
                  </button>
                ))}
              </div>
              <p>Select a star rating</p>
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <h3>Rate your experience in these areas:</h3>

            <div className="messages-review-areas">
              {reviewAreas.map((area) => (
                <div className="messages-review-area" key={area.name}>
                  <h4>{area.name}</h4>

                  <div
                    className="messages-review-stars"
                    role="group"
                    aria-label={`${area.name} rating`}
                  >
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        className={
                          star <= (areaRatings[area.name] ?? 0)
                            ? "messages-review-star-selected"
                            : ""
                        }
                        aria-label={`Rate ${area.name} ${star} out of 5`}
                        aria-pressed={star === areaRatings[area.name]}
                        onClick={() =>
                          setAreaRatings({
                            ...areaRatings,
                            [area.name]: star,
                          })
                        }
                      >
                        <i className="bi bi-star-fill" aria-hidden="true"></i>
                      </button>
                    ))}
                  </div>

                  <p>{area.description}</p>
                </div>
              ))}
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <h3>Write your review</h3>

            <div className="messages-review-fields">
              <div className="messages-review-field">
                <label htmlFor="messages-review-headline">
                  Headline <span>Optional</span>
                </label>
                <p>Write a short headline that will go above your review.</p>
                <input
                  id="messages-review-headline"
                  type="text"
                  placeholder="Write Headline"
                  value={headline}
                  onChange={(event) => setHeadline(event.target.value)}
                />
              </div>

              <div className="messages-review-field">
                <label htmlFor="messages-review-text">
                  Review <span>Optional</span>
                </label>
                <p>
                  Tell other T14 users about your experience working with
                  Cynthia.
                </p>
                <textarea
                  id="messages-review-text"
                  placeholder="Write Review"
                  value={review}
                  onChange={(event) => setReview(event.target.value)}
                />
              </div>
            </div>
          </>
        )}
      </div>

      <label className="messages-review-anonymous">
        <input type="checkbox" />
        <span>Keep my review anonymous</span>
      </label>

      <div className="messages-review-actions">
        {step > 1 && (
          <button
            type="button"
            className="messages-review-back"
            onClick={() => setStep(step - 1)}
          >
            Back
          </button>
        )}
        {step < 3 && (
          <button type="button" className="messages-review-submit-now">
            Submit now
          </button>
        )}

        {step < 3 ? (
          <button
            type="button"
            className="primary-button"
            onClick={() => setStep(step + 1)}
          >
            Continue
          </button>
        ) : (
          <button type="button" className="primary-button">
            Submit
          </button>
        )}
      </div>
    </div>
  );
}

export default MessagesReview;
