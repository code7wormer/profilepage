export default function Experience({ data }) {
  const { academicPositions, visitingFaculty } = data;

  return (
    <div className="experience-page">
      <section className="section">
        <h2 className="section-title">Academic Positions</h2>
        <div className="positions-timeline">
          {academicPositions.map((pos, i) => (
            <div key={i} className="pos-item">
              <div className="pos-period">{pos.period}</div>
              <div className="pos-details">
                <div className="pos-role">{pos.title}</div>
                <div className="pos-dept">{pos.department}</div>
                <div className="pos-inst">{pos.institution}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {visitingFaculty && visitingFaculty.length > 0 && (
        <section className="section">
          <h2 className="section-title">Visiting Faculty</h2>
          <div className="visiting-list">
            {visitingFaculty.map((v, i) => (
              <div key={i} className="card">
                <span className="year">{v.period}</span>
                <p style={{ color: "var(--text-secondary)", marginTop: "0.35rem" }}>{v.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      <style>{`
        .positions-timeline {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-left: 1rem;
          padding-left: 2rem;
          border-left: 2px solid var(--border-light);
        }
        .pos-item {
          display: flex;
          gap: 2rem;
          position: relative;
          background: linear-gradient(180deg, var(--bg-primary) 0%, rgba(255,255,255,0.3) 100%);
          border: 1px solid var(--border-light);
          padding: 1.5rem;
          border-radius: var(--radius-md);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .pos-item:hover {
          transform: translateX(5px);
          box-shadow: var(--shadow-sm);
          border-color: var(--accent-border);
        }
        .pos-item::before {
          content: '';
          position: absolute;
          left: -2.6rem;
          top: 1.8rem;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: var(--accent);
          border: 3px solid var(--accent);
          box-shadow: 0 0 0 4px var(--bg-primary);
          z-index: 2;
        }
        .pos-period {
          flex-shrink: 0;
          min-width: 130px;
          font-weight: 700;
          color: var(--accent);
          font-size: 0.95rem;
          padding-top: 0.1rem;
          font-family: 'Outfit', sans-serif;
        }
        .pos-role {
          font-weight: 700;
          font-size: 1.15rem;
          color: var(--text-primary);
          margin-bottom: 0.25rem;
        }
        .pos-dept {
          color: var(--text-secondary);
          font-size: 0.95rem;
        }
        .pos-inst {
          color: var(--text-light);
          font-size: 0.9rem;
        }
        @media (max-width: 640px) {
          .pos-item {
            flex-direction: column;
            gap: 0.5rem;
          }
          .pos-period { 
            min-width: unset; 
            margin-bottom: 0.5rem;
          }
          .pos-item::before {
            top: 1.25rem;
          }
        }
      `}</style>
    </div>
  );
}
