import "./ConsultantProfileArticles.css";
import useEmblaCarousel from "embla-carousel-react";
import ArticlesCard from "../articles/ArticlesCard";

function ConsultantProfileArticles() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    slidesToScroll: 1,
    loop: true,
  });

  return (
    <div className="consultant-profile-articles">
      <h3>Articles</h3>

      <div className="consultant-profile-articles-carousel">
        <div className="consultant-profile-articles-viewport" ref={emblaRef}>
          <div className="consultant-profile-articles-track">
            {[1, 2, 3, 4, 5, 6].map((id) => (
              <div className="consultant-profile-articles-slide" key={id}>
                <ArticlesCard />
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          className="consultant-profile-articles-next"
          aria-label="Next articles"
          onClick={() => emblaApi?.scrollNext()}
        >
          <i className="bi bi-chevron-right" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
}

export default ConsultantProfileArticles;
