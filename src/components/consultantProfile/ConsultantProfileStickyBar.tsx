import "./ConsultantProfileStickyBar.css";

function ConsultantProfileStickyBar() {
  return (
    <div className="consultant-profile-sticky-space">
      <div className="consultant-profile-sticky-bar">
        <div className="consultant-profile-sticky-info">
          <strong>$66/hour</strong>

          <div className="consultant-profile-sticky-rating">
            <span aria-label="Rating">★</span>
            <span>5.0</span>
            <small>(10)</small>
          </div>
        </div>

        <button type="button" className="primary-button">
          See Offerings
        </button>
      </div>
    </div>
  );
}

export default ConsultantProfileStickyBar;
