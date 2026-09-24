import "./ArticlesFilters.css";

function ArticlesFilters() {
  return (
    <div className="articles-filters">
      <div className="articles-filters-container">
        <div className="articles-search">
          <i className="bi bi-search" aria-hidden="true"></i>
          <input
            type="search"
            placeholder="Search for anything"
            aria-label="Search articles"
          />
        </div>
        <div className="articles-filters-selects">
          <select aria-label="Category" defaultValue="">
            <option value="" disabled>
              Category
            </option>
            <option value="general-consultation">General Consultation</option>
            <option value="interview-preparation">Interview preparation</option>
            <option value="letters-of-recommendation">
              Letters of Recommendation
            </option>
            <option value="application-strategy">Application Strategy</option>
          </select>
          <select aria-label="Background" defaultValue="">
            <option value="" disabled>
              Background
            </option>
            <option value="urm">URM</option>
            <option value="ethnically-diverse">
              Ethnically Diverse (non-URM)
            </option>
            <option value="llm">LLM</option>
            <option value="non-us-jd">Non-U.S. JD Applicant</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default ArticlesFilters;
