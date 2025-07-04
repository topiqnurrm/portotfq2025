"use client";

import styles from "./introduction.module.css";

import TextPressure from '@/app/components/TextPressure/TextPressure';

export default function Introduction() {
  return (
    <div className={styles.container}>
      <div className={styles.hellome}>
        <div style={{position: 'relative', height: '10vh', }}>
          <TextPressure
            text="Hello, It's me,"
            // fontFamily="SansSerifFLF"
            // fontUrl="/fonts/SansSerifFLF.otf"
            flex={true}
            alpha={false}
            stroke={false}
            width={true}
            weight={true}
            italic={true}
            textColor="#666"
            strokeColor="#ff0000"
            minFontSize={36}
          />
        </div>
      </div>
      <div>
        <h2>Introduction</h2>
        <p>Konten untuk bagian Introduction.</p>
      </div>
    </div>
  );
}
