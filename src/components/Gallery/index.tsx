'use client'

import { useState } from 'react'
import styles from './styles.module.css'
import Image from 'next/image'

interface image {
  src: string;
  height: number;
  width: number;
  alt: string;
}

export default function Gallery() {
  const images: image[] = [];

  const [selected, setSelected] = useState(images[0]);

  return <div className={styles.gallery}>
    <input type="checkbox" id={styles.toggle} />
    <div className={styles.preview}>
      <ul>
        {
          images.map((image, index) => {
            return <li key={index}>
              <label htmlFor={styles.toggle} className={styles.open} onClick={() => setSelected(image)}>
                <picture>
                  <Image priority={true} {...image} />
                </picture>
              </label>
            </li>
          })
        }
      </ul>
    </div>
    <div className={styles.fullscreen}>
      <figure>
        <label htmlFor={styles.toggle} className={styles.close}>✕</label>
        <picture>
          <Image priority={true} {...selected} />
        </picture>
      </figure>
      <ul>
        {
          images.map((image, index) => {
            let onClick, className = undefined;

            if (image.alt === selected.alt && image.src === selected.src) {
              className = styles.selected
            } else {
              onClick = () => setSelected(image)
            }

            return <li key={index}>
              <button type='button' className={styles.select} onClick={onClick}>
                <picture className={className}>
                  <Image priority={true} {...image} />
                </picture>
              </button>
            </li>
          })
        }
      </ul>
    </div>
  </div>
}