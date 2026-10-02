import "./ConsultantProfileClientReviews.css";
import useEmblaCarousel from "embla-carousel-react";

const reviews = [
  {
    id: 1,
    name: "Addison",
    date: "February 2025",
    service: "Personal Statement, School Specific Essays, Addenda",
    text: "Fantastic session! We focused only on the items I needed to improve before my interview. I highly recommend Cynthia!",
  },
  {
    id: 2,
    name: "Emily",
    date: "March 2025",
    service: "Personal Statement",
    text: "Fantastic session! We focused only on the items I needed to improve before my interview. I highly recommend Cynthia!",
  },
];

type ConsultantProfileClientReviewsProps = {
  onSeeAll: () => void;
};

function ConsultantProfileClientReviews({
  onSeeAll,
}: ConsultantProfileClientReviewsProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
  });

  return (
    <div className="consultant-profile-client-reviews">
      <h2>Reviews from Cynthia's Clients</h2>

      <button
        type="button"
        className="consultant-profile-see-reviews"
        onClick={onSeeAll}
      >
        See all reviews
      </button>

      <div className="consultant-profile-review-carousel">
        <div className="consultant-profile-review-viewport" ref={emblaRef}>
          <div className="consultant-profile-review-track">
            {reviews.map((review) => (
              <div className="consultant-profile-review-slide" key={review.id}>
                <div className="consultant-profile-review-card">
                  <div className="consultant-profile-review-heading">
                    <strong>{review.name}</strong>
                    <span aria-label="5 out of 5 stars">★★★★★</span>
                  </div>
                  <p className="consultant-profile-review-meta">
                    {review.date}
                  </p>
                  <p className="consultant-profile-review-meta">
                    Received help with: {review.service}
                  </p>
                  <p className="consultant-profile-review-text">
                    {review.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          className="consultant-profile-review-next"
          aria-label="Next review"
          onClick={() => emblaApi?.scrollNext()}
        >
          <i className="bi bi-chevron-right" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
}

export default ConsultantProfileClientReviews;
