import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import "./HomeFeaturedConsultants.css";

import profile1 from "../../assets/profile1.png";
import profile2 from "../../assets/profile2.png";
import profile3 from "../../assets/profile3.png";
import profile4 from "../../assets/profile4.png";
import profile5 from "../../assets/profile5.png";
import profile6 from "../../assets/profile6.png";
import profile7 from "../../assets/profile7.png";
import profile8 from "../../assets/profile8.png";

const consultants = [
  {
    id: 1,
    image: profile3,
    badge: "AdComm",
    name: "Elizabeth M.",
    rating: 4.8,
    reviews: 15,
    university: "Yale",
    company: "",
    description:
      "Former admissions reader and Yale Law grad—insider tips to perfect your application.",
    price: "$70/hour",
  },
  {
    id: 2,
    image: profile5,
    badge: "Pro",
    name: "Cynthia L.",
    rating: 4.8,
    reviews: 10,
    university: "Yale",
    company: "Sullivan Cromwell",
    description:
      "Former admissions reader and Yale Law grad—insider tips to perfect your application.",
    price: "$50/hour",
  },
  {
    id: 3,
    image: profile8,
    badge: "Insider",
    name: "Nathan",
    rating: 4.8,
    reviews: 15,
    university: "Yale",
    company: "Sullivan Cromwell",
    description:
      "Former admissions reader and Yale Law grad—insider tips to perfect your application.",
    price: "$70/hour",
  },
  {
    id: 4,
    image: profile1,
    badge: "AdComm",
    name: "Sara",
    rating: 4.7,
    reviews: 78,
    university: "Yale",
    company: "Sullivan Cromwell",
    description:
      "Former admissions reader and Yale Law grad—insider tips to perfect your application.",
    price: "$50/hour",
  },
  {
    id: 5,
    image: profile6,
    badge: "AdComm",
    name: "John D.",
    rating: 4.9,
    reviews: 21,
    university: "Harvard",
    company: "",
    description:
      "Experienced admissions consultant helping students build competitive applications.",
    price: "$80/hour",
  },
  {
    id: 6,
    image: profile2,
    badge: "Pro",
    name: "Emma R.",
    rating: 4.9,
    reviews: 31,
    university: "Stanford",
    company: "Google",
    description:
      "Application strategist with years of mentoring experience for graduate programs.",
    price: "$75/hour",
  },
  {
    id: 7,
    image: profile4,
    badge: "Insider",
    name: "Michael T.",
    rating: 4.8,
    reviews: 24,
    university: "Columbia",
    company: "McKinsey",
    description:
      "Former admissions interviewer focused on interview preparation and essays.",
    price: "$65/hour",
  },
  {
    id: 8,
    image: profile7,
    badge: "Pro",
    name: "Olivia K.",
    rating: 5.0,
    reviews: 42,
    university: "Oxford",
    company: "BCG",
    description:
      "Helping applicants craft standout applications with personalized guidance.",
    price: "$90/hour",
  },
];

function HomeFeaturedConsultants() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    dragFree: false,
  });

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  return (
    <section className="home-featured-consultants">
      <h2>Featured Consultants</h2>

      <div className="home-consultants-carousel">
        <button
          className="home-consultants-arrow home-consultants-arrow-left"
          type="button"
          onClick={scrollPrev}
          aria-label="Previous consultants"
        >
          <i className="bi bi-chevron-left"></i>
        </button>

        <div className="home-consultants-scroll" ref={emblaRef}>
          <div className="home-consultants-container">
            {consultants.map((consultant) => (
              <article className="home-consultant-card" key={consultant.id}>
                <div className="home-consultant-image">
                  <img src={consultant.image} alt={consultant.name} />

                  <i className="bi bi-heart home-heart-icon"></i>

                  <span
                    className={`home-badge home-badge-${consultant.badge.toLowerCase()}`}
                  >
                    {consultant.badge}
                  </span>
                </div>

                <div className="home-consultant-content">
                  <div className="home-consultant-header">
                    <h5>{consultant.name}</h5>

                    <div className="home-consultant-rating">
                      <span className="home-rating-star">★</span>

                      <span className="home-rating-value">
                        {consultant.rating}
                      </span>

                      <span className="home-rating-reviews">
                        ({consultant.reviews})
                      </span>
                    </div>
                  </div>

                  <p className="home-consultant-university">
                    {consultant.university}
                  </p>

                  <p className="home-consultant-university">
                    {consultant.company || "\u00A0"}
                  </p>

                  <p className="home-consultant-description">
                    {consultant.description}
                  </p>

                  <strong>{consultant.price}</strong>
                </div>
              </article>
            ))}
          </div>
        </div>

        <button
          className="home-consultants-arrow home-consultants-arrow-right"
          type="button"
          onClick={scrollNext}
          aria-label="Next consultants"
        >
          <i className="bi bi-chevron-right"></i>
        </button>
      </div>

      <button className="primary-button">View all consultants</button>
    </section>
  );
}

export default HomeFeaturedConsultants;
