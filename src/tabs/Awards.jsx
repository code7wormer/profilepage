import "./Awards.css";

export default function Awards({ professor }) {
  const sorted = [...professor.awards].sort((a, b) => b.year - a.year);

  return (
    <div className="tab-content awards">
      <section className="section">
        <h2 className="section-title">
          Honors &amp; Awards
          <span className="pub-count">{professor.awards.length} total</span>
        </h2>

        <ul className="awards-list">
          {sorted.map((award) => (
            <li key={award.id} className="award-item">
              <div className="award-year">{award.year}</div>
              <div className="award-body">
                <div className="award-name">🏆 {award.name}</div>
                <div className="award-org">{award.organization}</div>
                <p className="award-desc">{award.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
