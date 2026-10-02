import "./ConsultantProfileResume.css";
import harvard from "../../assets/harvard-resume.png";
import newJersey from "../../assets/new-jersey-resume.png";
import columbia from "../../assets/columbia-resume.png";
import cornell from "../../assets/cornell-resume.png";
import seton from "../../assets/seton-resume.png";
import washington from "../../assets/washington-resume.png";
import nyu from "../../assets/nyc-resume.png";
import associate from "../../assets/associate-resume.png";
import analyst from "../../assets/analist-resume.png";
import simpson from "../../assets/simpson-resume.png";
import weil from "../../assets/weil-resume.png";
import cahill from "../../assets/cahill-resume.png";
import baker from "../../assets/baker-resume.png";

function ConsultantProfileResume() {
  return (
    <section className="consultant-profile-resume">
      <h2>Education</h2>

      <div className="consultant-profile-resume-item">
        <div className="consultant-profile-resume-school">
          <img src={harvard} alt="" />
          <h3>Harvard Law School</h3>
        </div>

        <p className="consultant-profile-resume-details">
          J.D. · June 2022 - Present
        </p>

        <p className="consultant-profile-resume-description">
          I earned my Juris Doctorate (J.D.) degree from Harvard Law School. I
          applied to law school with no career coaching, LSAT classes/tutoring,
          pre-law program/consultants, or mentors. I navigated the law school
          application process on my own and want to help the next generation get
          admitted into their dream schools!
        </p>
      </div>

      <div className="consultant-profile-resume-item">
        <div className="consultant-profile-resume-school">
          <img src={newJersey} alt="" />
          <h3>New Jersey Institute of Technology</h3>
        </div>

        <p className="consultant-profile-resume-details">
          B.S., Business Management · June 2018 - June 2022
        </p>

        <p className="consultant-profile-resume-description">
          GPA: 4.00; President's Scholar, Full merit scholarship
        </p>
      </div>

      <div className="consultant-profile-resume-accepted">
        <p>Cynthia was also accepted to:</p>

        <ul>
          <li>
            <img src={columbia} alt="" />
            Columbia Law School
          </li>
          <li>
            <img src={cornell} alt="" />
            Cornell Law School
          </li>
          <li>
            <img src={seton} alt="" />
            Seton Hall University
          </li>
          <li>
            <img src={washington} alt="" />
            Washington University in St. Louis
          </li>
          <li>
            <img src={nyu} alt="" />
            NYU School of Law
          </li>
        </ul>
      </div>

      <div className="consultant-profile-resume-work">
        <h2>Work Experience</h2>

        <div className="consultant-profile-resume-item">
          <div className="consultant-profile-resume-position">
            <img src={associate} alt="" />
            <h3>Associate</h3>
          </div>

          <p className="consultant-profile-resume-details">
            Sullivan &amp; Cromwell · January 2025 - Present
          </p>

          <p className="consultant-profile-resume-description">
            I work as an associate at Sullivan &amp; Cromwell LLP - one of the
            best law firms in the country.
          </p>
        </div>

        <div className="consultant-profile-resume-item">
          <div className="consultant-profile-resume-position">
            <img src={analyst} alt="" />
            <h3>Analyst</h3>
          </div>

          <p className="consultant-profile-resume-details">
            Goldman Sachs · June 2024 - December 2024
          </p>
        </div>

        <div className="consultant-profile-resume-accepted">
          <p>Cynthia has also worked at:</p>

          <ul>
            <li>
              <img src={simpson} alt="" />
              Simpson Thacher &amp; Bartlett
            </li>
            <li>
              <img src={weil} alt="" />
              Weil
            </li>
            <li>
              <img src={cahill} alt="" />
              Cahill
            </li>
            <li>
              <img src={baker} alt="" />
              Baker Botts
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ConsultantProfileResume;
