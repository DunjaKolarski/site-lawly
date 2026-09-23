import "./Articles.css";
import { Link } from "react-router-dom";
import Header from "../components/layout/Header";
import ArticlesHero from "../components/articles/ArticlesHero";
import Footer from "../components/layout/Footer";

function Articles() {
  return (
    <>
      <div className="articles-announcement">
        <Link to="/find-consultant">
          Click here to see Consultants who can help you with applications,
          interview prep and more!
        </Link>
      </div>

      <Header />

      <main>
        <ArticlesHero />
      </main>

      <Footer />
    </>
  );
}

export default Articles;
