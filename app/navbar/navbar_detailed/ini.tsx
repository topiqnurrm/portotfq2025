import styles from "./ini.module.css";
import Link from "next/link";
import Image from 'next/image';

export default function HomePage() {
  return (
    <main className={styles.detailed}>
        <nav className={styles.nav}>
            <Link href="#homepage">Home</Link>
        </nav>
        <nav className={styles.nav}>
            <Link href="#about">About</Link>
        </nav>
        <nav className={styles.nav}>
            <Link href="#contact">Projects</Link>
        </nav>
        <nav className={styles.nav}>
            <Link href="#contact">Services</Link>
        </nav>
        <nav className={styles.nav}>
            <Link href="#contact">Contact</Link>
        </nav>
    </main>
  );
}
