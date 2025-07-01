"use client";

import styles from "./ini.module.css";

import Lanyard from "@/app/components/Lanyard/Lanyard";

export default function Home() {
  return (
    <section id="home" className={styles.container}>        
      <h1 className={styles.title}>Home</h1>
      <Lanyard />
      <p className={styles.subtitle}>
        Ini adalah halaman default menggunakan TypeScript dan CSS terpisah.
      </p>
    </section>
  );
}
