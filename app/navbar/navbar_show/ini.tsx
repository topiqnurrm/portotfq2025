import styles from "./ini.module.css";
import Detailed from "../navbar_detailed/ini";

export default function HomePage() {
  return (
    <main className={styles.navbar}>
      <Detailed />
    </main>
  );
}
