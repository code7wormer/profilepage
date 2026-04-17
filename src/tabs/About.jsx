import "./About.css";

export default function About({ professor }) {
  return (
    <div className="tab-content about">
      <section className="section">
        <h2 className="section-title">Biography</h2>
        <div className="bio-text">
          {professor.bio.split("\n\n").map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Education</h2>
        <ul className="timeline">
          {professor.education.map((edu, i) => (
            <li key={i} className="timeline-item">
              <div className="timeline-year">{edu.year}</div>
              <div className="timeline-body">
                <strong className="timeline-heading">{edu.degree}</strong>
                <span className="timeline-sub">{edu.institution}</span>
                {edu.advisor && (
                  <span className="timeline-detail">Advisor: {edu.advisor}</span>
                )}
                {edu.thesis && (
                  <span className="timeline-detail italic">"{edu.thesis}"</span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="section">
        <h2 className="section-title">Academic Positions</h2>
        <ul className="timeline">
          {professor.positions.map((pos, i) => (
            <li key={i} className="timeline-item">
              <div className="timeline-year">{pos.period}</div>
              <div className="timeline-body">
                <strong className="timeline-heading">{pos.title}</strong>
                <span className="timeline-sub">{pos.department}</span>
                <span className="timeline-sub">{pos.institution}</span>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
