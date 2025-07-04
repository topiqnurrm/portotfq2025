"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./ini.module.css";

import Lanyard from "@/app/components/Lanyard/Lanyard";

export default function Home() {
  const [gravityX, setGravityX] = useState(0);
  const animationRef = useRef<NodeJS.Timeout | null>(null);
  
  // State untuk typing animation
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typeSpeed, setTypeSpeed] = useState(100);
  
  const roles = [
    "Full Stack Developer",
    "Graphic Designer",
    "UI/UX Designer",
    // "Frontend Developer",
    // "Backend Developer",
    // "Mobile Developer"
  ];

  // Fungsi untuk smooth scroll ke section tertentu
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - (window.innerHeight * 0.07); // 7vh offset
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Typing animation effect
  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[currentIndex];
      
      if (isDeleting) {
        // Menghapus karakter
        setCurrentText(prev => prev.slice(0, -1));
        setTypeSpeed(50); // Kecepatan menghapus lebih cepat
        
        // Jika sudah selesai menghapus
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentIndex(prev => (prev + 1) % roles.length);
          setTypeSpeed(100);
        }
      } else {
        // Mengetik karakter
        if (currentText !== currentRole) {
          setCurrentText(currentRole.slice(0, currentText.length + 1));
          setTypeSpeed(100);
        } else {
          // Pause sebelum mulai menghapus
          setTimeout(() => {
            setIsDeleting(true);
            setTypeSpeed(50);
          }, 2000); // Pause 2 detik
        }
      }
    };

    const typingTimer = setTimeout(handleTyping, typeSpeed);
    return () => clearTimeout(typingTimer);
  }, [currentText, currentIndex, isDeleting, typeSpeed]);

  // Fungsi untuk memulai animasi otomatis
  const startAutoAnimation = () => {
    if (animationRef.current) {
      clearInterval(animationRef.current);
    }

    animationRef.current = setInterval(() => {
      setGravityX(prev => prev === -5 ? 5 : -5);
    }, 2000);
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
    }, 1000);

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
      <h1 className={styles.title1}>Hello, It's me</h1>
      <h1 className={styles.title3}>Taufiq Nurrohman</h1>
      <div className={styles.roleContainer}>
        <h1 className={styles.title2}>I'am a  </h1>
        <h1 className={styles.title2}></h1>
        <h1 className={styles.title2 + " " + styles.typingText}>
          {currentText}
          <span className={styles.cursor}>|</span>
        </h1>
      </div>
      <p className={styles.subtitle}>
        Membangun masa depan, satu baris kode,<br />
        satu inovasi, dan satu tekad tanpa batas.
      </p>
      <div className={styles.socialMenu}>
        <a href="https://wa.me/6288232363332" target="_blank" rel="noopener noreferrer" className={styles.socialItem}>
          <img src="/home/wa0.png" alt="WhatsApp" className={styles.socialIcon} />
        </a>
        <a href="https://instagram.com/topiqnurrm" target="_blank" rel="noopener noreferrer" className={styles.socialItem}>
          <img src="/home/instagram0.png" alt="Instagram" className={styles.socialIcon} />
        </a>
        <a href="https://www.linkedin.com/in/topiqnurrm/" target="_blank" rel="noopener noreferrer" className={styles.socialItem}>
          <img src="/home/linkedin0.png" alt="LinkedIn" className={styles.socialIcon} />
        </a>
        <a href="https://github.com/topiqnurrm" target="_blank" rel="noopener noreferrer" className={styles.socialItem}>
          <img src="/home/github0.png" alt="GitHub" className={styles.socialIcon} />
        </a>
      </div>

      {/* About Me Button */}
      <div className={styles.buttonContainer}>
        <button 
          onClick={() => scrollToSection('about')}
          className={styles.aboutButton}
        >
          About Me 
        </button>
      </div>
    </section>
  );
}