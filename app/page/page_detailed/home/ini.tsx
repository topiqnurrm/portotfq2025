"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./ini.module.css";

import Lanyard from "@/app/components/Lanyard/Lanyard";

export default function Home() {
  const [gravityX, setGravityX] = useState(0);
  const animationRef = useRef<NodeJS.Timeout | null>(null);

  // Fungsi untuk memulai animasi otomatis
  const startAutoAnimation = () => {
    if (animationRef.current) {
      clearInterval(animationRef.current);
    }

    animationRef.current = setInterval(() => {
      // Hapus kondisi !isUserInteracting agar animasi selalu berjalan
      setGravityX(prev => prev === -5 ? 5 : -5);
    }, 2000); // Ganti arah setiap 2 detik
  };

  // Fungsi untuk menghentikan animasi otomatis
  const stopAutoAnimation = () => {
    if (animationRef.current) {
      clearInterval(animationRef.current);
      animationRef.current = null;
    }
  };

  // Effect untuk memulai animasi saat komponen dimount
  useEffect(() => {
    const timer = setTimeout(() => {
      startAutoAnimation();
    }, 1000); // Mulai animasi setelah 1 detik

    return () => {
      clearTimeout(timer);
      stopAutoAnimation();
    };
  }, []);

  return (
    <section id="home" className={styles.container}>   
      <div className={styles.lanyardku}>
        <Lanyard 
          position={[0, 0, 15]} 
          gravity={[gravityX, -40, 0]} 
        />    
      </div> 
      <h1 className={styles.title}>Home</h1>
      <p className={styles.subtitle}>
        Ini adalah halaman default menggunakan TypeScript dan CSS terpisah.
      </p>
    </section>
  );
}