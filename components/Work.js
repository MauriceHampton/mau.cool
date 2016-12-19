import React from 'react'
import Slide from './Slide'
import { style } from 'next/css'
import Heading from './Heading'
import * as projects from '../data/projects'

const ProjectTile = ({project}) => {
  const styles = {
    background: `url(${project.thumbnailSrc})`,
    backgroundColor: 'black'
  }
  return <div className='fl w-25 '>
    <a href={`/projects?title=${project.slug}`} className='db aspect-ratio aspect-ratio--1x1 dim'>
      <span className={`bg-center cover aspect-ratio--object ${style(styles)}`} />
    </a>
  </div>
}

const Work = ({className}) =>
  <Slide id='Work' className={className} noshrink>
    <Heading> Work </Heading>

    {
      Object.values(projects).map(
        project =>
          <ProjectTile project={project} />
      )
    }
  </Slide>

export default Work
