import styles from './Header.module.css';
import logo from "../assets/logo.svg";

export function Header() {
    return(
        <header className={styles.header}>
            <img src={logo} alt="Logo" className={styles.logo} />
            <h1 className={styles.title}>Study Case</h1>
            <nav className={styles.nav}>
                <ul className={styles.navList}>

                </ul>
            </nav>
        </header>
    );
}
