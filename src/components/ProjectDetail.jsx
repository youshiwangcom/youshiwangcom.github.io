import { Link, useParams } from 'react-router-dom'
import ImageGallery from './ImageGallery'
import './ProjectDetail.css'

function ProjectDetail({ projects }) {
  const { projectId } = useParams()
  const project = projects.find(p => p.id === projectId)

  if (!project) {
    return (
      <main className="project-detail">
        <div className="project-not-found">
          <h2>Project not found</h2>
          <Link to="/" className="back-link">← Back to projects</Link>
        </div>
      </main>
    )
  }

  return (
    <main className="project-detail">
      <nav className="project-nav">
        <Link to="/" className="back-link">← Back to projects</Link>
      </nav>
      <article className="project-content">
        <h1 className="project-title">{project.title}</h1>
        {project.type && (
          <div className="project-meta">
            <span className="project-type">{project.type}</span>
            {project.year && <span className="project-year">{project.year}</span>}
          </div>
        )}
        <div className="project-description">
          <p>{project.description}</p>
        </div>
        
        {project.images && project.images.length > 0 && (
          <ImageGallery 
            images={project.images}
          />
        )}
      </article>
    </main>
  )
}

export default ProjectDetail
