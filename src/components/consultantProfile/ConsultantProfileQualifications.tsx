import "./ConsultantProfileQualifications.css";
import yale from "../../assets/logo-det-1.png";
import stanford from "../../assets/logo-det-2.png";
import harvard from "../../assets/logo-det-3.png";
import cornell from "../../assets/logo-det-4.png";
import duke from "../../assets/logo-det-5.png";
import northwestern from "../../assets/logo-det-6.png";
import penn from "../../assets/logo-det-7.png";

const schools = [
  { name: "Yale", image: yale },
  { name: "Stanford", image: stanford },
  { name: "Harvard", image: harvard },
  { name: "Cornell", image: cornell },
  { name: "Duke", image: duke },
  { name: "Northwestern", image: northwestern },
  { name: "University of Pennsylvania", image: penn },
];

function ConsultantProfileQualifications() {
  return (
    <div className="consultant-profile-qualifications">
      <h2>Qualifications</h2>

      <div className="consultant-profile-qualifications-content">
        <strong>Advised X+ Law School Applicants</strong>
        <p>Has helped clients get into these schools:</p>

        <div className="consultant-profile-schools">
          {schools.map((school) => (
            <img key={school.name} src={school.image} alt={school.name} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ConsultantProfileQualifications;
