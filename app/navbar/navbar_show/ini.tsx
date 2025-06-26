import styles from "./ini.module.css";

import Detailed from "../navbar_detailed/ini";

export default function HomePage() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}></h1>
      <p className={styles.subtitle}>
        <Detailed />
      </p>
    </main>
  );
}
