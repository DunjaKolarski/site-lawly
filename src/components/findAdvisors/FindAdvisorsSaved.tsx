import "./FindAdvisorsSaved.css";
import useEmblaCarousel from "embla-carousel-react";
import FindAdvisorsCard from "./FindAdvisorsCard";
import type { SavedConsultant } from "./savedConsultants";

type FindAdvisorsSavedProps = {
  consultants: SavedConsultant[];
  onRemove: (id: number) => void;
  onClose: () => void;
  onViewAll?: () => void;
};

function FindAdvisorsSaved({
  consultants,
  onRemove,
  onClose,
  onViewAll,
}: FindAdvisorsSavedProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    slidesToScroll: 1,
  });

  return (
    <section className="find-advisors-saved">
      <button
        type="button"
        className="find-advisors-saved-close"
        aria-label="Hide saved consultants"
        onClick={onClose}
      >
        <i className="bi bi-x" aria-hidden="true"></i>
      </button>

      <div className="find-advisors-saved-content">
        <h4>Saved Consultants</h4>

        <div className="find-advisors-saved-carousel">
          <button
            type="button"
            className="find-advisors-saved-arrow find-advisors-saved-prev"
            aria-label="Previous saved consultants"
            onClick={() => emblaApi?.scrollPrev()}
          >
            <i className="bi bi-chevron-left" aria-hidden="true"></i>
          </button>

          <div className="find-advisors-saved-viewport" ref={emblaRef}>
            <div className="find-advisors-saved-track">
              {consultants.map((consultant) => (
                <div className="find-advisors-saved-slide" key={consultant.id}>
                  <FindAdvisorsCard
                    image={consultant.image}
                    name={consultant.name}
                    badge={consultant.badge}
                    rating={consultant.rating}
                    reviews={consultant.reviews}
                    description={consultant.description}
                    price={consultant.price}
                    isSaved
                    onSaveToggle={() => onRemove(consultant.id)}
                  />
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            className="find-advisors-saved-arrow find-advisors-saved-next"
            aria-label="Next saved consultants"
            onClick={() => emblaApi?.scrollNext()}
          >
            <i className="bi bi-chevron-right" aria-hidden="true"></i>
          </button>
        </div>

        <button
          type="button"
          className="find-advisors-saved-view-all"
          onClick={onViewAll}
        >
          View All Saved Consultants
        </button>
      </div>
    </section>
  );
}

export default FindAdvisorsSaved;
