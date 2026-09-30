import "./FindAdvisorsPagination.css";

type FindAdvisorsPaginationProps = {
  page: number;
  setPage: (page: number) => void;
  totalPages: number;
};

function FindAdvisorsPagination({
  page,
  setPage,
  totalPages,
}: FindAdvisorsPaginationProps) {
  const firstPage = Math.max(1, Math.min(page - 2, totalPages - 4));

  const pages = Array.from(
    { length: Math.min(5, totalPages) },
    (_, index) => firstPage + index,
  );

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
