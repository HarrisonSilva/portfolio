"use client"
import React from 'react'
import Link from 'next/link'
import styles from '../styles/navbar/titles.module.css'

export default function Navibar() {
  const menuToogleDisplay = () => {
    const navibarContainer = document.querySelector('#navibar-container')
    if (navibarContainer.style.display === 'none') {
      navibarContainer.style.display = 'flex'
    } else {
      navibarContainer.style.display = 'none'
    }
  }
  return (
    <nav>
        <div onClick={menuToogleDisplay} className={styles.menu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div onClick={menuToogleDisplay} id='navibar-container' className={styles.container}>
       <div className={styles.title}>
        <h3>
            <Link href='/about'>Sobre</Link>
          </h3>
          <h3>
            <Link href='/projects'>Projetos</Link>
          </h3>
          <h3>
            <Link href='/'>Home</Link>
          </h3>
       </div>
       <div className={styles.network}>
          <h3>
          <Link href="https://github.com/HarrisonSilva" target='_blank'>
            GitHub
          </Link>
          </h3>
        <h3>
        <Link href="https://www.linkedin.com/in/harrison-silva-dev/" target='_blank'>
          LinkedIn
        </Link>
        </h3>
       </div>
      </div>
{/*       <h3 className={styles.name}>Harrison Couto</h3>
 */}    </nav>
  )
}
