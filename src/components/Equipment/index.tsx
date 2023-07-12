import Armor from '@/models/Armor'
import styles from './styles.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Equipment({ armor }: { armor: Armor }) {
  return <ul className={styles.equipment}>
    {
      Armor.keys.map((key, index) => {
        const piece = armor[key]
     
        if (piece) {
          const { src, width, height } = piece.icon
          const icon = { src, width, height }

          return <li key={index}>
            <Link href={piece.link} target="_blank" rel="noopener noreferrer">
              <h3>{piece.name}</h3>
              <picture>
                <Image {...icon} alt={piece.name} />
              </picture>
            </Link>
          </li>
        }
      })
    }
  </ul>
}