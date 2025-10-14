import { Link } from 'react-router-dom'
import './MainContent.css'

function MainContent({ projects }) {
  return (
    <main id="content" className="main-content">
      <section className="about-section">
        <ul className="about-list">
          <li>
            <Link to="/about" className="about-link">
              À propos de moi
            </Link>
          </li>
        </ul>
      </section>
      
      <section id="menu" className="projects-section">
        <h3 className="projects-title">Projets</h3>
        <ul className="projects-list">
          {projects.map((project) => (
            <li key={project.id} className={project.featured ? 'featured-project' : ''}>
              <Link to={`/project/${project.id}`} className="project-link">
                {project.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}

export default MainContent
