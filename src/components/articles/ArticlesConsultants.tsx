import "./ArticlesConsultants.css";
import { Link } from "react-router-dom";

import elizabeth from "../../assets/profile3.png";
import cynthia from "../../assets/profile5.png";
import nathan from "../../assets/profile8.png";
import sara from "../../assets/profile1.png";

const consultants = [
  {
    id: 1,
    image: elizabeth,
    name: "Elizabeth M.",
    badge: "AdComm",
    rating: "4.8",
    reviews: 15,
    company: "",
    price: "$70/hour",
  },
  {
    id: 2,
    image: cynthia,
    name: "Cynthia L.",
    badge: "Pro",
    rating: "4.8",
    reviews: 10,
    company: "Sullivan Cromwell",
    price: "$50/hour",
  },
  {
    id: 3,
    image: nathan,
    name: "Nathan",
    badge: "Insider",
    rating: "4.8",
    reviews: 15,
    company: "Sullivan Cromwell",
    price: "$70/hour",
  },
  {
    id: 4,
    image: sara,
    name: "Sara",
    badge: "AdComm",
    rating: "4.7",
    reviews: 78,
    company: "Sullivan Cromwell",
    price: "$50/hour",
  },
];

function ArticlesConsultants() {
  return (
    <section className="articles-consultants">
      <h2>Featured Consultants</h2>

      <div className="articles-consultants-container">
        {consultants.map((consultant) => (
          <div className="articles-consultant-card" key={consultant.id}>
            <div className="articles-consultant-image">
              <img src={consultant.image} alt={consultant.name} />

              <i
                className="bi bi-heart articles-consultant-heart"
                aria-hidden="true"
              ></i>

              <span
                className={`articles-consultant-badge articles-consultant-badge-${consultant.badge.toLowerCase()}`}
              >
                {consultant.badge}
              </span>
            </div>

            <div className="articles-consultant-content">
              <div className="articles-consultant-heading">
                <h4>{consultant.name}</h4>

                <div className="articles-consultant-rating">
                  <span className="articles-consultant-star">★</span>
                  <strong>{consultant.rating}</strong>
                  <span className="articles-consultant-reviews">
                    ({consultant.reviews})
                  </span>
                </div>
              </div>

              <div className="articles-consultant-background">
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

              <p className="articles-consultant-description">
                Former admissions reader and Yale Law grad—insider tips to
                perfect your application.
              </p>

              <strong className="articles-consultant-price">
                {consultant.price}
              </strong>
            </div>
          </div>
        ))}
      </div>

      <Link to="/find-consultant" className="primary-button">
        View all consultants
      </Link>
    </section>
  );
}

export default ArticlesConsultants;
