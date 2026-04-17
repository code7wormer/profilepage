import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

function AnimatedCounter({ target, duration = 1.5 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const start = Date.now();
          const end = start + duration * 1000;
          const tick = () => {
            const now = Date.now();
            const progress = Math.min((now - start) / (duration * 1000), 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (now < end) requestAnimationFrame(tick);
            else setCount(target);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function Publications({ data }) {
  const { publications } = data;
  const years = Object.keys(publications).sort((a, b) => b - a);
  const [expandedYear, setExpandedYear] = useState(null);

  const handleYearClick = (year) => {
    const next = expandedYear === year ? null : year;
    setExpandedYear(next);
    if (next) {
      setTimeout(() => {
        const el = document.getElementById(`pub-year-${next}`);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
    }
  };

  // Compute stats
  const totalPapers = Object.values(publications).flat().length;
  const allPapers = Object.values(publications).flat();
  const sciCount = allPapers.filter(p => /SCI/i.test(p)).length;
  const scopusCount = allPapers.filter(p => /Scopus/i.test(p)).length;
  const maxPapersInYear = Math.max(...years.map(y => publications[y].length));
  const firstYear = years[years.length - 1];

  return (
    <div className="publications-page">
      {/* --- Hero Stats Banner --- */}
      <section className="pub-hero">
        <div className="pub-hero-inner">
          <div className="pub-hero-stat primary-stat">
            <span className="pub-stat-number"><AnimatedCounter target={totalPapers} /></span>
            <span className="pub-stat-label">Total Papers</span>
          </div>
          
          <div className="pub-hero-divider" />
          
          <div className="pub-hero-stat">
            <span className="pub-stat-number accent"><AnimatedCounter target={45} /></span>
            <span className="pub-stat-label">Journals (26 SCI)</span>
          </div>
          
          <div className="pub-hero-stat">
            <span className="pub-stat-number accent"><AnimatedCounter target={7} /></span>
            <span className="pub-stat-label">Book Chapters</span>
          </div>
          
          <div className="pub-hero-stat">
            <span className="pub-stat-number accent"><AnimatedCounter target={14} /></span>
            <span className="pub-stat-label">Conferences</span>
          </div>
          
          <div className="pub-hero-stat">
            <span className="pub-stat-number accent"><AnimatedCounter target={2} /></span>
            <span className="pub-stat-label">Preprints</span>
          </div>

          <div className="pub-hero-stat">
            <span className="pub-stat-number accent"><AnimatedCounter target={19} /></span>
            <span className="pub-stat-label">Internship Pubs</span>
          </div>
        </div>
      </section>

      {/* --- Visual Year Bar Chart --- */}
      <section className="section">
        <h2 className="section-title">Publication Timeline</h2>
        <div className="pub-chart">
          {years.map((year) => {
            const count = publications[year].length;
            const heightPct = (count / maxPapersInYear) * 100;
            return (
              <motion.div
                key={year}
                className="pub-bar-col"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: years.indexOf(year) * 0.05, duration: 0.4 }}
                onClick={() => handleYearClick(year)}
                style={{ cursor: 'pointer' }}
              >
                <span className="pub-bar-count">{count}</span>
                <div className="pub-bar-track">
                  <motion.div
                    className={`pub-bar-fill ${expandedYear === year ? 'active' : ''}`}
                    initial={{ height: 0 }}
                    animate={{ height: `${heightPct}%` }}
                    transition={{ delay: years.indexOf(year) * 0.05 + 0.2, duration: 0.6, ease: "easeOut" }}
                  />
                </div>
                <span className="pub-bar-year">{year}</span>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* --- Expandable Papers List --- */}
      <section className="section">
        <h2 className="section-title">Papers by Year</h2>
        <div className="pub-accordion">
          {years.map((year) => {
            const isOpen = expandedYear === year;
            const count = publications[year].length;
            return (
              <div key={year} id={`pub-year-${year}`} className={`pub-acc-group ${isOpen ? "open" : ""}`}>
                <button
                  className="pub-acc-header"
                  onClick={() => handleYearClick(year)}
                >
                  <div className="pub-acc-left">
                    <span className="pub-acc-year">{year}</span>
                    <span className="pub-acc-badge">{count}</span>
                  </div>
                  <span className="pub-acc-chevron">{isOpen ? "▲" : "▼"}</span>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      style={{ overflow: "hidden" }}
                    >
                      <ol className="pub-entries">
                        {publications[year].map((pub, i) => (
                          <motion.li
                            key={i}
                            className="pub-entry"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.04 }}
                          >
                            {pub}
                          </motion.li>
                        ))}
                      </ol>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      <style>{`
        /* --- Hero Stats Banner --- */
        .pub-hero {
          margin-bottom: 3rem;
          padding: 3rem 2.5rem;
          background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
          border-radius: var(--radius-lg);
          position: relative;
          overflow: hidden;
        }
        .pub-hero::before {
          content: '';
          position: absolute;
          top: -50%; right: -20%;
          width: 400px; height: 400px;
          background: radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%);
          border-radius: 50%;
        }
        .pub-hero::after {
          content: '';
          position: absolute;
          bottom: -30%; left: -10%;
          width: 300px; height: 300px;
          background: radial-gradient(circle, rgba(255,107,0,0.1) 0%, transparent 70%);
          border-radius: 50%;
        }
        .pub-hero-inner {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 3rem;
          position: relative;
          z-index: 1;
          flex-wrap: wrap;
        }
        .pub-hero-stat {
          text-align: center;
        }
        .pub-hero-stat.primary-stat .pub-stat-number {
          font-size: 4rem;
          background: linear-gradient(135deg, #ff6b00, #3b82f6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .pub-stat-number {
          display: block;
          font-family: 'Outfit', sans-serif;
          font-size: 2.5rem;
          font-weight: 800;
          color: white;
          line-height: 1.1;
          margin-bottom: 0.35rem;
        }
        .pub-stat-number.accent {
          color: #93c5fd;
        }
        .pub-stat-label {
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: rgba(255,255,255,0.5);
          font-weight: 600;
        }
        .pub-hero-divider {
          width: 1px;
          height: 60px;
          background: rgba(255,255,255,0.15);
        }

        /* --- Bar Chart --- */
        .pub-chart {
          display: flex;
          align-items: flex-end;
          gap: 0.5rem;
          height: 220px;
          padding: 1rem 0.5rem 0;
        }
        .pub-bar-col {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.35rem;
          min-width: 0;
        }
        .pub-bar-count {
          font-family: 'Outfit', sans-serif;
          font-weight: 700;
          font-size: 0.85rem;
          color: var(--text-secondary);
        }
        .pub-bar-track {
          width: 100%;
          max-width: 42px;
          height: 160px;
          background: var(--bg-primary);
          border-radius: 6px 6px 0 0;
          position: relative;
          display: flex;
          align-items: flex-end;
          overflow: hidden;
          border: 1px solid var(--border-light);
          border-bottom: none;
        }
        .pub-bar-fill {
          width: 100%;
          background: linear-gradient(180deg, #3b82f6 0%, #1d4ed8 100%);
          border-radius: 6px 6px 0 0;
          transition: background 0.3s ease;
          min-height: 4px;
        }
        .pub-bar-fill.active {
          background: linear-gradient(180deg, #ff6b00 0%, #ea580c 100%);
        }
        .pub-bar-col:hover .pub-bar-fill {
          background: linear-gradient(180deg, #ff6b00 0%, #ea580c 100%);
        }
        .pub-bar-year {
          font-size: 0.7rem;
          font-weight: 600;
          color: var(--text-light);
          writing-mode: vertical-lr;
          transform: rotate(180deg);
          white-space: nowrap;
        }

        /* --- Accordion --- */
        .pub-accordion {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }
        .pub-acc-group {
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          overflow: hidden;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .pub-acc-group.open {
          border-color: var(--accent-border);
          box-shadow: 0 8px 30px rgba(59, 130, 246, 0.08);
        }
        .pub-acc-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          padding: 1.1rem 1.5rem;
          background: var(--bg-primary);
          border: none;
          cursor: pointer;
          font-family: inherit;
          transition: background 0.2s ease;
        }
        .pub-acc-header:hover {
          background: var(--accent-soft);
        }
        .pub-acc-left {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .pub-acc-year {
          font-family: 'Outfit', sans-serif;
          font-weight: 800;
          font-size: 1.3rem;
          color: var(--text-primary);
        }
        .pub-acc-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 28px;
          height: 28px;
          padding: 0 0.5rem;
          border-radius: 999px;
          background: var(--accent);
          color: white;
          font-size: 0.8rem;
          font-weight: 700;
          font-family: 'Outfit', sans-serif;
        }
        .pub-acc-chevron {
          color: var(--text-light);
          font-size: 0.8rem;
        }
        .pub-entries {
          padding: 0.75rem 1.5rem 1.5rem 2.5rem;
          background: var(--bg-primary);
          border-top: 1px solid var(--border-light);
        }
        .pub-entry {
          padding: 0.75rem 0;
          border-bottom: 1px solid var(--border-light);
          font-size: 0.95rem;
          line-height: 1.7;
          color: var(--text-secondary);
        }
        .pub-entry:last-child { border-bottom: none; }

        @media (max-width: 768px) {
          .pub-hero-inner {
            flex-direction: column;
            gap: 1.5rem;
          }
          .pub-hero-divider {
            width: 60px;
            height: 1px;
          }
          .pub-chart {
            height: 160px;
          }
          .pub-bar-track {
            height: 110px;
          }
        }
      `}</style>
    </div>
  );
}
