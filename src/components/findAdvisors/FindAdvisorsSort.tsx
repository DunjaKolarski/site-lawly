import "./FindAdvisorsSort.css";
import { useState } from "react";

const schools = [
  "Stanford School of Law",
  "St. John's School of Law",
  "St. Mary's University School of Law",
];

const sortOptions = [
  "Popularity",
  "Hourly Rate: Low to High",
  "Hourly Rate: High to Low",
  "Highest Rated",
];

function FindAdvisorsSort() {
  const [school, setSchool] = useState("");
  const [schoolsOpen, setSchoolsOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState("Hourly Rate: Low to High");

  return (
    <div className="find-advisors-sort">
      <div
        className="find-advisors-school-field"
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) {
            setSchoolsOpen(false);
          }
        }}
        onKeyDown={(event) => {
          if (event.key === "Escape") {
            setSchoolsOpen(false);
          }
        }}
      >
        <div className="find-advisors-school-search">
          <i className="bi bi-search" aria-hidden="true"></i>
          <input
            type="search"
            placeholder="Search schools"
            aria-label="Search schools"
            aria-expanded={schoolsOpen}
            aria-controls="find-advisors-school-options"
            autoComplete="off"
            value={school}
            onFocus={() => setSchoolsOpen(true)}
            onClick={() => setSchoolsOpen(true)}
            onChange={(event) => {
              setSchool(event.target.value);
              setSchoolsOpen(true);
            }}
          />
        </div>

        {schoolsOpen && (
          <div
            className="find-advisors-dropdown"
            id="find-advisors-school-options"
          >
            {schools.map((option) => (
              <button
                key={option}
                type="button"
                aria-pressed={school === option}
                className={
                  school === option ? "find-advisors-dropdown-active" : ""
                }
                onClick={() => {
                  setSchool(option);
                  setSchoolsOpen(false);
                }}
              >
                {option}
              </button>
            ))}
          </div>
        )}
      </div>

      <div
        className="find-advisors-sort-field"
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) {
            setSortOpen(false);
          }
        }}
        onKeyDown={(event) => {
          if (event.key === "Escape") {
            setSortOpen(false);
            event.currentTarget.querySelector("button")?.focus();
          }
        }}
      >
        <button
          type="button"
          className="find-advisors-sort-button"
          aria-expanded={sortOpen}
          aria-controls="find-advisors-sort-options"
          onClick={() => setSortOpen(!sortOpen)}
        >
          Sort by
          <i className="bi bi-sort-down" aria-hidden="true"></i>
        </button>

        {sortOpen && (
          <div
            className="find-advisors-dropdown"
            id="find-advisors-sort-options"
          >
            {sortOptions.map((option) => (
              <button
                key={option}
                type="button"
                aria-pressed={selectedSort === option}
                className={
                  selectedSort === option ? "find-advisors-dropdown-active" : ""
                }
                onClick={() => {
                  setSelectedSort(option);
                  setSortOpen(false);
                }}
              >
                {option}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default FindAdvisorsSort;
