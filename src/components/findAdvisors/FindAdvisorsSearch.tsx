import "./FindAdvisorsSearch.css";
import { useState } from "react";

const tabs = ["All", "Insider", "Pro", "AdComm"];

function FindAdvisorsSearch() {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <div className="find-advisors-search">
      <div className="find-advisors-search-field">
        <i className="bi bi-search" aria-hidden="true"></i>
        <input
          type="search"
          placeholder="Search for anything"
          aria-label="Search consultants"
        />
      </div>

      <div className="find-advisors-tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            className={activeTab === tab ? "find-advisors-tab-active" : ""}
            aria-pressed={activeTab === tab}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}

export default FindAdvisorsSearch;
