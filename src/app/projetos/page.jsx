import React from 'react'
import { mockProjects } from '@/mock/data'
import Image from 'next/image'
import styles from '../../styles/projects/project.module.css'

export default function page() {
  return (
    <div>
      <h1 className={styles.title}>Projetos</h1>
      {mockProjects.map((project) => (
          <div className={styles.container} key={project.id}>
            <p>{project.name}</p>
            <Image src={project.image} width='200' height='200' alt='img' />
            <ol>{project.tech.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}</ol>
            <p></p>
          </div>
      ))}
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