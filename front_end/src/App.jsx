// Components 
import { Header } from "./components/Header";
import { Moto } from "./components/Moto";
import { Footer } from "./components/Footer";
import styles from './App.module.css';

// CSS
import './global.css';

export function App() {
  return (
    <div className={styles.app}>
      <Header/>
      <div className={styles.content}>
        <main>
          <Moto/>
        </main>
      </div>
      <Footer />
    </div>
  )
}