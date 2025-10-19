import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.section}>
          <h3>StreamHub</h3>
          <p>Your destination for amazing video content</p>
        </div>
        <div className={styles.section}>
          <h4>Quick Links</h4>
          <a href="#">About Us</a>
          <a href="#">Contact</a>
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
        </div>
        <div className={styles.section}>
          <h4>Categories</h4>
          <a href="#">Technology</a>
          <a href="#">Nature</a>
          <a href="#">Music</a>
          <a href="#">Travel</a>
        </div>
        <div className={styles.section}>
          <h4>Follow Us</h4>
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
          <a href="#">YouTube</a>
          <a href="#">Facebook</a>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>&copy; 2024 StreamHub. All rights reserved.</p>
      </div>
    </footer>
  );
}
