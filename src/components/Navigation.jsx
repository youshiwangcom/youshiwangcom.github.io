import siteConfig from '../site-config'
import './Navigation.css'

function Navigation() {
  console.log(siteConfig.navigation, siteConfig.navigation, '=====navigation')
  return (
    <nav className="skip-navigation">
      <ul>
        {siteConfig.navigation.map((item) => (
          <li key={item.id}>
            <a href={item.target}>{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation
