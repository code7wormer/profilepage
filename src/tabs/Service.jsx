export default function Service({ data }) {
  const { 
    awardsAndAchievements, 
    editorialBoard, 
    reviewedJournals, 
    conferencesOrganized, 
    outreachActivities, 
    additionalResponsibilities 
  } = data;

  return (
    <div className="service-page">
      <section className="section">
        <h2 className="section-title">Awards & Achievements</h2>
        <div className="awards-gallery">
          {awardsAndAchievements.map((item, i) => {
            const parensMatch = item.match(/\(([^)]*\d{4}[^)]*)\)$/);
            let text = item;
            let date = null;
            if (parensMatch) {
              text = item.replace(parensMatch[0], '').replace(/,\s*$/, '').trim();
              date = parensMatch[1];
            } else {
              const inlineMatch = item.match(/\b((?:Jan|Feb|Mar|Apr|May|June|July|Aug|Sept|Oct|Nov|Dec)[a-z]*\s*-\s*\d{4}|\b\d{4}(?:,\s*\d{4})*\b)/i);
              if (inlineMatch && (item.includes("UGC") || item.includes("GATE"))) {
                text = item.replace(inlineMatch[0], '').replace(/\s{2,}/g, ' ').replace('in in', 'in').trim();
                date = inlineMatch[0];
              }
            }
            return (
              <div key={i} className="card award-card">
                <div className="award-icon">🏆</div>
                <div className="award-content">
                  <p className="award-text">{text}</p>
                </div>
                {date && <div className="award-date">{date}</div>}
              </div>
            );
          })}
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Academic Service</h2>
        <div className="service-grid">
          <div className="card service-group">
            <h3 className="group-title">Editorial Board</h3>
            <ul className="simple-list">
              {editorialBoard.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="card service-group">
            <h3 className="group-title">Conferences Organized</h3>
            <ul className="simple-list">
              {conferencesOrganized.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Journal Reviewer</h2>
        <div className="tag-cloud">
          {reviewedJournals.map((journal, i) => (
            <span key={i} className="tag outline-tag">{journal}</span>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">University Responsibilities</h2>
        <div className="responsibilities-list">
          {additionalResponsibilities.map((item, i) => (
            <div key={i} className="resp-item">
              <div className="resp-marker"></div>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Outreach Activities</h2>
        <ul className="elegant-list">
          {outreachActivities.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      <style>{`
        .elegant-list {
          padding-left: 1rem;
          color: var(--text-secondary);
        }
        .elegant-list li {
          margin-bottom: 0.75rem;
          line-height: 1.6;
          position: relative;
          padding-left: 1.25rem;
          list-style: none;
        }
        .elegant-list li::before {
          content: '→';
          position: absolute;
          left: 0;
          color: var(--accent);
          font-weight: bold;
        }
        .service-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
        }
        .service-group {
          margin: 0;
        }
        .group-title {
          font-size: 1.15rem;
          margin-bottom: 1rem;
          color: var(--accent);
          border-bottom: 1px solid var(--border-light);
          padding-bottom: 0.5rem;
        }
        .simple-list {
          padding-left: 1.25rem;
          color: var(--text-secondary);
          font-size: 0.95rem;
        }
        .simple-list li { margin-bottom: 0.5rem; }
        .tag-cloud {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
        }
        .outline-tag {
          background: transparent;
          border: 1px solid var(--border);
          color: var(--text-secondary);
          font-weight: 500;
        }
        .outline-tag:hover {
          border-color: var(--accent);
          color: var(--accent);
          background: var(--bg-primary);
        }
        .responsibilities-list {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 1rem;
        }
        .resp-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          font-size: 0.95rem;
          color: var(--text-primary);
          background: var(--bg-primary);
          padding: 0.75rem 1rem;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border-light);
        }
        .resp-marker {
          width: 6px;
          height: 6px;
          background: var(--accent);
          border-radius: 50%;
          margin-top: 0.45rem;
          flex-shrink: 0;
        }
        .awards-gallery {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1.5rem;
        }
        .award-card {
          display: flex;
          flex-direction: column;
          margin: 0;
          background: linear-gradient(180deg, var(--bg-primary) 0%, rgba(255,255,255,0.4) 100%);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-md);
          padding: 1.5rem;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .award-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-md);
          border-color: var(--accent-border);
        }
        .award-icon {
          font-size: 2rem;
          margin-bottom: 1rem;
        }
        .award-content {
          flex: 1;
        }
        .award-text {
          font-size: 1.05rem;
          font-weight: 600;
          color: var(--text-primary);
          line-height: 1.5;
          margin-bottom: 1.5rem;
          margin-top: 0;
        }
        .award-date {
          align-self: flex-start;
          display: inline-block;
          font-family: 'Outfit', sans-serif;
          font-weight: 700;
          font-size: 0.85rem;
          color: var(--accent);
          background: var(--accent-soft);
          padding: 0.4rem 0.8rem;
          border-radius: 999px;
          margin-top: auto;
        }
      `}</style>
    </div>
  );
}
