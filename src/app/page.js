import React from 'react'
import Image from 'next/image'
import styles from '../styles/photo/photo.module.css'
import Link from 'next/link'
import Footer from '../components/footer/Fixed'

export default function page() {
  return (
    <div>
      <div className={styles.container}>
     
      <Image priority className={styles.photo} src='/images/profile/myphoto.png' width='200' height='200' alt='minha-foto'/>
          <div className={styles.containerData}>
            <h3 className={styles.hello}>Ola Mundo,</h3>
            <h1 className={styles.title}>Eu sou <span className={styles.name}>Harrison</span></h1>
            <h4 className={styles.professional}>Desenvolvedor Web FullStack</h4>
          </div>
      </div>
      <hr className={styles.line}/>
      <div className={styles.containerInfo}>
        <Link className={styles.cv} href='https://drive.google.com/file/d/1JXyWQA6NfY969q5oljjKVbTrxfWgKJll/view?usp=sharing' target='_blank'><h3>Acessar CV</h3></Link>
        <h3 className={styles.email}>E-mail: Harrison.couto@outlook.com</h3>
      </div>
     <Footer />
    </div>
  )
}
