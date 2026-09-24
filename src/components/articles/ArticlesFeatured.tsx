import "./ArticlesFeatured.css";
import useEmblaCarousel from "embla-carousel-react";
import ArticlesCard from "./ArticlesCard";

function ArticlesFeatured() {
  const [emblaRef] = useEmblaCarousel({
    active: false,
    align: "start",
    dragFree: true,
    breakpoints: {
      "(max-width: 767px)": {
        active: true,
      },
    },
  });

  return (
    <section className="articles-featured">
      <h2>Featured Resources</h2>

      <div className="articles-featured-scroll" ref={emblaRef}>
        <div className="articles-featured-cards">
          <ArticlesCard />
          <ArticlesCard />
          <ArticlesCard />
          <ArticlesCard />
        </div>
      </div>
    </section>
  );
}

export default ArticlesFeatured;
