import "./Sidebar.css";

const AVATAR_PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'%3E%3Crect width='160' height='160' fill='%23dde3f0'/%3E%3Ccircle cx='80' cy='60' r='32' fill='%23a0aec0'/%3E%3Cellipse cx='80' cy='140' rx='52' ry='36' fill='%23a0aec0'/%3E%3C/svg%3E";

export default function Sidebar({ professor }) {
  const avatarSrc = professor.avatar || AVATAR_PLACEHOLDER;

  return (
    <aside className="sidebar">
      <div className="sidebar-avatar-wrap">
        <img src={avatarSrc} alt={professor.name} className="sidebar-avatar" />
      </div>

      <h1 className="sidebar-name">{professor.name}</h1>
      <p className="sidebar-title">{professor.title}</p>
      <p className="sidebar-dept">{professor.department}</p>
      <p className="sidebar-uni">{professor.university}</p>

      <div className="sidebar-divider" />

      <ul className="sidebar-contact">
        <li>
          <span className="contact-icon">✉</span>
          <a href={`mailto:${professor.email}`}>{professor.email}</a>
        </li>
        <li>
          <span className="contact-icon">☎</span>
          <span>{professor.phone}</span>
        </li>
        <li>
          <span className="contact-icon">📍</span>
          <span>{professor.office}</span>
        </li>
        <li>
          <span className="contact-icon">🕐</span>
          <span>{professor.officeHours}</span>
        </li>
      </ul>

      <div className="sidebar-divider" />

      <div className="sidebar-links">
        <a href={professor.googleScholar} target="_blank" rel="noreferrer" className="sidebar-link-btn">
          Google Scholar
        </a>
        <a href={professor.linkedin} target="_blank" rel="noreferrer" className="sidebar-link-btn">
          LinkedIn
        </a>
        <a href={professor.github} target="_blank" rel="noreferrer" className="sidebar-link-btn">
          GitHub
        </a>
      </div>

      <div className="sidebar-divider" />

      <div className="sidebar-interests">
        <h3 className="sidebar-section-title">Research Interests</h3>
        <ul className="interests-list">
          {professor.researchInterests.map((interest) => (
            <li key={interest} className="interest-tag">
              {interest}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
