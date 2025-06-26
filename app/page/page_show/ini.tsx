import styles from "./ini.module.css";
import Homepage from "../page_detailed/home/ini";
import About from "../page_detailed/about/ini";
import Projects from "../page_detailed/projects/ini";
import Services from "../page_detailed/services/ini";
import Contact from "../page_detailed/contact/ini";

export default function HomePage() {
  return (
    <main className={styles.page}>
        <Homepage />
        <About />
        <Projects />
        <Services />
        <Contact />
    </main>
  );
}
