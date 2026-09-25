import "./ArticleConsultants.css";
import elizabeth from "../../assets/profile3.png";
import cynthia from "../../assets/profile5.png";
import nathan from "../../assets/profile8.png";

const consultants = [
  {
    id: 1,
    image: elizabeth,
    name: "Elizabeth M.",
    badge: "AdComm",
    reviews: 15,
    company: "",
    price: "$70/hour",
  },
  {
    id: 2,
    image: cynthia,
    name: "Cynthia L.",
    badge: "Pro",
    reviews: 10,
    company: "Sullivan Cromwell",
    price: "$50/hour",
  },
  {
    id: 3,
    image: nathan,
    name: "Nathan",
    badge: "Insider",
    reviews: 15,
    company: "Sullivan Cromwell",
    price: "$70/hour",
  },
];

function ArticleConsultants() {
  return (
    <section className="article-consultants">
      <h4>Featured consultants who can mentor you:</h4>
      <div className="article-consultants-container">
        {consultants.map((consultant) => (
          <div className="article-consultant-card" key={consultant.id}>
            <div className="article-consultant-image">
              <img src={consultant.image} alt={consultant.name} />
              <i
                className="bi bi-heart article-consultant-heart"
                aria-hidden="true"
              ></i>
              <span
                className={`article-consultant-badge article-consultant-badge-${consultant.badge.toLowerCase()}`}
              >
                {consultant.badge}
              </span>
            </div>
            <div className="article-consultant-content">
              <div className="article-consultant-heading">
                <h4>{consultant.name}</h4>
                <div className="article-consultant-rating">
                  <span className="article-consultant-star">★</span>
                  <strong>4.8</strong>
                  <span className="article-consultant-reviews">
                    ({consultant.reviews})
                  </span>
                </div>
              </div>
              <div className="article-consultant-background">
                <p>
                  <i className="bi bi-mortarboard" aria-hidden="true"></i>
                  Yale
                </p>
                {consultant.company && (
                  <p>
                    <i className="bi bi-building" aria-hidden="true"></i>
                    {consultant.company}
                  </p>
                )}
              </div>
              <p className="article-consultant-description">
                Former admissions reader and Yale Law grad—insider tips to
                perfect your application.
              </p>
              <strong className="article-consultant-price">
                {consultant.price}
              </strong>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ArticleConsultants;
