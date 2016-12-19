import React from 'react'
import Heading from './Heading'
import Text from './Text'
import FullscreenBackground from './FullscreenBackground'
import MD from './MD'

const Project = ({project}) => {
  const description = MD(project.description)
  return <div>
    <FullscreenBackground src={project.images[0]} />
    <Heading>{project.title}</Heading>
    {project.images.map(
      path =>
        <img src={path} />
    )}
    <Text>
      {description}
    </Text>
  </div>
}

export default Project
