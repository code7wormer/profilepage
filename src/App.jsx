import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Home from "./tabs/Home";
import Experience from "./tabs/Experience";
import Publications from "./tabs/Publications";
import Teaching from "./tabs/Teaching";
import Supervision from "./tabs/Supervision";
import Research from "./tabs/Research";
import Service from "./tabs/Service";

import homeData from "./data/home.json";
import experienceData from "./data/experience.json";
import publicationsData from "./data/publications.json";
import teachingData from "./data/teaching.json";
import studentsData from "./data/students.json";
import researchData from "./data/research.json";
import serviceData from "./data/service.json";

import "./App.css";

const TABS = [
  { id: "home", label: "Home", component: Home, data: homeData },
  { id: "experience", label: "Experience", component: Experience, data: experienceData },
  { id: "publications", label: "Publications", component: Publications, data: publicationsData },
  { id: "research", label: "Research", component: Research, data: researchData },
  { id: "supervision", label: "Supervision", component: Supervision, data: studentsData },
  { id: "teaching", label: "Teaching", component: Teaching, data: teachingData },
  { id: "service", label: "Service & Awards", component: Service, data: serviceData },
];

export default function App() {
  const [activeTab, setActiveTab] = useState("home");

  const activeTabData = TABS.find((t) => t.id === activeTab);
  const ActivePanel = activeTabData ? activeTabData.component : Home;
  const currentData = activeTabData ? activeTabData.data : homeData;

  return (
    <div className="app-layout">
      <Navbar activeTab={activeTab} onTabChange={setActiveTab} tabs={TABS} />
      

      <main className="main-content container">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="tab-panel"
          >
            <ActivePanel data={currentData} profile={homeData.profile} />
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="footer container">
        <p>&copy; {new Date().getFullYear()} Dr. Jitendra V. Tembhurne. All rights reserved.</p>
      </footer>
    </div>
  );
}
