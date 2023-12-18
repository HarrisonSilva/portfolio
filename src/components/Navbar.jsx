import React from 'react'
import Link from 'next/link'
import styles from '../styles/navbar/titles.module.css'

export default function Navibar() {
  return (
    <nav>
        
        <div className={styles.container}>
       <div className={styles.title}>
        <h3>
            <Link href='/sobre'>Sobre</Link>
          </h3>
          <h3>
            <Link href='/projetos'>Projetos</Link>
          </h3>
          <h3>
            <Link href='/'>Home</Link>
          </h3>
       </div>
       <div className={styles.network}>
          <h3>
          <a href="https://github.com/HarrisonSilva" target='_blank'>
            GitHub
          </a>
          </h3>
        <h3>
        <a href="https://www.linkedin.com/in/harrison-silva-dev/" target='_blank'>
          LinkedIn
        </a>
        </h3>
       </div>
      </div>
{/*       <h3 className={styles.name}>Harrison Couto</h3>
 */}    </nav>
  )
}
