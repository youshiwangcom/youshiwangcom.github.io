import './AboutMe.css'
import ImageGallery from './ImageGallery'

function AboutMe({ aboutData }) {
  if (!aboutData) {
    return <div className="about-error">About information not available</div>
  }

  return (
    <div className="about-me">
      <header className="about-header">
        <h1 className="about-title">{aboutData.title}</h1>
      </header>

      <div className="about-content">
        <section className="about-intro">
          {aboutData.content.map((paragraph, index) => (
            <p key={index} className="about-paragraph">
              {paragraph}
            </p>
          ))}
        </section>

        {aboutData.images && aboutData.images.length > 0 && (
          <section className="about-images">
            <ImageGallery images={aboutData.images} />
          </section>
        )}

        <div className="about-details">
          {aboutData.skills && aboutData.skills.length > 0 && (
            <section className="about-skills">
              <h2 className="section-title">Compétences</h2>
              <ul className="skills-list">
                {aboutData.skills.map((skill, index) => (
                  <li key={index} className="skill-item">
                    {skill}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {aboutData.experience && aboutData.experience.length > 0 && (
            <section className="about-experience">
              <h2 className="section-title">Expérience</h2>
              <div className="experience-list">
                {aboutData.experience.map((exp, index) => (
                  <div key={index} className="experience-item">
                    <div className="experience-header">
                      <h3 className="experience-title">{exp.title}</h3>
                      <span className="experience-period">{exp.period}</span>
                    </div>
                    <p className="experience-description">{exp.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  )
}

export default AboutMe
