import { Link } from 'react-router-dom'
import './Header.css'

function Header({ site }) {
  // 处理 logo 路径，确保与 base path 兼容
  const getLogoSrc = (src) => {
    if (!src) return null
    if (src.startsWith('http') || src.startsWith('data:')) {
      return src
    }
    return import.meta.env.BASE_URL + src.replace(/^\//, '')
  }

  return (
    <header className="site-header">
      {site.logo && (
        <div className="site-logo">
          <Link to="/" className="logo-link">
            <img
              src={getLogoSrc(site.logo.src)}
              alt={site.logo.alt}
              width={site.logo.width}
              height={site.logo.height}
            />
          </Link>
        </div>
      )}
      <h1 className="site-title">{site.title}</h1>
      <div className="contact-info">
        <p className="contact-name"><strong>{site.contact.name}</strong></p>
        <p className="contact-email">{site.contact.email}</p>
        <p className="contact-phone">{site.contact.phone}</p>
      </div>
    </header>
  )
}

export default Header
