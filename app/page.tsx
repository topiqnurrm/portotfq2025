"use client"

import styles from "./page.module.css";

// Import komponen yang kamu buat
import Navbar from "./navbar/navbar_show/ini";
import PageContent from "./page/page_show/ini";

import ClickSpark from '@/app/components/ClickSpark/ClickSpark';

export default function Home() {
  return (
    <ClickSpark
      sparkColor='#667eea'
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
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
    </ClickSpark>
  );
}
