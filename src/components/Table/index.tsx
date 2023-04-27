import React from 'react';
import styles from './styles.module.css';
import { Children, ReactElement } from 'react';
import { randomUUID } from 'crypto';
interface props {
  id?: string;
  collapsable?: boolean | string;
  className?: string,
  children: React.ReactElement[]
}

export default function Table(props:  props) {
  if (!props.collapsable) {
    return <table {...props} className={props.className ? `${props.className} ${styles.table}` : styles.table} />
  }

  const [thead] = Children.map(props.children, (child: ReactElement) => {
    if (child.type === 'thead') {
      return child;
    }
  });

  const [tbody] = Children.map(props.children, (child: ReactElement) => {
    if (child.type === 'tbody') {
      return child;
    }
  });

  const collapse_id = props.id ? `collapse-${props.id}` : `collapse-${randomUUID()}` ;

  const ths = Children.map(thead.props.children.props.children, (child: ReactElement) => child);

  const thead_children = ths.map((child: ReactElement, index) => {
    if (ths.length === 1) {
      return <th key={index} {...child.props} colSpan={'100%'}>
        <label className={styles.collapse_button} htmlFor={collapse_id}>
          <span>{child.props.children}</span>
          <i className={styles.collapse_icon} />
        </label>
        <input className={styles.collapse_input} type="checkbox" id={collapse_id} />
      </th>
    }

    let final = <th key={index} {...child.props}>
      <label className={styles.collapse_button} htmlFor={collapse_id}>
        {child.props.children}
      </label>
    </th>

    if (child === ths.at(ths.length - 1)) {
      final = <th key={index} {...child.props}>
        <label className={styles.collapse_button} htmlFor={collapse_id}>
          <span>{child.props.children}</span>
          <i className={styles.collapse_icon} />
        </label>
        <input className={styles.collapse_input} type="checkbox" id={collapse_id} />
      </th>
    }

    return final;
  });

  return <table id={props.id} className={props.className ? `${props.className} ${styles.table}` : styles.table}>
    <thead {...thead.props}>
      <tr {...thead.props.children.props}>
        {thead_children}
      </tr>
    </thead>

    {tbody}
  </table>
}