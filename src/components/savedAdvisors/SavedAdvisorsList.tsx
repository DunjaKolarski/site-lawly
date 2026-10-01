import "./SavedAdvisorsList.css";
import { useState } from "react";
import FindAdvisorsCard from "../findAdvisors/FindAdvisorsCard";
import { initialSavedConsultants } from "../findAdvisors/savedConsultants";

function SavedAdvisorsList() {
  const [consultants, setConsultants] = useState(initialSavedConsultants);

  function removeConsultant(id: number) {
    setConsultants((previous) =>
      previous.filter((consultant) => consultant.id !== id),
    );
  }

  return (
    <div className="saved-advisors-list">
      {consultants.length === 0 ? (
        <p className="saved-advisors-empty">No saved consultants yet.</p>
      ) : (
        consultants.map((consultant) => (
          <FindAdvisorsCard
            key={consultant.id}
            image={consultant.image}
            name={consultant.name}
            badge={consultant.badge}
            rating={consultant.rating}
            reviews={consultant.reviews}
            description={consultant.description}
            price={consultant.price}
            isSaved
            onSaveToggle={() => removeConsultant(consultant.id)}
          />
        ))
      )}
    </div>
  );
}

export default SavedAdvisorsList;
