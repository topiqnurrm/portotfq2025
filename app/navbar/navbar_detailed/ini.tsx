"use client";

import styles from "./ini.module.css";
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

    // Menu items dengan nama untuk mapping icon
    const menuItems = [
        { name: 'Home', section: 'home' },
        { name: 'About', section: 'about' },
        { name: 'Projects', section: 'projects' },
        { name: 'Services', section: 'services' },
        { name: 'Contact', section: 'contact' }
    ];

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
            
            {menuItems.map((item) => {
                const isActive = activeSection === item.section;
                const iconSuffix = isActive ? "1" : "0";
                
                return (
                    <div key={item.section} className={styles.nav}>
                        <button 
                            onClick={() => scrollToSection(item.section)}
                            className={`${styles.navLink} ${isActive ? styles.active : ''}`}
                        >
                            <div className={styles.navContent}>
                                <Image
                                    src={`/menu/${item.name}${iconSuffix}.png`}
                                    alt={`${item.name} icon`}
                                    width={18}
                                    height={18}
                                    className={styles.navIcon}
                                />
                                <span className={styles.navText}>{item.name}</span>
                            </div>
                        </button>
                    </div>
                );
            })}
        </nav>
    );
}