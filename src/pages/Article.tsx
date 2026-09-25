import "./Article.css";
import Header from "../components/layout/Header";
import ArticleHero from "../components/article/ArticleHero";
import ArticleImage from "../components/article/ArticleImage";
import ArticleContents from "../components/article/ArticleContents";
import ArticleOverview from "../components/article/ArticleOverview";
import ArticleConsultants from "../components/article/ArticleConsultants";
import ArticleOverviewSecondPart from "../components/article/ArticleOverviewSecondPart";
import ArticleSideBar from "../components/article/ArticleSideBar";
import Footer from "../components/layout/Footer";

function Article() {
  return (
    <>
      <Header />
      <main>
        <ArticleHero />
        <div className="article-container">
          <div className="article-main-content">
            <ArticleImage />
            <div className="article-mobile-contents">
              <ArticleContents />
            </div>
            <div className="article-text-scroll">
              <ArticleOverview />
              <ArticleOverviewSecondPart />
            </div>
            <ArticleConsultants />
            <div className="article-mobile-summary">
              <h4>Understanding the Letter's Purpose</h4>
              <p>
                Yet, drafting a Letter of Intent that resonates is more of an
                art than an exact science. We're diving deep into the nuances of
                this critical document, shedding light on its purpose, key
                elements, and pitfalls to sidestep. Whether you're attempting to
                pen
              </p>
            </div>
          </div>
          <ArticleSideBar />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Article;
