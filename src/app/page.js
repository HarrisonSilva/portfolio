import React from 'react'
import Image from 'next/image'
import styles from '../styles/photo/photo.module.css'

export default function page() {
  return (
    <div>
      <Image priority className={styles.photo} src='/images/profile/myphoto.png' width='200' height='200' alt='minha-foto'/>
      <div className={styles.container}>
        <h3 className={styles.hello}>Ola Mundo,</h3>
        <h1 className={styles.title}>Eu sou <span className={styles.name}>Harrison</span></h1>
        <h4 className={styles.professional}>Desenvolvedor Web FullStack</h4>
      </div>
      <div>

      <p className={styles.paragraph}>Apaixonado em Resolver resoluçoes de problemas <br/> sempre em busca da melhor soluçao</p>
      </div>
    </div>
  )
}