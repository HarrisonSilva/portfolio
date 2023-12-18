import React from 'react'
import Image from 'next/image'
import styles from '../styles/photo/photo.module.css'

export default function page() {
  return (
    <div>
      <Image priority className={styles.photo} src='/images/profile/myphoto.png' width='200' height='200' alt='minha-foto'/>
    </div>
  )
}
