import * as projects from '../data/projects'

console.log('PROJECTS', projects)

const ProjectList = () =>
  <ul>
    {
      Object.values(projects).map(
        project =>
          <li key={project.slug}>
            <a href={`/projects?title=${project.slug}`}>
              {project.title}
            </a>
          </li>
      )
    }
  </ul>

export default ProjectList
