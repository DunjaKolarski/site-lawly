import "./ArticleContents.css";

function ArticleContents() {
  return (
    <nav className="article-contents" aria-label="Table of contents">
      <h4>Table of Contents</h4>
      <div className="article-contents-links">
        <a href="#introduction" className="article-contents-active">
          Introduction
        </a>
        <a href="#letters-purpose">Understanding the Letter's Purpose</a>
        <a href="#key-elements">Key Elements of an Effective Letter</a>
        <a href="#common-pitfalls">Common Pitfalls to Avoid</a>
        <span>Timing and Delivery</span>
        <span>FAQs: Clearing Common Doubts</span>
        <span>Beyond the Letter</span>
        <a href="#conclusion">Conclusion</a>
      </div>
    </nav>
  );
}

export default ArticleContents;
