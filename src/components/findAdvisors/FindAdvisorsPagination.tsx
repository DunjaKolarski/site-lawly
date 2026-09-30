import "./FindAdvisorsPagination.css";

type FindAdvisorsPaginationProps = {
  page: number;
  setPage: (page: number) => void;
};

function FindAdvisorsPagination({
  page,
  setPage,
}: FindAdvisorsPaginationProps) {
  const totalPages = 10;

  const pages =
    page <= 3
      ? [1, 2, 3, 4, 5]
      : page >= 8
        ? [6, 7, 8, 9, 10]
        : [page - 2, page - 1, page, page + 1, page + 2];

  return (
    <nav className="find-advisors-pagination" aria-label="Consultants pages">
      {page > 1 && (
        <button
          type="button"
          aria-label="Previous page"
          onClick={() => setPage(page - 1)}
        >
          <i className="bi bi-chevron-left" aria-hidden="true"></i>
        </button>
      )}

      {pages[0] > 1 && (
        <>
          <button type="button" onClick={() => setPage(1)}>
            1
          </button>
          {pages[0] > 2 && <span>...</span>}
        </>
      )}

      {pages.map((number) => (
        <button
          key={number}
          type="button"
          className={page === number ? "find-advisors-page-active" : ""}
          aria-current={page === number ? "page" : undefined}
          onClick={() => setPage(number)}
        >
          {number}
        </button>
      ))}

      {pages[pages.length - 1] < totalPages && (
        <>
          {pages[pages.length - 1] < totalPages - 1 && <span>...</span>}
          <button type="button" onClick={() => setPage(totalPages)}>
            {totalPages}
          </button>
        </>
      )}

      {page < totalPages && (
        <button
          type="button"
          aria-label="Next page"
          onClick={() => setPage(page + 1)}
        >
          <i className="bi bi-chevron-right" aria-hidden="true"></i>
        </button>
      )}
    </nav>
  );
}

export default FindAdvisorsPagination;
