import React from 'react'
import styles from '../styles/footer/name.module.css'

export default function Footer() {
  return (
    <footer className={styles.container}>
        <p className={styles.title}>
            Desenvolvido por <span className={styles.name}>Harrison Couto</span> &copy; 2023
        </p>
    </footer>
  )
}
