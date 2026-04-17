import "./Research.css";

export default function Research({ professor }) {
  return (
    <div className="tab-content research">
      <section className="section">
        <h2 className="section-title">Research Overview</h2>
        <p className="research-overview">
          Our lab—the <strong>Secure &amp; Intelligent Systems Lab (SISL)</strong>—works at the
          intersection of machine learning, distributed systems, and privacy-preserving computation.
          We build both theoretical foundations and practical systems that enable trustworthy AI at
          scale.
        </p>
      </section>

      <section className="section">
        <h2 className="section-title">Research Areas</h2>
        <div className="research-areas-grid">
          {professor.researchInterests.map((area) => (
            <div key={area} className="research-area-card">
              <span className="research-area-icon">🔬</span>
              <span>{area}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Current &amp; Past Students</h2>

        <h3 className="subsection-title">Ph.D. Students</h3>
        <div className="students-grid">
          {professor.students.phd.map((s) => (
            <div key={s.name} className={`student-card ${s.status === "graduated" ? "student-card--grad" : ""}`}>
              <div className="student-name">{s.name}</div>
              <div className="student-topic">{s.topic}</div>
              <div className="student-year">{s.year}</div>
              {s.status === "graduated" && s.position && (
                <div className="student-position">Now: {s.position}</div>
              )}
              <span className={`student-badge ${s.status === "current" ? "badge-current" : "badge-grad"}`}>
                {s.status === "current" ? "Current" : "Graduated"}
              </span>
            </div>
          ))}
        </div>

        <h3 className="subsection-title" style={{ marginTop: "1.5rem" }}>Postdoctoral Researchers</h3>
        <div className="students-grid">
          {professor.students.postdoc.map((s) => (
            <div key={s.name} className="student-card">
              <div className="student-name">{s.name}</div>
              <div className="student-topic">{s.topic}</div>
              <div className="student-year">{s.year}</div>
              <span className="student-badge badge-current">Current</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Active Grants &amp; Funding</h2>
        <div className="grants-list">
          {professor.grants.map((g, i) => (
            <div key={i} className="grant-card">
              <div className="grant-title">{g.title}</div>
              <div className="grant-meta">
                <span className="grant-agency">{g.agency}</span>
                <span className="grant-amount">{g.amount}</span>
                <span className="grant-period">{g.period}</span>
                <span className="grant-role">{g.role}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
