import styles from './styles.module.css'
import React from 'react'

interface props extends React.PropsWithChildren {
  id?: string;
  className?: string,
}

export default function Table(props:  props) {

  return <table {...props} className={props.className ? `${props.className} ${styles.table}` : styles.table} />
}