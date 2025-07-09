import React, { useState, useRef } from 'react';
import styles from './3dCard.module.css';

interface ThreeDCardProps {
  title?: string;
  subtitle?: string;
  imageUrl?: string;
  hoverImageUrl?: string; // Gambar untuk state hover
  buttonText?: string;
  secondaryButtonText?: string;
  className?: string;
  onButtonClick?: () => void;
  onSecondaryButtonClick?: () => void;
}

const ThreeDCard: React.FC<ThreeDCardProps> = ({
  title = "Make things float in air",
  subtitle = "Hover over this card to unleash the power of CSS perspective",
  imageUrl = "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  hoverImageUrl = "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Default hover image
  buttonText = "See My Work →",
  secondaryButtonText = "Get In Touch →",
  className = "",
  onButtonClick,
  onSecondaryButtonClick
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setMousePosition({ x, y });
  };

  const getTransform = () => {
    if (!isHovered || !cardRef.current) return '';
    
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Rotasi yang lebih subtle untuk card container
    const rotateX = (mousePosition.y - centerY) / 30;
    const rotateY = -(mousePosition.x - centerX) / 30;
    
    return `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  return (
    <div className={`${styles.cardContainer} ${className}`}>
      <div 
        ref={cardRef}
        className={`${styles.card} ${isHovered ? styles.cardHovered : ''}`}
        style={{ transform: getTransform() }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
      >
        <div className={styles.cardContent}>
          <h2 
            className={styles.cardTitle}
            style={{ 
              transform: isHovered ? 'translateZ(80px) scale(1.05)' : 'translateZ(0) scale(1)'
            }}
          >
            {title}
          </h2>
          <p 
            className={styles.cardSubtitle}
            style={{ 
            transform: isHovered ? 'translateZ(60px) scale(1.02)' : 'translateZ(0) scale(1)'
            }}
          >
            {subtitle}
          </p>
          
          <div 
            className={styles.imageContainer}
            style={{ 
              transform: isHovered ? 'translateZ(100px) scale(1.03)' : 'translateZ(0) scale(1)',
              boxShadow: isHovered ? '0 2px 6px rgba(0,0,0,0.08)' : 'none',
            }}
          >
            {/* Normal Image */}
            <img 
              src={imageUrl} 
              alt="Card image" 
              className={`${styles.cardImage} ${styles.normalImage} ${isHovered ? styles.imageHidden : ''}`}
            />
            
            {/* Hover Image */}
            <img 
              src={hoverImageUrl} 
              alt="Card hover image" 
              className={`${styles.cardImage} ${styles.hoverImage} ${isHovered ? styles.imageVisible : ''}`}
            />
          </div>
          
            <div className={styles.buttonContainer}>
                <button 
                    className={styles.secondaryButton}
                    onClick={onButtonClick}
                    style={{ 
                        transform: isHovered ? 'translateZ(70px) scale(1.05)' : 'translateZ(0) scale(1)'
                    }}
                    >
                    {buttonText}
                </button>
                <button 
                    className={styles.secondaryButton}
                    onClick={onSecondaryButtonClick}
                    style={{ 
                        transform: isHovered ? 'translateZ(70px) scale(1.05)' : 'translateZ(0) scale(1)'
                    }}
                    >
                    {secondaryButtonText}
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeDCard;