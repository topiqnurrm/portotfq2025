"use client";
import Image from 'next/image';
import styles from "./ini.module.css";
import Komen from "./content/komen";
import Input from "./content/input";
import { useState } from 'react';

export default function Contact() {
  const [activeTab, setActiveTab] = useState('input');

  return (
    <section id="contact" className={styles.container}>
      <div className={styles.wadah}>
        <div className={styles.contentArea}>
          {activeTab === 'input' ? <Input/> : <Komen/>}
        </div>
        
        <div className={styles.sosmed}>
          <div className={styles.kontakmiring}>
            <div className={styles.iniin}>
              <h2 className={styles.navTitle}>Contact Me</h2>
              <p className={styles.navSubtitle}>by Taufiq Nurrohman</p>
            </div>
            
            <div className={styles.tabContainer}>
              <button 
                className={`${styles.tabButton} ${activeTab === 'input' ? styles.active : ''}`}
                onClick={() => setActiveTab('input')}
              >
                Comment
              </button>
              <button 
                className={`${styles.tabButton} ${activeTab === 'komen' ? styles.active : ''}`}
                onClick={() => setActiveTab('komen')}
              >
                Submit
              </button>
            </div>
          </div>

          <div className={styles.socialLinks}>
            <div className={styles.sc1}>
              <a href="https://www.linkedin.com/in/topiqnurrm/" target="_blank" rel="noopener noreferrer" className={styles.socialItem}>
                <img src="/home/linkedin0.png" alt="LinkedIn" className={styles.socialIcon} />
                <p>Tafiq Nurrohman <br/>(topiqnurrm)</p>
              </a>
              <a href="https://github.com/topiqnurrm" target="_blank" rel="noopener noreferrer" className={styles.socialItem}>
                <img src="/home/github0.png" alt="GitHub" className={styles.socialIcon} />
                <p>topiqnurrm</p>
              </a> 
            </div>
            <div className={styles.sc2}>
              <a href="https://instagram.com/topiqnurrm" target="_blank" rel="noopener noreferrer" className={styles.socialItem}>
                <img src="/home/instagram0.png" alt="Instagram" className={styles.socialIcon} />
                <p>@topiqnurrm</p>
              </a>
              <a href="https://wa.me/6288232363332" target="_blank" rel="noopener noreferrer" className={styles.socialItem}>
                <img src="/home/wa0.png" alt="WhatsApp" className={styles.socialIcon} />
                <p>+62 882-3236-3332</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}