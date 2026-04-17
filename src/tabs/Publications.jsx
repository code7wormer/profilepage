import { useState } from "react";
import "./Publications.css";

const TYPE_LABELS = { all: "All", conference: "Conference", journal: "Journal" };

export default function Publications({ professor }) {
  const [filter, setFilter] = useState("all");
  const [expandedId, setExpandedId] = useState(null);

  const pubs = professor.publications
    .filter((p) => filter === "all" || p.type === filter)
    .sort((a, b) => b.year - a.year);

  const toggle = (id) => setExpandedId((prev) => (prev === id ? null : id));

  return (
    <div className="tab-content publications">
      <div className="pub-header">
        <h2 className="section-title" style={{ margin: 0 }}>
          Publications
          <span className="pub-count">{professor.publications.length} total</span>
        </h2>
        <div className="pub-filter">
          {Object.entries(TYPE_LABELS).map(([key, label]) => (
            <button
              key={key}
              className={`filter-btn ${filter === key ? "filter-btn--active" : ""}`}
              onClick={() => setFilter(key)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <ol className="pub-list">
        {pubs.map((pub) => (
          <li key={pub.id} className="pub-item">
            <div className="pub-item-header">
              <div className="pub-meta-row">
                <span className={`pub-type-badge pub-type-${pub.type}`}>{pub.type}</span>
                <span className="pub-year">{pub.year}</span>
                {pub.award && <span className="pub-award">🏆 {pub.award}</span>}
              </div>
              <button
                className="pub-title-btn"
                onClick={() => toggle(pub.id)}
                aria-expanded={expandedId === pub.id}
              >
                {pub.title}
                <span className="pub-expand-icon">{expandedId === pub.id ? "▲" : "▼"}</span>
              </button>
              <div className="pub-authors">{pub.authors}</div>
              <div className="pub-venue">
                <em>{pub.venue}</em>
                {pub.pages && <span className="pub-pages">, {pub.pages}</span>}
              </div>
            </div>

            {expandedId === pub.id && (
              <div className="pub-detail">
                <p className="pub-abstract">
                  <strong>Abstract: </strong>
                  {pub.abstract}
                </p>
                <a href={pub.doi} target="_blank" rel="noreferrer" className="pub-doi-link">
                  View paper →
                </a>
              </div>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}
