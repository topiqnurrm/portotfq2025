import styles from "./ini.module.css";

import Detailed from "../navbar_detailed/ini";

export default function HomePage() {
  return (
    <main className={styles.container}>
        <Detailed />
      <h1 className={styles.title}>navbar</h1>
      <p className={styles.subtitle}>
        Ini adalah halaman default menggunakan TypeScript dan CSS terpisah.
      </p>
    </main>
  );
}
