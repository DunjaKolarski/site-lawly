import "./ConsultantProfileBio.css";

function ConsultantProfileBio() {
  return (
    <div className="consultant-profile-bio">
      <h2>About me</h2>

      <div className="consultant-profile-bio-text">
        <p>
          Hi, I'm Cynthia, a practicing lawyer and proud Harvard Law School
          graduate. My journey through law school and into the legal profession
          has been both challenging and incredibly rewarding. Over the years,
          I've developed a deep understanding of what it takes to succeed in the
          competitive world of law, from crafting compelling applications to
          navigating the rigors of law school itself.
        </p>
        <p>
          As someone who has walked this path, I know how overwhelming the
          application process can feel, but I'm here to help make it
          manageable—and to set you up for success. Whether you're refining your
          personal statement, selecting schools that align with your goals, or
          preparing for interviews, I'll bring my firsthand experience to guide
          you every step of the way.
        </p>
      </div>

      <div className="consultant-profile-bio-tags">
        <div>
          <strong>My Background:</strong>
          <span>LLM</span>
          <span>LGBTQ+</span>
        </div>
        <div>
          <strong>Specialized Experience:</strong>
          <span>Public Interest</span>
          <span>Environmental Law</span>
        </div>
      </div>
    </div>
  );
}

export default ConsultantProfileBio;
