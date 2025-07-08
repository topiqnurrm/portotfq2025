import styles from "./ini.module.css";
import React from 'react';

import ThreeDCard from '@/app/components/3dCard/3dCard';

export default function Services() {
  return (
    <section id="services" className={styles.container}>
      <h1 className={styles.title}>Services</h1>
      <p className={styles.subtitle}>
        Menyediakan layanan pembuatan website modern, desain antarmuka yang user-friendly, 
        <br/>serta desain grafis kreatif untuk mendukung identitas dan kebutuhan digital Anda.
      </p>
      <div className={styles.cardcontainer}>
        <div className={styles.cardSection}>
          <ThreeDCard 
            title="Web Development"
            subtitle="Membangun website dinamis dan responsif yang disesuaikan dengan kebutuhan Anda, mulai dari landing page, portfolio, hingga dashboard interaktif."
            imageUrl="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            buttonText="See My Work →"
            secondaryButtonText="Get In Touch →"
          />
        </div>
        <div className={styles.cardSection}>
          <ThreeDCard 
            title="UI/UX Design"
            subtitle="Merancang antarmuka digital yang modern, user-friendly, dan konsisten, lengkap dengan prototype interaktif untuk pengalaman pengguna yang optimal."
            imageUrl="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            buttonText="See My Work →"
            secondaryButtonText="Get In Touch →"
          />
        </div>
        <div className={styles.cardSection}>
          <ThreeDCard 
            title="Graphic Design"
            subtitle="Menciptakan desain visual seperti poster, banner, konten media sosial, dan branding untuk mendukung identitas dan promosi bisnis Anda."
            imageUrl="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            buttonText="See My Work →"
            secondaryButtonText="Get In Touch →"
          />
        </div>
      </div>
    </section>
  );
}