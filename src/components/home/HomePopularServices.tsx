import useEmblaCarousel from "embla-carousel-react";
import "./HomePopularServices.css";

const popularServices = [
  {
    id: 1,
    icon: "bi bi-people-fill",
    title: "General Consultation",
    description:
      "Ask a consultant questions about their academic pathway and ask questions specific to your situation.",
  },
  {
    id: 2,
    icon: "bi bi-person-raised-hand",
    title: "Interview Preparation",
    description:
      "Prepare with a consultant for any interview type (traditional, MMI, recorded answers, etc.)",
  },
  {
    id: 3,
    icon: "bi bi-pencil-fill",
    title: "Personal Statement Editing",
    description:
      "Get your statements perfected and edited for content and competitiveness.",
  },
  {
    id: 4,
    icon: "bi bi-mortarboard-fill",
    title: "Scholarship Assistance",
    description:
      "We review your scholarship applications to maximize your chances of winning.",
  },
  {
    id: 5,
    icon: "bi bi-grid-fill",
    title: "Application Editing",
    description:
      "Get any component of your application edited, including essay questions, resumes, and more.",
  },
  {
    id: 6,
    icon: "bi bi-person-video3",
    title: "Tutoring",
    description:
      "Receive tutoring for any subject and for standardized tests like the MCAT, DAT etc.",
  },
];

function HomePopularServices() {
  const [emblaRef] = useEmblaCarousel({
    align: "start",
    dragFree: true,
  });

  return (
    <section className="home-popular-services">
      <h2>Popular Services</h2>

      <div className="home-services-scroll" ref={emblaRef}>
        <div className="home-services-container">
          {popularServices.map((service) => (
            <article className="home-service-card" key={service.id}>
              <i className={service.icon}></i>

              <h6>{service.title}</h6>

              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomePopularServices;
