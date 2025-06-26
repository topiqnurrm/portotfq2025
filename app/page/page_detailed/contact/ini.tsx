import styles from "./ini.module.css";

export default function Contact() {
  return (
    <section id="contact" className={styles.container}>
      <h1 className={styles.title}>Contact</h1>
      <p className={styles.subtitle}>
        Ini adalah halaman default menggunakan TypeScript dan CSS terpisah.
      </p>
    </section>
  );
}
