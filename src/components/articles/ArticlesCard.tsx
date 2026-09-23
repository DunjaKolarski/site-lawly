import "./ArticlesCard.css";
import authorImage from "../../assets/profile2.png";

function ArticlesCard() {
  return (
    <div className="articles-card">
      <div className="articles-card-content">
        <h4>
          The 4 TMU School of Law Supplementary Questions: Ultimate Guide for
          Law School Applicants
        </h4>
        <div className="articles-card-author">
          <p>By: Cynthia L.</p>
          <img src={authorImage} alt="Cynthia L." />
        </div>
      </div>
      <div className="articles-card-bottom">
        <p>Published 12/7/25</p>
        <button className="primary-button" type="button">
          Read more
        </button>
      </div>
    </div>
  );
}

export default ArticlesCard;
