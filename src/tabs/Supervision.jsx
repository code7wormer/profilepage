export default function Supervision({ data }) {
  const { phdSupervision, internships } = data;

  return (
    <div className="supervision-page">
      <section className="section">
        <h2 className="section-title">PhD Supervision</h2>
        
        <div className="summary-banner">
          {Object.entries(phdSupervision.summary).map(([label, value], i) => (
            <div className="stat" key={i}>
              <span className="stat-value">{value}</span>
              <span className="stat-label" style={{ display: 'block', maxWidth: '150px', margin: '0 auto' }}>{label}</span>
            </div>
          ))}
        </div>

        <h3 className="sub-title">Awarded Scholars</h3>
        <div className="scholar-grid">
          {phdSupervision.completed.map((phd, i) => (
            <div key={i} className="card scholar-card">
              <div className="scholar-header">
                <span className="scholar-name">{phd.candidate}</span>
                <span className="tag date-tag">{phd.date}</span>
              </div>
              <p className="thesis-title">"{phd.title}"</p>
              <div className="scholar-meta">
                <span className="meta-item scheme">{phd.scheme}</span>
                {phd.working && <span className="meta-item work">Cur: {phd.working}</span>}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Internships Mentored</h2>
        <div className="internship-timeline">
          {internships.map((yearGroup, i) => (
            <div key={i} className="intern-year-block">
              <h3 className="year-title">{yearGroup.year}</h3>
              <div className="intern-grid">
                {yearGroup.students.map((student, j) => (
                  <div key={j} className="card intern-card">
                    <div className="intern-name">{student.name}</div>
                    <div className="intern-inst">{student.institution}</div>
                    <div className="intern-period">{student.duration}</div>
                    <ul className="intern-topics">
                      {student.details.map((topic, k) => (
                        <li key={k}>{topic}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        .summary-banner {
          display: flex;
          gap: 2rem;
          background: var(--bg-primary);
          padding: 1.5rem 2rem;
          border-radius: var(--radius-md);
          border: 1px solid var(--border);
          margin-bottom: 2.5rem;
          justify-content: center;
        }
        .stat {
          text-align: center;
        }
        .stat-value {
          display: block;
          font-family: 'Playfair Display', serif;
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--accent);
          line-height: 1;
          margin-bottom: 0.25rem;
        }
        .stat-label {
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-light);
          font-weight: 600;
        }
        .sub-title {
          font-size: 1.25rem;
          margin-bottom: 1.25rem;
        }
        .scholar-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 1.25rem;
        }
        .scholar-card {
          margin: 0;
          display: flex;
          flex-direction: column;
        }
        .scholar-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 0.75rem;
        }
        .scholar-name {
          font-weight: 600;
          font-size: 1.05rem;
          color: var(--text-primary);
        }
        .date-tag {
          margin: 0;
          font-size: 0.75rem;
          padding: 0.2rem 0.6rem;
        }
        .thesis-title {
          font-style: italic;
          color: var(--text-secondary);
          font-size: 0.95rem;
          flex: 1;
          margin-bottom: 1rem;
        }
        .scholar-meta {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          font-size: 0.85rem;
          color: var(--text-light);
          border-top: 1px dashed var(--border-light);
          padding-top: 0.75rem;
        }
        .intern-year-block {
          margin-bottom: 2rem;
        }
        .year-title {
          font-size: 1.2rem;
          color: var(--accent);
          margin-bottom: 1rem;
          border-bottom: 1px solid var(--border-light);
          padding-bottom: 0.5rem;
        }
        .intern-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1rem;
        }
        .intern-card {
          margin: 0;
        }
        .intern-name {
          font-weight: 600;
          color: var(--text-primary);
        }
        .intern-inst, .intern-period {
          font-size: 0.85rem;
          color: var(--text-secondary);
        }
        .intern-period {
          color: var(--accent);
          margin-bottom: 0.75rem;
        }
        .intern-topics {
          padding-left: 1.25rem;
          font-size: 0.85rem;
          color: var(--text-secondary);
        }
        .intern-topics li { margin-bottom: 0.25rem; }
      `}</style>
    </div>
  );
}
