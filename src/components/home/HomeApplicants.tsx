import "./HomeApplicants.css";
import useEmblaCarousel from "embla-carousel-react";

import profile1 from "../../assets/profile1.png";
import profile2 from "../../assets/profile2.png";
import profile3 from "../../assets/profile3.png";
import profile4 from "../../assets/profile4.png";
import profile5 from "../../assets/profile5.png";
import profile6 from "../../assets/profile6.png";
import profile7 from "../../assets/profile7.png";
import profile8 from "../../assets/profile8.png";

const applicants = [
  {
    id: 1,
    name: "Anonymous",
    date: "March 2025",
    service: "Personal Statement",
    review:
      "The session was focused and very helpful. I got clear feedback on what to improve and how to make my statement stronger.",
    coach: "Elizabeth M.",
    image: profile3,
  },
  {
    id: 2,
    name: "Anonymous",
    date: "March 2025",
    service: "Application Strategy",
    review:
      "I came into the session unsure about my application, but left with a much clearer plan and useful next steps.",
    coach: "Cynthia",
    image: profile5,
  },
  {
    id: 3,
    name: "Anonymous",
    date: "February 2025",
    service: "Interview Preparation",
    review:
      "We worked through the questions I was most worried about and the feedback helped me feel much more prepared.",
    coach: "Nathan",
    image: profile8,
  },
  {
    id: 4,
    name: "Anonymous",
    date: "February 2025",
    service: "Personal Statement",
    review:
      "The feedback was detailed but easy to understand. I knew exactly what changes I needed to make after the session.",
    coach: "Sara",
    image: profile1,
  },
  {
    id: 5,
    name: "Anonymous",
    date: "February 2025",
    service: "Application Review",
    review:
      "A really useful session with practical advice. We went through my application carefully and improved the weaker parts.",
    coach: "John",
    image: profile6,
  },
  {
    id: 6,
    name: "Anonymous",
    date: "January 2025",
    service: "Interview Preparation",
    review:
      "The session helped me organize my answers and explain my experience in a much clearer and more confident way.",
    coach: "Emma",
    image: profile2,
  },
  {
    id: 7,
    name: "Anonymous",
    date: "January 2025",
    service: "Application Strategy",
    review:
      "I received thoughtful advice and a clear strategy for improving my application. The whole session felt very productive.",
    coach: "Michael",
    image: profile4,
  },
  {
    id: 8,
    name: "Anonymous",
    date: "January 2025",
    service: "Personal Statement",
    review:
      "The comments were specific and useful, and they helped me make my writing more focused and convincing.",
    coach: "Olivia",
    image: profile7,
  },
];

function HomeApplicants() {
  const topApplicants = applicants.slice(0, 4);
  const bottomApplicants = applicants.slice(4, 8);

  const [topEmblaRef] = useEmblaCarousel({
    align: "center",
    dragFree: true,
  });

  const [bottomEmblaRef] = useEmblaCarousel({
    align: "center",
    dragFree: true,
  });

  return (
    <section className="home-applicants">
      <h2>What Our Applicants Say</h2>

      <p>
        We take immense pride in the positive impact our courses and community
        have on learners' lives.
      </p>

      <div className="home-applicants-say">
        <div className="home-applicants-viewport" ref={topEmblaRef}>
          <div className="home-applicants-row home-applicants-row-top">
            {topApplicants.map((applicant) => (
              <article className="home-applicant-card" key={applicant.id}>
                <div className="home-applicant-rating">
                  <h4>{applicant.name}</h4>
                  <span>★★★★★</span>
                </div>

                <p className="home-applicant-date">{applicant.date}</p>

                <p className="home-applicant-service">
                  Received help with: {applicant.service}
                </p>

                <p className="home-applicant-review">{applicant.review}</p>

                <div className="home-applicant-coach">
                  <img src={applicant.image} alt={applicant.coach} />
                  <span>Coached by {applicant.coach}</span>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="home-applicants-viewport" ref={bottomEmblaRef}>
          <div className="home-applicants-row home-applicants-row-bottom">
            {bottomApplicants.map((applicant) => (
              <article className="home-applicant-card" key={applicant.id}>
                <div className="home-applicant-rating">
                  <h4>{applicant.name}</h4>
                  <span>★★★★★</span>
                </div>

                <p className="home-applicant-date">{applicant.date}</p>

                <p className="home-applicant-service">
                  Received help with: {applicant.service}
                </p>

                <p className="home-applicant-review">{applicant.review}</p>

                <div className="home-applicant-coach">
                  <img src={applicant.image} alt={applicant.coach} />
                  <span>Coached by {applicant.coach}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeApplicants;
