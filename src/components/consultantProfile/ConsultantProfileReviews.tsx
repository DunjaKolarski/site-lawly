import "./ConsultantProfileReviews.css";
import ConsultantProfileReviewsList from "./ConsultantProfileReviewsList";

const ratings = [
  { stars: 5, width: 100 },
  { stars: 4, width: 80 },
  { stars: 3, width: 60 },
  { stars: 2, width: 25 },
  { stars: 1, width: 15 },
];

const categories = [
  { name: "Knowledge", icon: "bi-lightbulb", rating: "5.0" },
  { name: "Value", icon: "bi-tag", rating: "4.9" },
  { name: "Responsiveness", icon: "bi-chat-left-text", rating: "4.8" },
  { name: "Supportiveness", icon: "bi-heart", rating: "5.0" },
];
type ReviewStatus = "no-session" | "can-review" | "reviewed";

const reviewStatus: ReviewStatus = "no-session";

function ConsultantProfileReviews() {
  return (
    <section className="consultant-profile-reviews">
      <div className="consultant-profile-reviews-heading">
        <h2>Ratings &amp; Reviews</h2>

        {reviewStatus !== "no-session" && (
          <button
            type="button"
            className="primary-button consultant-profile-reviews-action"
          >
            {reviewStatus === "reviewed"
              ? "Edit your review"
              : "Leave a review"}
          </button>
        )}
      </div>

      <div className="consultant-profile-reviews-summary">
        <div className="consultant-profile-reviews-score">
          <p>
            4.5 <span aria-label="out of 5 stars">★</span>
          </p>
          <small>30 Reviews</small>
        </div>

        <div className="consultant-profile-reviews-breakdown">
          <div className="consultant-profile-reviews-bars">
            {ratings.map((rating) => (
              <div
                key={rating.stars}
                className="consultant-profile-reviews-bar-row"
              >
                <span>{rating.stars}</span>
                <div className="consultant-profile-reviews-bar">
                  <div style={{ width: `${rating.width}%` }} />
                </div>
              </div>
            ))}
          </div>

          <div className="consultant-profile-reviews-categories">
            {categories.map((category) => (
              <div
                key={category.name}
                className="consultant-profile-reviews-category"
              >
                <span className="consultant-profile-reviews-category-name">
                  <i className={`bi ${category.icon}`} aria-hidden="true"></i>
                  {category.name}
                </span>

                <strong className="consultant-profile-reviews-category-score">
                  <i className={`bi ${category.icon}`} aria-hidden="true"></i>
                  {category.rating}
                </strong>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ConsultantProfileReviewsList
        key={reviewStatus}
        reviewStatus={reviewStatus}
      />
    </section>
  );
}

export default ConsultantProfileReviews;
