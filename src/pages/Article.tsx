import "./Article.css";
import Header from "../components/layout/Header";
import ArticleHero from "../components/article/ArticleHero";
import ArticleImage from "../components/article/ArticleImage";
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
          </div>
          <ArticleSideBar />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Article;
