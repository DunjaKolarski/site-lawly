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
import ConsultantProfileResume from "../components/consultantProfile/ConsultantProfileResume";
import ConsultantProfileReviews from "../components/consultantProfile/ConsultantProfileReviews";
import ConsultantProfileUpcoming from "../components/consultantProfile/ConsultantProfileUpcoming";
import Footer from "../components/layout/Footer";
import ConsultantProfileStickyBar from "../components/consultantProfile/ConsultantProfileStickyBar";
import BookingStrategy from "../components/booking/BookingStrategy";

function ConsultantProfile() {
  const [activeTab, setActiveTab] = useState("Bio");
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  return (
    <>
      <EventsHeader />
      <div className="consultant-profile-layout">
        <EventsSideBar />
        <main className="consultant-profile-content">
          <div
            className={
              isBookingOpen
                ? "consultant-profile-top consultant-profile-top-booking"
                : "consultant-profile-top"
            }
          >
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
              {activeTab === "Resume" && <ConsultantProfileResume />}
              {activeTab === "Reviews" && <ConsultantProfileReviews />}
            </div>
            <div className="consultant-profile-offers">
              {isBookingOpen ? (
                <BookingStrategy onBack={() => setIsBookingOpen(false)} />
              ) : (
                <>
                  <ConsultantProfileBooking />
                  <ConsultantProfileUpcoming />
                  <ConsultantProfileStrategy
                    onSeeTimes={() => setIsBookingOpen(true)}
                  />
                  <ConsultantProfileConsulting />
                  <ConsultantProfilePackage />
                </>
              )}
            </div>
          </div>
          {!isBookingOpen && (
            <>
              <div className="consultant-profile-resources">
                <h2>
                  Cynthia's Free Events &amp;{" "}
                  <span className="consultant-profile-resources-desktop-label">
                    Articles
                  </span>
                  <span className="consultant-profile-resources-mobile-label">
                    Resources
                  </span>
                </h2>
                <ConsultantProfileEvents />
                <ConsultantProfileArticles />
              </div>

              <ConsultantProfileFAQ />
            </>
          )}
        </main>
      </div>
      <Footer />
      {!isBookingOpen && <ConsultantProfileStickyBar />}
    </>
  );
}

export default ConsultantProfile;
