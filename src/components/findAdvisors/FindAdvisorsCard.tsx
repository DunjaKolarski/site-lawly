import "./FindAdvisorsCard.css";

type FindAdvisorsCardProps = {
  image: string;
  name: string;
  badge: "Insider" | "Pro" | "AdComm";
  rating: number;
  reviews: number;
  description: string;
  price: number;
};

function FindAdvisorsCard({
  image,
  name,
  badge,
  rating,
  reviews,
  description,
  price,
}: FindAdvisorsCardProps) {
  return (
    <div className="find-advisors-card">
      <div className="find-advisors-card-image">
        <img src={image} alt={name} />
        <i
          className="bi bi-heart find-advisors-card-heart"
          aria-hidden="true"
        ></i>
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
