'use client';
import React, { useState } from 'react'
import { projectsData } from '@/projects/data'
import Image from 'next/image'
import styles from '../../styles/projects/project.module.css'
import Link from 'next/link'
import Footer from '@/components/Footer';

export default function Page() {
  const [projects, setProjects] = useState(projectsData);
  const filterProjects = ({target}) => {
    const { id } = target
    const filter = projectsData.filter((project) => project.type === id)
    switch(id) {
      case 'All': {
        setProjects(projectsData)
        break;
      }
      case 'DOM': {
        setProjects(filter)
        break;
      }
      case 'Frontend': {
        setProjects(filter)
        break;
      }
      case 'Backend': {
        setProjects(filter)
        break;
      }
      default:
        break;
    }
  }
  return (
    <div>
      <h1 className={styles.title}>Projetos</h1>
        <div className={styles.btnContainer}>
        <button onClick={ filterProjects } id='All'>All</button>
        <button onClick={ filterProjects } id='DOM'>DOM</button>
        <button onClick={ filterProjects } id='Frontend'>Front End</button>
        <button onClick={ filterProjects } id='Backend'>Back End</button>
        </div>
      <div className={styles.container}>
      {projects.map((project) => (
        
        <div key={project.id} className={styles.card} >
            <h2 className={styles.name}>{project.name}</h2>
            <Link href={`/projects/${project.id}`}>
           <div className={styles.containerImg}>
           <Image className={styles.thumbnail} as="image" priority src={project.image} width='300' height='200' alt='img' />
            <h1 className={styles.saibamais}>saiba mais</h1>
           </div>
            </Link>
            <ul className={styles.list}>{project.tech.map((tech, index) => (
              <li key={index}>{tech}</li>
              ))}</ul>
            <p></p>
          </div>
    
      ))}
      </div>
      <Footer />
    </div>
  )
}