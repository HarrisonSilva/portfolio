import React from 'react'
import { mockProjects } from '@/mock/data'
import Image from 'next/image'
import styles from '../../styles/projects/project.module.css'
import Link from 'next/link'

export default function page() {
  return (
    <div>
      <h1 className={styles.title}>Projetos</h1>
      <div className={styles.container}>
      {mockProjects.map((project) => (
        
        <div key={project.id} className={styles.card} >
            <h2 className={styles.name}>{project.name}</h2>
            <Link href={`/projetos/${project.id}`}>
            <Image as="image" priority src={project.image} width='300' height='300' alt='img' />
            </Link>
            <ul className={styles.list}>{project.tech.map((tech, index) => (
              <li key={index}>{tech}</li>
              ))}</ul>
            <p></p>
          </div>
    
      ))}
      </div>
    </div>
  )
}
/*       id: '1',
      name: 'Pixel Art',
      deploy: 'https://github.com/HarrisonSilva',
      image: false,
      type: 'DOM',
      tech: ['JavaScrip, CSS, HTML'],
      details: `molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum`,
      repositorio: 'https://github.com/HarrisonSilva', */