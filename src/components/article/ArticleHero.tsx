import "./ArticleHero.css";
import authorImage from "../../assets/profile2.png";

function ArticleHero() {
  return (
    <section className="article-hero">
      <div className="article-hero-container">
        <h1>
          <span className="article-hero-title-desktop">
            How to Write an Outstanding and Compelling Medical School Letter of
            Intent
          </span>
          <span className="article-hero-title-mobile">
            High-Yield Articles, Guides, and Question Banks
          </span>
        </h1>
        <div className="article-hero-author">
          <p>By:</p>
          <img src={authorImage} alt="Cynthia L." />
          <span>Cynthia L.</span>
        </div>
      </div>
    </section>
  );
}

export default ArticleHero;
