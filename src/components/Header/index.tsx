import styles from './styles.module.css'

export default function Header() {
  return <header className={styles.header}>
    <img className={styles.icon} />
    <h1>Elden Bling</h1>
  </header>
}