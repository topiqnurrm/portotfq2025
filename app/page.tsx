import styles from "./page.module.css";

// Import komponen yang kamu buat
import Navbar from "./navbar/navbar_show/ini";
import PageContent from "./page/page_show/ini";

export default function Home() {
  return (
    <div className={styles.page}>
      {/* <Navbar /> */}
      <main className={styles.main}>
        <Navbar />
        {/* <PageContent /> */}
        <PageContent />
      </main>
      {/* <footer className={styles.footer}>
      </footer> */}
    </div>
  );
}
