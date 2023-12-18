import React from 'react'
import Link from 'next/link'
import styles from '../styles/navbar/titles.module.css'

export default function Navibar() {
  return (
    <nav>
        
        <div className={styles.container}>
       <ol className={styles.title}>
        <li>
            <Link href='/sobre'>Sobre</Link>
          </li>
          <li>
            <Link href='/projetos'>Projetos</Link>
          </li>
          <li>
            <Link href='/'>Home</Link>
          </li>
       </ol>
       <ol className={styles.network}>
          <li>
          <a href="https://github.com/HarrisonSilva" target='_blank'>
            GitHub
          </a>
          </li>
        <li>
        <a href="https://www.linkedin.com/in/harrison-silva-dev/" target='_blank'>
          LinkedIn
        </a>
        </li>
       </ol>
      </div>
{/*       <h3 className={styles.name}>Harrison Couto</h3>
 */}    </nav>
  )
}
