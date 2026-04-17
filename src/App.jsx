import { useState } from "react";
import Sidebar from "./components/Sidebar";
import TabBar from "./components/TabBar";
import About from "./tabs/About";
import Research from "./tabs/Research";
import Publications from "./tabs/Publications";
import Awards from "./tabs/Awards";
import Teaching from "./tabs/Teaching";
import Contact from "./tabs/Contact";
import { professor } from "./data/professorData";
import "./App.css";

const TAB_COMPONENTS = {
  about: About,
  research: Research,
  publications: Publications,
  awards: Awards,
  teaching: Teaching,
  contact: Contact,
};

export default function App() {
  const [activeTab, setActiveTab] = useState("about");
  const ActivePanel = TAB_COMPONENTS[activeTab] || About;

  return (
    <div className="app-layout">
      <Sidebar professor={professor} />
      <div className="main-area">
        <TabBar activeTab={activeTab} onTabChange={setActiveTab} />
        <main className="tab-panel" role="tabpanel">
          <ActivePanel professor={professor} />
        </main>
      </div>
    </div>
  );
}
