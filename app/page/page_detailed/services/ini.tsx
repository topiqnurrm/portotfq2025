import styles from "./ini.module.css";

export default function Services() {
  return (
    <section id="services" className={styles.container}>
      <h1 className={styles.title}>Services</h1>
      <p className={styles.subtitle}>
        Ini adalah halaman default menggunakan TypeScript dan CSS terpisah.
      </p>
    </section>
  );
}
