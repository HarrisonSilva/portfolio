'use client';
import React, { useEffect, useState } from 'react'
import styles from '../../../styles/projects/projectId.module.css'
import { projectsData } from '@/projects/data';
import Imagem from 'next/image'
import Link from 'next/link'
import deployImg from '../../../projects/deploy.png'
import ghimg from '../../../projects/gh.png'

export default function Page({ params }) {
  const [project, setProject] = useState()
  const { id } = params
  useEffect(() => {
    const filter = projectsData.filter((idProject) => idProject.id === id)
    setProject(filter[0])
  },[id])
  const renderDetails = () => {
    return project.details.split('\n').map((line, index) => (
      <p key={index}>{line}</p>
    ));
  };
  return (
    <div>
        {project && 
         <div className={styles.container}>
            <h1 className={styles.title}>{project.name}</h1>
            <Imagem className={styles.thumbnail} priority src={project.image} width='400' height='250' alt={`thumbnail project ${project.name}`} />
            <Link target='_blank' className={styles.deploy} href={project.deploy}><h1>Deploy</h1></Link>
            <Imagem className={styles.ghimg} src={ghimg} width='40' height='40' alt='gh image'/>
            <Link target='_blank' className={styles.gh} href={project.repositorio}><h1>Repositorio</h1></Link>
            <Imagem className={styles.deployImg} src={deployImg} width='40' height='40' alt='deploy image'/>
            {renderDetails()}
         </div>
        }
    </div>
  )
}
