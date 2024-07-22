import styles from './Footer.module.css';

export function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                <p>&copy; 2024 Thiago Study Case.</p>
                <div className={styles.socialLinks}>
                    <a href="https://www.linkedin.com/in/thiago-cardoso-21b101133/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>LinkedIn</a>
                </div>
            </div>
        </footer>
    );
}
