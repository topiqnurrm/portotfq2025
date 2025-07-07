import styles from "./ini.module.css";
import React from 'react';

import ThreeDCard from '@/app/components/3dCard/3dCard';

export default function Services() {
  return (
    <section id="services" className={styles.container}>
      <h1 className={styles.title}>Services</h1>
      <p className={styles.subtitle}>
        Ini adalah halaman default menggunakan TypeScript dan CSS terpisah.
      </p>
      <div className={styles.cardSection}>
        <ThreeDCard 
          title="Make things float in air"
          subtitle="Hover over this card to unleash the power of CSS perspective"
          imageUrl="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          buttonText="Try now →"
          secondaryButtonText="Sign up"
        />
      </div>
    </section>
  );
}