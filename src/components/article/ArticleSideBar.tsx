import "./ArticleSideBar.css";
import logo from "../../assets/logo.png";

function ArticleSideBar() {
  return (
    <aside className="article-sidebar">
      <div className="article-sidebar-about">
        <img src={logo} alt="Lawly logo" />
        <p>
          We are admissions consultants dedicated to helping you get into your
          dream school
        </p>
        <div className="article-sidebar-socials">
          <a href="#" aria-label="Instagram">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="#" aria-label="Facebook">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="#" aria-label="LinkedIn">
            <i className="bi bi-linkedin"></i>
          </a>
        </div>
      </div>
    </aside>
  );
}

export default ArticleSideBar;
