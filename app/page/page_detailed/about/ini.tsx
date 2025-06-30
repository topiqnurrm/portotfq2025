"use client";

import styles from "./ini.module.css";
import Image from 'next/image';
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
  // wadah untuk menu navigasi dengan mapping nama file
  const menuItems = [
    { name: "Introduction", fileName: "Introduction" },
    { name: "Skills", fileName: "Skills" },
    { name: "Career", fileName: "Career" },
    { name: "Achievements", fileName: "Achievements" },
    { name: "Certifications", fileName: "Certifications" },
    { name: "Publications", fileName: "Publications" },
    { name: "Organizations", fileName: "Organizations" },
    { name: "Education", fileName: "Education" },
    { name: "Activities", fileName: "Activities" },
  ];

  // wadah untuk konten yang akan ditampilkan
  const [activeSection, setActiveSection] = useState("introduction");
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Function untuk handle section change dengan smooth transition
  const handleSectionChange = (section: string) => {
    setIsTransitioning(true);
    
    setTimeout(() => {
      setActiveSection(section);
      setIsTransitioning(false);
    }, 150);
  };

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
        <div className={styles.navHeader}>
          <h2 className={styles.navTitle}>About Me</h2>
          <p className={styles.navSubtitle}>by Taufiq Nurrohman</p>
        </div>
        <ul className={styles.menuList}>
          {menuItems.map((item, index) => {
            const isActive = activeSection === item.name.toLowerCase();
            const iconSuffix = isActive ? "1" : "0";
            
            return (
              <li key={index} className={styles.menuItem}>
                <button 
                  onClick={() => handleSectionChange(item.name.toLowerCase())}
                  className={isActive ? styles.active : ''}
                >
                  <div className={styles.menuContent}>
                    <Image
                      src={`/menu/${item.fileName}${iconSuffix}.png`}
                      alt={`${item.name} icon`}
                      width={20}
                      height={20}
                      className={styles.menuIcon}
                    />
                    <span className={styles.menuText}>{item.name}</span>
                  </div>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={styles.content}>
        <div className={`${styles.isi} ${isTransitioning ? styles.transitioning : ''}`}>
          {renderContent()}
        </div>
      </div>
    </section>
  );
}