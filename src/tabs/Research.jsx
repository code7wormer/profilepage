export default function Research({ data }) {
  const { fundedProjects, fundedFDPs, patents } = data;

  return (
    <div className="research-page">
      <section className="section">
        <h2 className="section-title">Patents</h2>
        <div className="grid-list">
          {patents.map((patent, i) => (
            <div key={i} className="card research-card">
              <div className="card-header">
                <span className="tag">{patent.year}</span>
                <span className="doc-no">{patent.patentNo} {patent.date ? `(${patent.date})` : ''}</span>
              </div>
              <h3 className="card-title">{patent.title}</h3>
              <div className="card-details">
                <p><strong>Inventors:</strong> {patent.inventors}</p>
                <p><strong>Agency:</strong> {patent.agency}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Funded Research Projects</h2>
        <div className="grid-list">
          {fundedProjects.map((project, i) => (
            <div key={i} className="card research-card">
              <div className="card-header">
                <span className={"tag status-" + project.status.toLowerCase()}>{project.status}</span>
                <span className="doc-no">{project.duration}</span>
              </div>
              <h3 className="card-title">{project.title}</h3>
              <div className="card-details">
                <p><strong>Agency:</strong> {project.fundingAgency}</p>
                <p><strong>Amount:</strong> {project.amount}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Funded FDPs</h2>
        <div className="grid-list">
          {fundedFDPs.map((fdp, i) => (
            <div key={i} className="card research-card">
              <div className="card-header">
                <span className="doc-no">{fdp.date}</span>
              </div>
              <h3 className="card-title">{fdp.title}</h3>
              <div className="card-details">
                <p><strong>Funding Agency:</strong> {fdp.funding}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        .grid-list {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 1.25rem;
        }
        .research-card {
          margin: 0;
          display: flex;
          flex-direction: column;
        }
        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.75rem;
        }
        .doc-no {
          font-family: inherit;
          font-size: 0.85rem;
          color: var(--text-light);
        }
        .card-title {
          font-size: 1.1rem;
          color: var(--text-primary);
          margin-bottom: 1rem;
          flex: 1;
        }
        .card-details {
          font-size: 0.85rem;
          color: var(--text-secondary);
          background: var(--bg-secondary);
          padding: 0.75rem 1rem;
          border-radius: var(--radius-sm);
        }
        .card-details p {
          margin-bottom: 0.25rem;
        }
        .card-details p:last-child {
          margin-bottom: 0;
        }
        .card-details strong {
          color: var(--text-primary);
        }
        .status-completed {
          background: #e6f4ea;
          color: #137333;
          border-color: #ceead6;
        }
      `}</style>
    </div>
  );
}
