import "./Teaching.css";

const LEVEL_COLORS = {
  Graduate: "level-grad",
  Undergraduate: "level-undergrad",
  "Graduate Seminar": "level-seminar",
};

export default function Teaching({ professor }) {
  return (
    <div className="tab-content teaching">
      <section className="section">
        <h2 className="section-title">Courses Taught</h2>
        <div className="courses-grid">
          {professor.courses.map((course) => (
            <div key={course.code} className="course-card">
              <div className="course-card-top">
                <span className="course-code">{course.code}</span>
                <span className={`course-level ${LEVEL_COLORS[course.level] || "level-grad"}`}>
                  {course.level}
                </span>
              </div>
              <div className="course-name">{course.name}</div>
              <p className="course-desc">{course.description}</p>
              <div className="course-term">📅 {course.term}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Teaching Philosophy</h2>
        <p className="teaching-philosophy">
          I believe in teaching computer science as a problem-solving discipline. My courses
          emphasize rigorous theoretical foundations alongside hands-on systems building. Students
          are expected to engage critically with primary literature, implement non-trivial systems,
          and communicate their findings clearly. I am committed to creating an inclusive classroom
          environment where curiosity is celebrated and mistakes are learning opportunities.
        </p>
      </section>
    </div>
  );
}
