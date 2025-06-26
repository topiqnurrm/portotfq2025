import styles from "./ini.module.css";

export default function About() {
  return (
    <section id="about" className={styles.container}>
      <h1 className={styles.title}>About</h1>
      <p className={styles.subtitle}>
        Ini adalah halaman default menggunakan TypeScript dan CSS terpisah.
      </p>
    </section>
  );
}
