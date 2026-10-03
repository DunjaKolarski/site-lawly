import "./ConsultantProfileReviewsList.css";
import { useState } from "react";
import columbia from "../../assets/columbia-resume.png";
import cornell from "../../assets/cornell-resume.png";

const reviews = [
  {
    id: 1,
    name: "Emily",
    date: "March 2025",
    service: "Received help with: Personal Statement",
    text: "Fantastic session! We focused only on the items I needed to improve before my interview. I highly recommend Cynthia!",
    accepted: true,
  },
  {
    id: 2,
    name: "Addison",
    date: "February 2025",
    service:
      "Received help with: Personal Statement, School Specific Essay, Addenda",
    text: "Fantastic session! We focused only on the items I needed to improve before my interview. I highly recommend Cynthia!",
    accepted: false,
  },
  {
    id: 3,
    name: "Anonymous",
    date: "February 2025",
    service: "Purchased: Full Personal Statement Package",
    text: "Amazing session! We focused only on the items I needed to improve before my interview. I highly recommend Cynthia! She also helped me edit and perfect my personal statement and give me the best tips for interview prep.",
    accepted: false,
  },
];

const allReviews = Array.from({ length: 30 }, (_, index) => ({
  ...reviews[index % reviews.length],
  id: index + 1,
}));

const ownReview = {
  id: 0,
  name: "Natasha",
  date: "March 2025",
  service: "Received help with: Personal Statement",
  text: "Fantastic session! We focused only on the items I needed to improve before my interview. I highly recommend Cynthia!",
  accepted: true,
};

type ConsultantProfileReviewsListProps = {
  reviewStatus: "no-session" | "can-review" | "reviewed";
};

function ConsultantProfileReviewsList({
  reviewStatus,
}: ConsultantProfileReviewsListProps) {
  const [page, setPage] = useState(1);
  const [showFilter, setShowFilter] = useState(true);
  const [visibleCount, setVisibleCount] = useState(3);
  const usePagination = reviewStatus === "no-session";

  const reviewsForStatus =
    reviewStatus === "reviewed"
      ? [ownReview, ...allReviews.slice(0, 29)]
      : allReviews;

  const reviewsPerPage = 3;
  const totalPages = Math.ceil(reviewsForStatus.length / reviewsPerPage);
  const startIndex = (page - 1) * reviewsPerPage;

  const displayedReviews = usePagination
    ? reviewsForStatus.slice(startIndex, startIndex + reviewsPerPage)
    : reviewsForStatus.slice(0, visibleCount);
  const firstPage = Math.max(1, Math.min(page - 2, totalPages - 4));
  const pages = Array.from(
    { length: Math.min(5, totalPages) },
    (_, index) => firstPage + index,
  );

  return (
    <div className="consultant-profile-reviews-list">
      <div className="consultant-profile-reviews-controls">
        <div className="consultant-profile-reviews-search-group">
          <div className="consultant-profile-reviews-search">
            <i className="bi bi-search" aria-hidden="true"></i>
            <input
              type="search"
              placeholder="Search reviews"
              aria-label="Search reviews"
            />
          </div>

          {showFilter && (
            <div className="consultant-profile-reviews-filter">
              <span>Filtering by: 5 stars</span>
              <button type="button" onClick={() => setShowFilter(false)}>
                Clear All
              </button>
            </div>
          )}
        </div>

        <div className="consultant-profile-reviews-service">
          <select aria-label="Filter reviews by service" defaultValue="all">
            <option value="all">All Services</option>
            <option value="personal-statement">Personal Statement</option>
            <option value="school-essay">School Specific Essay</option>
            <option value="addenda">Addenda</option>
            <option value="package">Full Personal Statement Package</option>
          </select>
        </div>
      </div>

      <div className="consultant-profile-reviews-entries">
        {displayedReviews.map((review) => (
          <article
            key={review.id}
            className={
              review.id === 0
                ? "consultant-profile-reviews-entry consultant-profile-reviews-entry-own"
                : "consultant-profile-reviews-entry"
            }
          >
            <div className="consultant-profile-reviews-entry-heading">
              <h3>{review.name}</h3>
              <span aria-label="5 out of 5 stars">★★★★★</span>
              {review.id === 0 && (
                <button
                  type="button"
                  className="consultant-profile-reviews-edit"
                >
                  Edit
                </button>
              )}
            </div>

            <p className="consultant-profile-reviews-entry-meta">
              {review.date}
            </p>
            <p className="consultant-profile-reviews-entry-meta">
              {review.service}
            </p>
            <p className="consultant-profile-reviews-entry-text">
              {review.text}
            </p>

            {review.accepted && (
              <div className="consultant-profile-reviews-entry-schools">
                <p>{review.name} was accepted to:</p>
                <ul>
                  <li>
                    <img src={columbia} alt="" />
                    Columbia Law School
                  </li>
                  <li>
                    <img src={cornell} alt="" />
                    Cornell Law School
                  </li>
                </ul>
              </div>
            )}
          </article>
        ))}
      </div>

      {usePagination && (
        <nav
          className="consultant-profile-reviews-pagination"
          aria-label="Reviews pages"
        >
          {page > 1 && (
            <button
              type="button"
              aria-label="Previous page"
              onClick={() => setPage(page - 1)}
            >
              <i className="bi bi-chevron-left" aria-hidden="true"></i>
            </button>
          )}

          {firstPage > 1 && (
            <>
              <button type="button" onClick={() => setPage(1)}>
                1
              </button>
              {firstPage > 2 && <span>...</span>}
            </>
          )}

          {pages.map((number) => (
            <button
              key={number}
              type="button"
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
      )}
      {!usePagination && visibleCount < reviewsForStatus.length && (
        <button
          type="button"
          className="consultant-profile-reviews-view-more"
          onClick={() =>
            setVisibleCount((count) =>
              Math.min(count + 3, reviewsForStatus.length),
            )
          }
        >
          View More
        </button>
      )}
    </div>
  );
}

export default ConsultantProfileReviewsList;
