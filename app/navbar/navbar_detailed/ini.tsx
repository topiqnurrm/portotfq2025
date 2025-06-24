import styles from "./ini.module.css";

export default function HomePage() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>detailed nav</h1>
      <p className={styles.subtitle}>
        Ini adalah halaman default menggunakan TypeScript dan CSS terpisah.
      </p>
    </main>
  );
}
