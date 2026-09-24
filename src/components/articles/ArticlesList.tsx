import "./ArticlesList.css";
import { useState } from "react";
import ArticlesCard from "./ArticlesCard";

const articles = Array.from({ length: 120 }, (_, index) => ({
  id: index + 1,
}));

function ArticlesList() {
  const [page, setPage] = useState(1);
  const articlesPerPage = 12;
  const startIndex = (page - 1) * articlesPerPage;
  const currentArticles = articles.slice(
    startIndex,
    startIndex + articlesPerPage,
  );

  return (
    <section className="articles-list">
      <div className="articles-list-container">
        {currentArticles.map((article) => (
          <ArticlesCard key={article.id} />
        ))}
      </div>

      <div className="articles-pagination">
        {page > 1 && (
          <button
            type="button"
            aria-label="Previous page"
            onClick={() => setPage(page - 1)}
          >
            <i className="bi bi-chevron-left"></i>
          </button>
        )}

        {page > 5 && (
          <>
            <button type="button" onClick={() => setPage(1)}>
              1
            </button>
            <button
              type="button"
              aria-label="Show pages 1 to 5"
              onClick={() => setPage(5)}
            >
              ...
            </button>
          </>
        )}

        {(page <= 5 ? [1, 2, 3, 4, 5] : [6, 7, 8, 9, 10]).map((number) => (
          <button
            key={number}
            type="button"
            className={page === number ? "articles-page-active" : ""}
            aria-current={page === number ? "page" : undefined}
            onClick={() => setPage(number)}
          >
            {number}
          </button>
        ))}

        {page <= 5 && (
          <>
            <button
              type="button"
              aria-label="Show pages 6 to 10"
              onClick={() => setPage(6)}
            >
              ...
            </button>
            <button type="button" onClick={() => setPage(10)}>
              10
            </button>
          </>
        )}

        {page < 10 && (
          <button
            type="button"
            aria-label="Next page"
            onClick={() => setPage(page + 1)}
          >
            <i className="bi bi-chevron-right"></i>
          </button>
        )}
      </div>
    </section>
  );
}

export default ArticlesList;
