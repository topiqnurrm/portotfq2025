"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./ini.module.css";

import Lanyard from "@/app/components/Lanyard/Lanyard";

export default function Home() {
  const [gravityX, setGravityX] = useState(0);
  const animationRef = useRef<NodeJS.Timeout | null>(null);
  
  // State untuk tracking active section
  const [activeSection, setActiveSection] = useState('home');
  
  // State untuk typing animation
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typeSpeed, setTypeSpeed] = useState(100);
  
  const roles = [
    "Full Stack Developer",
    "Graphic Designer",
    "UI/UX Designer",
  ];

  // Effect untuk mendeteksi section aktif
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'services', 'contact'];
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          const height = rect.height;

          // Hitung bagian yang terlihat
          const visibleBottom = Math.min(window.innerHeight, rect.bottom);
          const visibleHeight = visibleBottom - Math.max(rect.top, 0);
          const visibleRatio = visibleHeight / height;

          if (visibleRatio >= 0.6) { // jika 60% atau lebih terlihat
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial active section

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fungsi untuk smooth scroll ke section tertentu
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - (window.innerHeight * 0.07);
      
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
        setCurrentText(prev => prev.slice(0, -1));
        setTypeSpeed(50);
        
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentIndex(prev => (prev + 1) % roles.length);
          setTypeSpeed(100);
        }
      } else {
        if (currentText !== currentRole) {
          setCurrentText(currentRole.slice(0, currentText.length + 1));
          setTypeSpeed(100);
        } else {
          setTimeout(() => {
            setIsDeleting(true);
            setTypeSpeed(50);
          }, 2000);
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
      {/* Lanyard hanya ditampilkan ketika section aktif adalah 'home' */}
      {activeSection === 'home' && (
        <div className={styles.lanyardku}>
          <Lanyard 
            position={[0, 0, 15]} 
            gravity={[gravityX, -40, 0]} 
          />    
        </div>
      )}
      
      <div className={styles.wadahku}>
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
          <a href="mailto:topiqnurrm@gmail.com" target="_blank" rel="noopener noreferrer" className={styles.socialItem}>
            <img src="/home/email0.png" alt="Email" className={styles.socialIcon2} />
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
      </div>
    </section>
  );
}