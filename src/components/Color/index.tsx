import { CSSProperties } from 'react'
import styles from './styles.module.css'

export default function Color({ RGB }:{ RGB: [number, number, number] }) {
  const [red, green, blue] = RGB
  const title = `R: ${red} \nG: ${green} \nB: ${blue}`
  const style = { "--rgb": [red, green, blue] } as CSSProperties

  return <label className={styles.color}><i title={title} style={style} /><input type="checkbox"/><span>{title}</span></label>
}