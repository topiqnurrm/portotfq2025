import React, { useState } from 'react';
import styles from './komen.module.css';

export default function Komen() {
  // Data dummy untuk contoh - nanti bisa diganti dengan data dari backend
  const [comments] = useState([
    {
      id: 1,
      email: "john.doe@example.com",
      name: "John Doe",
      rating: 5,
      comment: "Website yang sangat bagus! Design-nya modern dan clean. Sangat impressed dengan portfolio ini.",
      date: "2025-01-20",
      replies: [
        {
          id: 101,
          author: "Taufiq Nurrohman",
          comment: "Terima kasih banyak atas feedback positifnya! Senang sekali portfolio ini bisa memberikan kesan yang baik.",
          date: "2025-01-20"
        }
      ]
    },
    {
      id: 2,
      email: "sarah.wilson@example.com",
      name: "Sarah Wilson",
      rating: 4,
      comment: "User experience-nya smooth banget, tapi mungkin bisa ditambahkan lebih banyak animasi di beberapa section.",
      date: "2025-01-19",
      replies: []
    },
    {
      id: 3,
      email: "developer.mike@example.com",
      name: "Mike Developer",
      rating: 5,
      comment: "Code structure-nya terlihat rapih dari segi UI. Responsive design-nya juga sudah bagus di mobile.",
      date: "2025-01-18",
      replies: [
        {
          id: 102,
          author: "Taufiq Nurrohman",
          comment: "Thanks! Memang saya fokus banget di responsive design dan clean code. Appreciate the feedback!",
          date: "2025-01-18"
        }
      ]
    },
    {
      id: 4,
      email: "designer.anna@example.com",
      name: "Anna Designer",
      rating: 3,
      comment: "Overall bagus, tapi color scheme bisa lebih beragam. Mungkin bisa explore gradient yang lebih bold.",
      date: "2025-01-17",
      replies: []
    },
    {
      id: 5,
      email: "client.business@example.com",
      name: "Business Client",
      rating: 5,
      comment: "Perfect untuk presentasi ke klien! Professional banget tampilannya dan loading speed-nya juga cepat.",
      date: "2025-01-16",
      replies: [
        {
          id: 103,
          author: "Taufiq Nurrohman",
          comment: "Wah senang banget dengar ini! Performance memang jadi priority utama saya dalam development.",
          date: "2025-01-16"
        }
      ]
    }
  ]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => {
      const starValue = index + 1;
      return (
        <span
          key={index}
          className={`${styles.star} ${starValue <= rating ? styles.starActive : ''}`}
        >
          ★
        </span>
      );
    });
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <section id="komen" className={styles.komen}>
      <div className={styles.commentsContainer}>
        {comments.length === 0 ? (
          <div className={styles.emptyState}>
            <p className={styles.emptyText}>Belum ada komentar. Jadilah yang pertama!</p>
          </div>
        ) : (
          comments.map((comment) => (
            <div key={comment.id} className={styles.commentCard}>
              {/* Header dengan nama dan rating */}
              <div className={styles.commentHeader}>
                <div className={styles.authorInfo}>
                  <span
                    className={styles.authorName}
                    title={comment.email}
                  >
                    {comment.name}
                  </span>
                  <span className={styles.commentDate}>{formatDate(comment.date)}</span>
                </div>
                <div className={styles.rating}>
                  <div className={styles.starsContainer}>
                    {renderStars(comment.rating)}
                  </div>
                </div>
              </div>
              
              {/* Isi komentar */}
              <div className={styles.commentContent}>
                <p className={styles.commentContentP}>{comment.comment}</p>
              </div>
              
              {/* Balasan yang sudah ada */}
              {comment.replies && comment.replies.length > 0 && (
                <div className={styles.repliesContainer}>
                  {comment.replies.map((reply) => (
                    <div key={reply.id} className={styles.replyCard}>
                      <div className={styles.replyHeader}>
                        <span className={styles.replyAuthor}>{reply.author}</span>
                        <span className={styles.replyDate}>{formatDate(reply.date)}</span>
                      </div>
                      <div>
                        <p className={styles.replyContentP}>{reply.comment}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </section>
  );
}