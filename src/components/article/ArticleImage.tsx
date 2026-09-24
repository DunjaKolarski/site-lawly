import "./ArticleImage.css";
import articleImage from "../../assets/article.png";

function ArticleImage() {
  return (
    <div className="article-image">
      <img src={articleImage} alt="Person writing in a notebook" />
    </div>
  );
}

export default ArticleImage;
