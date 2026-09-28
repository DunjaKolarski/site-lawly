import "./MatchQuizServices.css";

const services = [
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
];

type MatchQuizServicesProps = {
  selectedServices: string[];
  onServicesChange: (services: string[]) => void;
};

function MatchQuizServices({
  selectedServices,
  onServicesChange,
}: MatchQuizServicesProps) {
  function toggleService(service: string) {
    if (selectedServices.includes(service)) {
      onServicesChange(selectedServices.filter((item) => item !== service));
      return;
    }

    onServicesChange([...selectedServices, service]);
  }

  return (
    <div className="match-quiz-services">
      <p>What would you like help with?</p>
      <div className="match-quiz-services-options">
        {services.map((service) => {
          const isSelected = selectedServices.includes(service);

          return (
            <button
              key={service}
              type="button"
              className={isSelected ? "match-quiz-services-selected" : ""}
              aria-pressed={isSelected}
              onClick={() => toggleService(service)}
            >
              {service}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default MatchQuizServices;
