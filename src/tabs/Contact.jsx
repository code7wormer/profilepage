import "./Contact.css";

export default function Contact({ professor }) {
  return (
    <div className="tab-content contact">
      <section className="section">
        <h2 className="section-title">Get in Touch</h2>
        <p className="contact-intro">
          I welcome inquiries from prospective Ph.D. students and postdocs with strong backgrounds
          in machine learning, systems, or security. Please read my recent papers before reaching
          out, and mention specific research directions you are excited about.
        </p>

        <div className="contact-grid">
          <div className="contact-card">
            <div className="contact-card-icon">✉️</div>
            <div className="contact-card-label">Email</div>
            <a href={`mailto:${professor.email}`} className="contact-card-value">
              {professor.email}
            </a>
          </div>

          <div className="contact-card">
            <div className="contact-card-icon">📞</div>
            <div className="contact-card-label">Phone</div>
            <span className="contact-card-value">{professor.phone}</span>
          </div>

          <div className="contact-card">
            <div className="contact-card-icon">📍</div>
            <div className="contact-card-label">Office</div>
            <span className="contact-card-value">{professor.office}</span>
          </div>

          <div className="contact-card">
            <div className="contact-card-icon">🕐</div>
            <div className="contact-card-label">Office Hours</div>
            <span className="contact-card-value">{professor.officeHours}</span>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Online Profiles</h2>
        <div className="online-links">
          <a href={professor.googleScholar} target="_blank" rel="noreferrer" className="online-link-card">
            <span className="online-link-icon">🎓</span>
            <span>Google Scholar</span>
          </a>
          <a href={professor.linkedin} target="_blank" rel="noreferrer" className="online-link-card">
            <span className="online-link-icon">💼</span>
            <span>LinkedIn</span>
          </a>
          <a href={professor.github} target="_blank" rel="noreferrer" className="online-link-card">
            <span className="online-link-icon">💻</span>
            <span>GitHub</span>
          </a>
          <a href={professor.website} target="_blank" rel="noreferrer" className="online-link-card">
            <span className="online-link-icon">🌐</span>
            <span>Personal Website</span>
          </a>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Mailing Address</h2>
        <address className="mailing-address">
          {professor.name}<br />
          {professor.department}<br />
          {professor.university}<br />
          123 University Ave, Room 314<br />
          Springfield, ST 12345<br />
          USA
        </address>
      </section>
    </div>
  );
}
