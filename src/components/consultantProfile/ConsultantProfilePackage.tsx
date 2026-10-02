import "./ConsultantProfilePackage.css";

function ConsultantProfilePackage() {
  return (
    <div className="consultant-profile-package">
      <div className="consultant-profile-package-card">
        <span className="consultant-profile-package-label">Package #1</span>
        <h2>Full Personal Statement Package</h2>
      </div>

      <button type="button" className="consultant-profile-package-more">
        Scroll to see more
        <i className="bi bi-chevron-down" aria-hidden="true"></i>
      </button>
    </div>
  );
}

export default ConsultantProfilePackage;
