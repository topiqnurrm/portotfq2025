import React, { useState } from 'react';
import styles from './input.module.css';

export default function Input() {
  const [formData, setFormData] = useState({
    email: '',
    verificationCode: '',
    rating: 0,
    comment: ''
  });

  const [hoveredStar, setHoveredStar] = useState(0);

  const handleInputChange = (field: string, value: string | number) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleVerificationCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 6);
    handleInputChange('verificationCode', value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    alert('Data berhasil dikirim!');
  };

  const renderStars = () => {
    return Array.from({ length: 5 }, (_, index) => {
      const starValue = index + 1;
      return (
        <span
          key={index}
          className={`${styles.star} ${
            starValue <= (hoveredStar || formData.rating) ? styles.starActive : ''
          }`}
          onMouseEnter={() => setHoveredStar(starValue)}
          onMouseLeave={() => setHoveredStar(0)}
          onClick={() => handleInputChange('rating', starValue)}
        >
          ★
        </span>
      );
    });
  };

  return (
    <div className={styles.container}>      
      <div className={styles.form}>
        {/* Email Input */}
        <div className={styles.formGroup}>
          <label className={styles.label}>Email Address *</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className={styles.input}
            placeholder="Masukkan email Anda"
            required
          />
        </div>

        {/* Verification Code Input */}
        <div className={styles.formGroup}>
          <label className={styles.label}>Kode Verifikasi (6 digit) *</label>
          <input
            type="text"
            value={formData.verificationCode}
            onChange={handleVerificationCodeChange}
            className={`${styles.input} ${styles.verificationInput}`}
            placeholder="123456"
            maxLength={6}
            required
          />
          <div className={styles.helpText}>
            Masukkan 6 digit kode verifikasi yang dikirim ke email Anda
          </div>
        </div>

        {/* Star Rating */}
        <div className={styles.formGroup2}>
          <label className={styles.label2}>Rating</label>
          <div className={styles.ratingContainer}>
            <div className={styles.starsContainer}>
              {renderStars()}
            </div>
            <span className={styles.ratingText}>
              {formData.rating > 0 ? `${formData.rating} bintang` : 'Pilih rating'}
            </span>
          </div>
        </div>

        {/* Comment Input */}
        <div className={styles.formGroup}>
          <label className={styles.label}>Komentar *</label>
          <textarea
            value={formData.comment}
            onChange={(e) => handleInputChange('comment', e.target.value)}
            className={`${styles.input} ${styles.textarea}`}
            placeholder="Tulis komentar ..."
            rows={4}
            required
          />
          <div className={styles.helpText}>
            Minimal 10 karakter
          </div>
        </div>

        {/* Submit Button */}
        <div className={styles.submitya}>
          <button
            type="button"
            onClick={handleSubmit}
            className={styles.submitButton}
          >
            Kirim Data
          </button>
        </div>
      </div>

      {/* Preview Data */}
      {/* <div className={styles.preview}>
        <h3 className={styles.previewTitle}>Preview Data:</h3>
        <div className={styles.previewContent}>
          <p><strong>Email:</strong> {formData.email || '-'}</p>
          <p><strong>Kode Verifikasi:</strong> {formData.verificationCode || '-'}</p>
          <p><strong>Rating:</strong> {formData.rating > 0 ? `${formData.rating} bintang` : '-'}</p>
          <p><strong>Komentar:</strong> {formData.comment || '-'}</p>
        </div>
      </div> */}
    </div>
  );
}