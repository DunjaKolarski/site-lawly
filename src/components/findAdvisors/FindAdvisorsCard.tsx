import "./FindAdvisorsCard.css";

type FindAdvisorsCardProps = {
  image: string;
  name: string;
  badge: "Insider" | "Pro" | "AdComm";
  rating: number;
  reviews: number;
  description: string;
  price: number;
  isSaved?: boolean;
  onSaveToggle?: () => void;
};

function FindAdvisorsCard({
  image,
  name,
  badge,
  rating,
  reviews,
  description,
  price,
  isSaved = false,
  onSaveToggle,
}: FindAdvisorsCardProps) {
  return (
    <div className="find-advisors-card">
      <div className="find-advisors-card-image">
        <img src={image} alt={name} />
        <button
          type="button"
          className={`find-advisors-card-heart${isSaved ? " find-advisors-card-heart-saved" : ""}`}
          aria-label={`${isSaved ? "Remove" : "Save"} ${name}${isSaved ? " from saved consultants" : " to saved consultants"}`}
          aria-pressed={isSaved}
          onClick={onSaveToggle}
        >
          <i
            className={`bi ${isSaved ? "bi-heart-fill" : "bi-heart"}`}
            aria-hidden="true"
          ></i>
        </button>
        <span
          className={`find-advisors-card-badge find-advisors-card-badge-${badge.toLowerCase()}`}
        >
          {badge}
        </span>
      </div>

      <div className="find-advisors-card-content">
        <div className="find-advisors-card-heading">
          <h4>{name}</h4>
          <div className="find-advisors-card-rating">
            <span className="find-advisors-card-star">★</span>
            <strong>{rating}</strong>
            <span className="find-advisors-card-reviews">({reviews})</span>
          </div>
        </div>

        <div className="find-advisors-card-background">
          <p>
            <i className="bi bi-mortarboard" aria-hidden="true"></i>
            Yale
          </p>
          <p>
            <i className="bi bi-building" aria-hidden="true"></i>
            Sullivan Cromwell
          </p>
        </div>

        <p className="find-advisors-card-description">{description}</p>
        <strong className="find-advisors-card-price">${price}/hour</strong>
      </div>
    </div>
  );
}

export default FindAdvisorsCard;
