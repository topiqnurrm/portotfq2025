"use client";

import styles from "./ini.module.css";
import Link from "next/link";
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function NavbarDetailed() {
    // untuk scroll ke section tertentu
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

    // untuk menandai section yang aktif
    const [activeSection, setActiveSection] = useState('home');
    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'projects', 'services', 'contact'];
            
            for (const sectionId of sections) {
                const element = document.getElementById(sectionId);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    const height = rect.height;

                    // Hitung bagian yang terlihat
                    const visibleTop = Math.max(0, 0 - rect.top); // berapa bagian atas yang sudah masuk
                    const visibleBottom = Math.min(window.innerHeight, rect.bottom); // sampai mana bagian bawah terlihat

                    const visibleHeight = visibleBottom - Math.max(rect.top, 0); // bagian yang benar-benar terlihat

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

    return (
        <nav className={styles.detailed}>
            <div className={styles.imageContainer}>
                <Image
                    onClick={() => scrollToSection('about')}
                    className={`${styles.circleImage} ${activeSection === 'about' ? styles.active : ''}`}
                    src="/user.png" // Ganti dengan path ke gambar kamu
                    alt="Profile"
                    width={32}
                    height={32}
                />
            </div>
            <div className={styles.nav}>
                <button 
                    onClick={() => scrollToSection('home')}
                    className={`${styles.navLink} ${activeSection === 'home' ? styles.active : ''}`}
                >
                Home
                </button>
            </div>
            <div className={styles.nav}>
                <button 
                    onClick={() => scrollToSection('about')}
                    className={`${styles.navLink} ${activeSection === 'about' ? styles.active : ''}`}
                >
                About
                </button>
            </div>
            <div className={styles.nav}>
                <button 
                    onClick={() => scrollToSection('projects')}
                    className={`${styles.navLink} ${activeSection === 'projects' ? styles.active : ''}`}
                >
                Projects
                </button>
            </div>
            <div className={styles.nav}>
                <button 
                    onClick={() => scrollToSection('services')}
                    className={`${styles.navLink} ${activeSection === 'services' ? styles.active : ''}`}
                >
                Services
                </button>
            </div>
            <div className={styles.nav}>
                <button 
                    onClick={() => scrollToSection('contact')}
                    className={`${styles.navLink} ${activeSection === 'contact' ? styles.active : ''}`}
                >
                Contact
                </button>
            </div>
        </nav>
    );
}