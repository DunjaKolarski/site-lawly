import "./ArticlesFeatured.css";
import ArticlesCard from "./ArticlesCard";

function ArticlesFeatured() {
  return (
    <section className="articles-featured">
      <h2>Featured Resources</h2>
      <div className="articles-featured-cards">
        <ArticlesCard />
        <ArticlesCard />
        <ArticlesCard />
        <ArticlesCard />
      </div>
    </section>
  );
}

export default ArticlesFeatured;
