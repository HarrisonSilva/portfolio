import React from 'react'
import styles from '../styles/notfound/notfound.module.css'
import Footer from '../components/footer/Fixed'

export default function NotFound() {
  return (
    <div>
        <h1 className={styles.title}>
        essa página <span className={styles.notfound}>não existe!</span>
        </h1>
       <Footer />
    </div>
  )
}
