import "./TabBar.css";

const TABS = [
  { id: "about", label: "About" },
  { id: "research", label: "Research" },
  { id: "publications", label: "Publications" },
  { id: "awards", label: "Awards" },
  { id: "teaching", label: "Teaching" },
  { id: "contact", label: "Contact" },
];

export default function TabBar({ activeTab, onTabChange }) {
  return (
    <nav className="tabbar" role="tablist" aria-label="Profile sections">
      {TABS.map((tab) => (
        <button
          key={tab.id}
          role="tab"
          aria-selected={activeTab === tab.id}
          className={`tabbar-btn ${activeTab === tab.id ? "tabbar-btn--active" : ""}`}
          onClick={() => onTabChange(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </nav>
  );
}

export { TABS };
