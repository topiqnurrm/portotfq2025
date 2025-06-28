"use client";

import styles from "./ini.module.css";
import Introduction from "./introduction/introduction";
import Skills from "./skills/skills";
import Career from "./career/career";
import Achievements from "./achievements/achievements";
import Certifications from "./certifications/certifications";
import Publications from "./publications/publications";
import Organizations from "./organizations/organizations";
import Education from "./education/education";
import Activities from "./activities/activities";
import { useState } from "react";

export default function About() {
  // wadah untuk menu navigasi
  const menuItems = [
    "Introduction",
    "Skills",
    "Career",
    "Achievements",
    "Certifications",
    "Publications",
    "Organizations",
    "Education",
    "Activities",
  ];

  // wadah untuk konten yang akan ditampilkan
  const [activeSection, setActiveSection] = useState("introduction");

  // Fungsi untuk render content berdasarkan section yang aktif
  const renderContent = () => {
    switch (activeSection) {
      case "introduction":
        return <Introduction />;
      case "skills":
        return <Skills />;
      case "career":
        return <Career />;
      case "achievements":
        return <Achievements />;
      case "certifications":
        return <Certifications />;
      case "publications":
        return <Publications />;
      case "organizations":
        return <Organizations />;
      case "education":
        return <Education />;
      case "activities":
        return <Activities />;
      default:
        return <Introduction />;
    }
  };

  return (
    <section id="about" className={styles.container}>
      <div className={styles.navleft}>
        <ul className={styles.menuList}>
          {menuItems.map((item, index) => (
            <li key={index} className={styles.menuItem}>
              <button 
                onClick={() => setActiveSection(item.toLowerCase())}
                className={activeSection === item.toLowerCase() ? styles.active : ''}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.content}>
        <div className={styles.isi}>
          {renderContent()}
        </div>
      </div>
    </section>
  );
}