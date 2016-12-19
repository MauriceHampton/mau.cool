import React from 'react'

import Page from '../components/Page'
import Project from '../components/Project'
import ProjectList from '../components/ProjectList'

import * as projects from '../data/projects/'

const Projects = ({url}) => {
  const title = url.query.title
  if (!title) {
    return (
      <Page>
        <ProjectList Projects={projects} />
      </Page>
    )
  }

  const project = projects[title]

  return (
    <Page>
      <Project project={project} />
    </Page>
  )
}

export default Projects
