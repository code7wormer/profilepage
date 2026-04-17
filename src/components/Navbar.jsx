import "./Navbar.css";

export default function Navbar({ activeTab, onTabChange, tabs }) {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo" onClick={() => onTabChange("home")}>
          Dr. Jitendra V. Tembhurne
        </div>
        <ul className="nav-links">
          {tabs.map((tab) => (
            <li key={tab.id}>
              <button
                className={`nav-btn ${activeTab === tab.id ? "active" : ""}`}
                onClick={() => onTabChange(tab.id)}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
