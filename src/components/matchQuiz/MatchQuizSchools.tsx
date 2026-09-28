import "./MatchQuizSchools.css";
import { useState } from "react";

const schools = [
  "Stanford School of Law",
  "UVA Law",
  "Columbia Law",
  "Yale Law School",
  "Harvard Law School",
  "NYU School of Law",
  "University of Chicago Law School",
];

type MatchQuizSchoolsProps = {
  selectedSchools: string[];
  onSchoolsChange: (schools: string[]) => void;
};

function MatchQuizSchools({
  selectedSchools,
  onSchoolsChange,
}: MatchQuizSchoolsProps) {
  const [search, setSearch] = useState("");
  const [draggedSchool, setDraggedSchool] = useState<string | null>(null);

  const filteredSchools = schools.filter(
    (school) =>
      school.toLowerCase().includes(search.trim().toLowerCase()) &&
      !selectedSchools.includes(school),
  );

  function addSchool(school: string) {
    if (selectedSchools.length >= 5 || selectedSchools.includes(school)) {
      return;
    }

    onSchoolsChange([...selectedSchools, school]);
    setSearch("");
  }

  function removeSchool(school: string) {
    onSchoolsChange(selectedSchools.filter((item) => item !== school));
  }

  function moveSchool(school: string, targetIndex: number) {
    const currentIndex = selectedSchools.indexOf(school);

    if (
      currentIndex === -1 ||
      targetIndex < 0 ||
      targetIndex >= selectedSchools.length
    ) {
      return;
    }

    const updatedSchools = [...selectedSchools];
    updatedSchools.splice(currentIndex, 1);
    updatedSchools.splice(targetIndex, 0, school);
    onSchoolsChange(updatedSchools);
  }

  return (
    <div className="match-quiz-schools">
      <p>
        Which law schools are you interested in applying to?{" "}
        <span>Select up to 5.</span>
      </p>

      <div className="match-quiz-schools-search">
        <div className="match-quiz-schools-input">
          <i className="bi bi-search" aria-hidden="true"></i>
          <input
            type="search"
            placeholder="Search for schools"
            aria-label="Search for schools"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            disabled={selectedSchools.length >= 5}
          />
        </div>

        {search.trim() !== "" && selectedSchools.length < 5 && (
          <div className="match-quiz-schools-results">
            {filteredSchools.length > 0 ? (
              filteredSchools.map((school) => (
                <button
                  key={school}
                  type="button"
                  onClick={() => addSchool(school)}
                >
                  {school}
                </button>
              ))
            ) : (
              <p>No schools found.</p>
            )}
          </div>
        )}
      </div>

      <p>Rank in order of priority</p>

      <div className="match-quiz-schools-list">
        {selectedSchools.map((school, index) => (
          <div
            className="match-quiz-school-row"
            key={school}
            onDragOver={(event) => event.preventDefault()}
            onDrop={(event) => {
              event.preventDefault();
              if (draggedSchool) {
                moveSchool(draggedSchool, index);
              }
              setDraggedSchool(null);
            }}
          >
            <span>{index + 1}</span>
            <div className="match-quiz-school">
              <button
                type="button"
                className="match-quiz-school-handle"
                draggable
                aria-label={`Change priority for ${school}. Use up and down arrow keys.`}
                onDragStart={(event) => {
                  setDraggedSchool(school);
                  event.dataTransfer.effectAllowed = "move";
                  event.dataTransfer.setData("text/plain", school);
                }}
                onDragEnd={() => setDraggedSchool(null)}
                onKeyDown={(event) => {
                  if (event.key === "ArrowUp") {
                    event.preventDefault();
                    moveSchool(school, index - 1);
                  }
                  if (event.key === "ArrowDown") {
                    event.preventDefault();
                    moveSchool(school, index + 1);
                  }
                }}
              >
                <i className="bi bi-three-dots-vertical" aria-hidden="true"></i>
              </button>
              <span>{school}</span>
              <button
                type="button"
                className="match-quiz-school-remove"
                aria-label={`Remove ${school}`}
                onClick={() => removeSchool(school)}
              >
                <i className="bi bi-x" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MatchQuizSchools;
