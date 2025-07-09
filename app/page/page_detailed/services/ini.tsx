import styles from "./ini.module.css";
import React from 'react';

import ThreeDCard from '@/app/components/3dCard/3dCard';

export default function Services() {
  // Scroll function yang sama seperti di navbar
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - (window.innerHeight * 0.07); // 7vh offset
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="services" className={styles.container}>
      <h1 className={styles.title}>Services</h1>
      <p className={styles.subtitle}>
        Menyediakan layanan pembuatan website modern, desain antarmuka yang user-friendly, 
        serta desain grafis kreatif untuk mendukung identitas dan kebutuhan digital Anda.
      </p>
      <div className={styles.cardcontainer}>
        <div className={styles.cardSection}>
          <ThreeDCard 
            title="Web Development"
            subtitle="Membangun website dinamis dan responsif yang disesuaikan dengan kebutuhan Anda, mulai dari landing page, portfolio, hingga dashboard interaktif."
            imageUrl="/services/WebDevelopment0.png"
            hoverImageUrl="/services/WebDevelopment1.png"
            buttonText="See My Work →"
            secondaryButtonText="Get In Touch →"
            onButtonClick={() => scrollToSection('projects')}
            onSecondaryButtonClick={() => scrollToSection('contact')}
          />
        </div>
        <div className={styles.cardSection}>
          <ThreeDCard 
            title="UI/UX Design"
            subtitle="Merancang antarmuka digital yang modern, user-friendly, dan konsisten, lengkap dengan prototype interaktif untuk pengalaman pengguna yang optimal."
            imageUrl="/services/UIUXDesign0.png"
            hoverImageUrl="/services/UIUXDesign1.png"
            buttonText="See My Work →"
            secondaryButtonText="Get In Touch →"
            onButtonClick={() => scrollToSection('projects')}
            onSecondaryButtonClick={() => scrollToSection('contact')}
          />
        </div>
        <div className={styles.cardSection}>
          <ThreeDCard 
            title="Graphic Design"
            subtitle="Menciptakan desain visual seperti poster, banner, konten media sosial, dan branding untuk mendukung identitas dan promosi bisnis Anda."
            imageUrl="/services/GraphicDesign0.png"
            hoverImageUrl="/services/GraphicDesign1.png"
            buttonText="See My Work →"
            secondaryButtonText="Get In Touch →"
            onButtonClick={() => scrollToSection('projects')}
            onSecondaryButtonClick={() => scrollToSection('contact')}
          />
        </div>
      </div>
    </section>
  );
}