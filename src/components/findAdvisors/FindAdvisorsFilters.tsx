import "./FindAdvisorsFilters.css";
import FindAdvisorsRate from "./FindAdvisorsRate";

const filterGroups = [
  {
    title: "Strategy Sessions",
    options: ["Offers Strategy Session", "Offers Free Strategy Session"],
    selected: ["Offers Strategy Session", "Offers Free Strategy Session"],
  },
  {
    title: "Services Offered",
    options: [
      "General Consultation",
      "Interview Preparation",
      "Letters of Recommendation",
      "Application Strategy",
      "Financial Aid",
      "Personal Statement",
      "School Specific Essays",
      "Addenda",
      "Letters of Continued Interest",
      "Character & Fitness",
      "Full Application Support",
      "Final Application Review",
      "Pre-law Guidance",
    ],
    selected: [
      "General Consultation",
      "Interview Preparation",
      "Letters of Recommendation",
    ],
  },
  {
    title: "Consultant Background",
    options: [
      "URM",
      "Ethnically Diverse (non-URM)",
      "LLM",
      "Non-U.S. JD Applicant",
      "First Generation",
      "Military",
      "LGBTQ+",
      "Low Income",
      "Prior Career",
      "Rural or Underrepresented Area",
      "Disability",
      "Overcoming Adversity",
      "Religion",
    ],
    selected: [],
  },
  {
    title: "Specialized Experience",
    options: [
      "Public Interest",
      "Corporate Law",
      "Litigation",
      "Criminal Law",
      "Intellectual Privacy Law",
      "International Law",
      "Environmental Law",
    ],
    selected: ["Public Interest", "Corporate Law", "Litigation"],
  },
];

type FindAdvisorsFiltersProps = {
  isMobile: boolean;
};

function FindAdvisorsFilters({ isMobile }: FindAdvisorsFiltersProps) {
  return (
    <aside className="find-advisors-filters" id="find-advisors-filters">
      <h4>Filters</h4>

      {filterGroups.map((group) => (
        <details className="find-advisors-filter-group" key={group.title} open>
          <summary>
            {group.title}
            <i className="bi bi-chevron-down" aria-hidden="true"></i>
          </summary>
          <div className="find-advisors-filter-options">
            {group.options.map((option) => (
              <label key={option}>
                <input
                  type="checkbox"
                  defaultChecked={group.selected.includes(option)}
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </details>
      ))}

      <FindAdvisorsRate
        key={isMobile ? "mobile" : "desktop"}
        isMobile={isMobile}
      />
    </aside>
  );
}

export default FindAdvisorsFilters;
