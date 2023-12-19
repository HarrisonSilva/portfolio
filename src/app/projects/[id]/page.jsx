'use client';
import React, { useEffect, useState } from 'react'
import styles from '../../../styles/projects/projectId.module.css'
import { mockProjects } from '@/mock/data';
import Imagem from 'next/image'
import Link from 'next/link'
import deployimg from '../../../mock/deploy.png'
import ghimg from '../../../mock/gh.png'

export default function page({ params }) {
  const [project, setProject] = useState()
  const { id } = params
  useEffect(() => {
    const filter = mockProjects.filter((idProject) => idProject.id === id)
    setProject(filter[0])
  },[id])
  return (
    <div>
        {project && 
         <div className={styles.container}>
            <h1 className={styles.title}>{project.name}</h1>
            <Imagem priority src={project.image} width='200' height='200' alt={`thumbnail project ${project.name}`} />
            <p>{project.details}</p>
            <Link className={styles.deploy} href={project.repositorio}><h1>Deploy</h1></Link>
            <Imagem className={styles.deployimg} src={deployimg} width='40' height='40' alt='deploy image'/>
            <Link className={styles.gh} href={project.deploy}><h1>Repositorio {project.name}</h1></Link>
            <Imagem className={styles.ghimg} src={ghimg} width='40' height='40' alt='gh image'/>
         </div>
/*     id: '1',
      name: 'Pixel Art',
      deploy: 'https://github.com/HarrisonSilva',
      image: imgMock,
      type: 'DOM',
      tech: ['JavaScrip', 'CSS', 'HTML'],
      details: `molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum`,
      repositorio: 'https://github.com/HarrisonSilva', */
        }
        
    </div>
  )
}
