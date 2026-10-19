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
import BookingSession from "../components/booking/BookingSession";
import BookingCheckout from "../components/booking/BookingCheckout";
import type { SelectedSlot } from "../components/booking/BookingSession";
import BookingConfirmation from "../components/booking/BookingConfirmation";
import BookingHours from "../components/booking/BookingHours";

function ConsultantProfile() {
  const [activeTab, setActiveTab] = useState("Bio");
  const [bookingStep, setBookingStep] = useState<
    "profile" | "times" | "hours" | "checkout" | "confirmation"
  >("profile");
  const [selectedSlot, setSelectedSlot] = useState<SelectedSlot | null>(null);
  const [bookingType, setBookingType] = useState<
    "strategy" | "hourly" | "package"
  >("strategy");
  const [sessionDuration, setSessionDuration] = useState(15);
  const [selectedHours, setSelectedHours] = useState(1);

  const isBookingOpen = bookingStep !== "profile";

  return (
    <>
      <EventsHeader />

      <div className="consultant-profile-layout">
        <EventsSideBar />

        <main className="consultant-profile-content">
          {bookingStep === "hours" && selectedSlot ? (
            <BookingHours
              selectedSlot={selectedSlot}
              sessionDuration={sessionDuration}
              selectedHours={selectedHours}
              onSelectHours={setSelectedHours}
              onBack={() => setBookingStep("times")}
              onNext={() => setBookingStep("checkout")}
            />
          ) : bookingStep === "confirmation" && selectedSlot ? (
            <BookingConfirmation
              bookingType={bookingType}
              sessionDuration={sessionDuration}
              selectedSlot={selectedSlot}
              onViewProfile={() => {
                setActiveTab("Bio");
                setBookingStep("profile");
              }}
            />
          ) : bookingStep === "checkout" && selectedSlot ? (
            <BookingCheckout
              bookingType={bookingType}
              sessionDuration={sessionDuration}
              selectedHours={selectedHours}
              consultantCredit={bookingType !== "strategy" ? 25 : 0}
              selectedSlot={selectedSlot}
              onBack={() =>
                setBookingStep(bookingType === "hourly" ? "hours" : "times")
              }
              onBook={() => setBookingStep("confirmation")}
            />
          ) : (
            <>
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
                          activeTab === tab
                            ? "consultant-profile-tab-active"
                            : ""
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
                  {bookingStep === "times" ? (
                    <BookingSession
                      bookingType={bookingType}
                      sessionDuration={sessionDuration}
                      onDurationChange={setSessionDuration}
                      selectedSlot={selectedSlot}
                      onSelectSlot={setSelectedSlot}
                      onBack={() => setBookingStep("profile")}
                      onNext={() => {
                        if (selectedSlot) {
                          setBookingStep(
                            bookingType === "hourly" ? "hours" : "checkout",
                          );
                        }
                      }}
                    />
                  ) : (
                    <>
                      <ConsultantProfileBooking />
                      <ConsultantProfileUpcoming />
                      <ConsultantProfileStrategy
                        onSeeTimes={() => {
                          setBookingType("strategy");
                          setSelectedSlot(null);
                          setSessionDuration(15);
                          setBookingStep("times");
                        }}
                      />

                      <ConsultantProfileConsulting
                        onSeeTimes={() => {
                          setBookingType("hourly");
                          setSelectedSlot(null);
                          setSessionDuration(15);
                          setSelectedHours(1);
                          setBookingStep("times");
                        }}
                      />
                      <ConsultantProfilePackage
                        onSeeTimes={() => {
                          setBookingType("package");
                          setSelectedSlot(null);
                          setSessionDuration(30);
                          setBookingStep("times");
                        }}
                      />
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
