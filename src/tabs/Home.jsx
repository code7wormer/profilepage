import "./Home.css";

export default function Home({ data }) {
  const { profile, aboutMe, researchInterests, education, awards, news } = data;

  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-photo">
          <img src={profile.avatar} alt={profile.name} className="avatar-img" />
        </div>
        <div className="hero-info">
          <h1 className="hero-name">{profile.name}</h1>
          <p className="hero-role">{profile.title}</p>
          <div className="hero-affiliation-group">
            <img src="current-insti.png" alt="Institute Logo" className="insti-logo" />
            <div className="insti-text-group">
              <p className="hero-affiliation">{profile.department}</p>
              <p className="hero-affiliation">{profile.institution}</p>
              <p className="hero-address">{profile.address}</p>
            </div>
          </div>

          <div className="hero-contact-row">
            <a href={"mailto:" + profile.contact.email} className="hero-email">{profile.contact.email}</a>
          </div>

          <div className="hero-links">
            <a href={profile.contact.googleScholar} target="_blank" rel="noreferrer" className="hero-link-btn">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 9a8 8 0 0 1 7.162 4.44L24 9.5z"/></svg>
              Google Scholar
            </a>
            <a href={profile.contact.linkedin} target="_blank" rel="noreferrer" className="hero-link-btn">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">About Me</h2>
        <div className="about-text">
          {aboutMe.split("\n\n").map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Research Interests</h2>
        <p className="research-intro">{researchInterests.intro}</p>
        <ul className="research-list">
          {researchInterests.areas.map((area, i) => (
            <li key={i}>{area}</li>
          ))}
        </ul>
      </section>

      <section className="section">
        <h2 className="section-title">Education</h2>
        <div className="edu-list">
          {education.map((edu, i) => (
            <div key={i} className="edu-item">
              <div className="edu-marker"></div>
              <div className="edu-body">
                <div className="edu-period">{edu.period}</div>
                <div className="edu-degree">{edu.degree}{edu.specialization ? ", " + edu.specialization : ""}</div>
                <div className="edu-inst">{edu.institution}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Awards</h2>
        <ul className="awards-list">
          {awards.map((a, i) => (
            <li key={i}>{a}</li>
          ))}
        </ul>
      </section>

      <section className="section">
        <h2 className="section-title">News</h2>
        <div className="news-list">
          {news.map((item, i) => (
            <div key={i} className="news-item">
              <span className="news-date">{item.date}</span>
              <span className="news-text">{item.text}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
