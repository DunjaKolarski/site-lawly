import "./EventsFilters.css";

function EventsFilters() {
  return (
    <section className="events-filters">
      <h1>Free Consulting Events</h1>

      <div className="events-filters-container">
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
    </section>
  );
}

export default EventsFilters;
