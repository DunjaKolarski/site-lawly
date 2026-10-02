import "./ConsultantProfile.css";
import { useState } from "react";
import EventsHeader from "../components/events/EventsHeader";
import EventsSideBar from "../components/events/EventsSideBar";
import ConsultantProfileHero from "../components/consultantProfile/ConsultantProfileHero";
import ConsultantProfileBio from "../components/consultantProfile/ConsultantProfileBio";
import ConsultantProfileQualifications from "../components/consultantProfile/ConsultantProfileQualifications";
import ConsultantProfileClientReviews from "../components/consultantProfile/ConsultantProfileClientReviews";
import ConsultantProfileBooking from "../components/consultantProfile/ConsultantProfileBooking";
import ConsultantProfileStrategy from "../components/consultantProfile/ConsultantProfileStrategy";
import ConsultantProfileConsulting from "../components/consultantProfile/ConsultantProfileConsulting";
import ConsultantProfilePackage from "../components/consultantProfile/ConsultantProfilePackage";
import ConsultantProfileEvents from "../components/consultantProfile/ConsultantProfileEvents";
import ConsultantProfileArticles from "../components/consultantProfile/ConsultantProfileArticles";
import ConsultantProfileFAQ from "../components/consultantProfile/ConsultantProfileFAQ";
import Footer from "../components/layout/Footer";

function ConsultantProfile() {
  const [activeTab, setActiveTab] = useState("Bio");
  return (
    <>
      <EventsHeader />
      <div className="consultant-profile-layout">
        <EventsSideBar />
        <main className="consultant-profile-content">
          <div className="consultant-profile-top">
            <div className="consultant-profile-main">
              <ConsultantProfileHero />

              <div className="consultant-profile-tabs">
                {["Bio", "Resume", "Reviews"].map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    className={
                      activeTab === tab ? "consultant-profile-tab-active" : ""
                    }
                    aria-pressed={activeTab === tab}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {activeTab === "Bio" && (
                <>
                  <ConsultantProfileBio />
                  <ConsultantProfileQualifications />
                  <ConsultantProfileClientReviews
                    onSeeAll={() => setActiveTab("Reviews")}
                  />
                </>
              )}
            </div>
            <div className="consultant-profile-offers">
              <ConsultantProfileBooking />
              <ConsultantProfileStrategy />
              <ConsultantProfileConsulting />
              <ConsultantProfilePackage />
            </div>
          </div>
          <div className="consultant-profile-resources">
            <h2>Cynthia's Free Events &amp; Articles</h2>
            <ConsultantProfileEvents />
            <ConsultantProfileArticles />
          </div>

          <ConsultantProfileFAQ />
        </main>
      </div>
      <Footer />
    </>
  );
}

export default ConsultantProfile;
