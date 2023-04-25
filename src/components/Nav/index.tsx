import styles from './styles.module.css'

export default function Nav() {
  return <nav className={styles.nav}>
    <ul>
      <li><a href='#'>Ascending</a></li>
      <li><a href='#'>Publication date</a></li>
      <li>
        <input className={styles.search} type='text' placeholder='Search' />
      </li>
    </ul>

    <ul>
      <li><a href='#'>Suggestion</a></li>
      <li><a href='#'>About</a></li>
    </ul>
  </nav>
}