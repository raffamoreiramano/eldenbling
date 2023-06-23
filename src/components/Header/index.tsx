import Link from 'next/link'
import styles from './styles.module.css'

export default function Header() {
  return <header className={styles.header}>
    <Link href='/' className={styles.link}>
      <img className={styles.icon} />
      <h1>Elden Bling</h1>
    </Link>
  </header>
}