import "./ConsultantProfileUpcoming.css";

function ConsultantProfileUpcoming() {
  return (
    <section className="consultant-profile-upcoming">
      <h2>Your upcoming sessions</h2>

      <div className="consultant-profile-upcoming-card">
        <h3>Consulting Session with Cynthia</h3>

        <div className="consultant-profile-upcoming-details">
          <div>
            <p>March 29, 2025</p>
            <p>10:30AM EST - 11:00AM EST</p>
          </div>

          <span>Starts in 2d</span>
        </div>
      </div>
    </section>
  );
}

export default ConsultantProfileUpcoming;
