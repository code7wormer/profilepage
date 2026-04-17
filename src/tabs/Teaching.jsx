export default function Teaching({ data }) {
  const { teachingInterests, courses } = data;

  return (
    <div className="teaching-tab">
      <section className="section">
        <h2 className="section-title">Teaching Interests</h2>
        <div className="tag-container">
          {teachingInterests.map((interest, index) => (
            <span key={index} className="tag">
              {interest}
            </span>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Courses Taught</h2>
        <div className="courses-list">
          {courses.map((course, index) => (
            <div key={index} className="card course-card">
              <div className="course-header">
                <h3 className="course-title">{course.title}</h3>
                <span className="course-term">{course.term}</span>
              </div>
              
              <ul className="course-info-list">
                {course.info.map((info, i) => (
                  <li key={i}>{info}</li>
                ))}
              </ul>

              <div className="course-description">
                <p>{course.description.text}</p>
                {course.description.bullets && course.description.bullets.length > 0 && (
                  <ul className="desc-bullets">
                    {course.description.bullets.map((bullet, i) => (
                      <li key={i}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        .tag-container {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .course-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1rem;
        }
        .course-title {
          font-size: 1.2rem;
          color: var(--accent-color);
        }
        .course-term {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-secondary);
          background: var(--bg-secondary);
          padding: 0.2rem 0.6rem;
          border-radius: 4px;
        }
        .course-info-list {
          list-style: none;
          display: flex;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
          font-size: 0.9rem;
          color: var(--text-secondary);
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 0.75rem;
        }
        .course-description p {
          margin-bottom: 1rem;
        }
        .desc-bullets {
          padding-left: 1.5rem;
        }
        .desc-bullets li {
          margin-bottom: 0.25rem;
        }
      `}</style>
    </div>
  );
}
