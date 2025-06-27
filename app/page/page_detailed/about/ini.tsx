"use client";

import styles from "./ini.module.css";

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

  // fungsi untuk scroll ke bagian tertentu
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = element.getBoundingClientRect().top + window.pageYOffset - window.innerHeight * 0.07;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className={styles.container}>
      <div className={styles.navleft}>
        <ul className={styles.menuList}>
          {menuItems.map((item, index) => (
            <li key={index} className={styles.menuItem}>
              <button onClick={() => scrollToSection(item.toLowerCase())}>
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.content}>
        {menuItems.map((item) => (
          <div
            key={item}
            id={item.toLowerCase()}
            className={styles.isi}
          >
            <h2>{item}</h2>
            <p>Konten untuk {item}</p>
          </div>
        ))}      
      </div>
    </section>
  );
}
