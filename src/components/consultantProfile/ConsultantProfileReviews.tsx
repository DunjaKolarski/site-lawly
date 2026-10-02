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

function ConsultantProfileReviews() {
  return (
    <section className="consultant-profile-reviews">
      <h2>Ratings &amp; Reviews</h2>

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
                <span>
                  <i className={`bi ${category.icon}`} aria-hidden="true"></i>
                  {category.name}
                </span>
                <strong>{category.rating}</strong>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ConsultantProfileReviewsList />
    </section>
  );
}

export default ConsultantProfileReviews;
