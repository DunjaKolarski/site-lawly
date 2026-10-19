import "./ConsultantProfilePackage.css";

type ConsultantProfilePackageProps = {
  onSeeTimes: () => void;
};

function ConsultantProfilePackage({
  onSeeTimes,
}: ConsultantProfilePackageProps) {
  return (
    <div className="consultant-profile-package">
      <div className="consultant-profile-package-card">
        <span className="consultant-profile-package-label">Package #1</span>
        <h2>
          <button type="button" onClick={onSeeTimes}>
            Full Personal Statement Package
          </button>
        </h2>
      </div>

      <button type="button" className="consultant-profile-package-more">
        Scroll to see more
        <i className="bi bi-chevron-down" aria-hidden="true"></i>
      </button>
    </div>
  );
}

export default ConsultantProfilePackage;
